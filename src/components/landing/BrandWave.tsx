"use client";

import { useEffect, useRef } from "react";
import { Renderer, Program, Mesh, Triangle, Texture } from "ogl";
import styles from "@/assets/styles/components/Hero.module.scss";

const FONT_PX = 230; // matches CSS 14.375rem display size
const FONT_FAMILY = '"Inter", "Pretendard", sans-serif';
const FONT_WEIGHT = 700;
const LETTER_SPACING_EM = -0.04;

// ─── Wave tuning ────────────────────────────────────────────────────────────
// All values are tweakable; comments describe their visual effect.
const WAVE = {
  RADIUS: 0.1,       // 영향 반경 (UV 단위, 0~1). 키우면 더 넓게 출렁임
  WAVE_AMP: 0.025,   // sin 파동 진폭. 키우면 마루/골이 더 깊어짐
  NOISE_AMP: 0.015,  // 유기적 노이즈 진폭. 키우면 더 일그러짐
  WAVE_FREQ: 28.0,   // 파장 빈도. 키우면 잔물결, 줄이면 큰 너울
  WAVE_SPEED: 2.6,   // 파동 진행 속도
  NOISE_SCALE: 4.0,  // 노이즈 격자 밀도
  NOISE_SPEED: 0.4,  // 노이즈가 흐르는 속도
  HOVER_IN: 0.08,    // 호버 진입/이탈 부드러움 (0.02~0.2). 클수록 즉각적
  MOUSE_LERP: 0.18,  // 커서 추종 속도 (0.05~0.5). 클수록 즉각적
};

const f = (n: number) => n.toFixed(4);

const vertex = /* glsl */ `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// 2D simplex noise (Ashima)
const fragment = /* glsl */ `
  precision highp float;

  uniform sampler2D tMap;
  uniform vec2  uMouse;       // 0..1 in canvas space
  uniform float uTime;
  uniform float uHover;       // 0..1 ease in/out
  uniform vec2  uAspect;      // container w/h ratio for distance correction
  varying vec2 vUv;

  vec3 mod289(vec3 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec2 mod289(vec2 x){return x - floor(x*(1.0/289.0))*289.0;}
  vec3 permute(vec3 x){return mod289(((x*34.0)+1.0)*x);}
  float snoise(vec2 v){
    const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                       -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0,0.0) : vec2(0.0,1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0))
                   + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0*fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314*(a0*a0 + h*h);
    vec3 g;
    g.x  = a0.x  * x0.x  + h.x  * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;

    // aspect-corrected distance from cursor (so falloff is round, not stretched)
    vec2 d = (uv - uMouse) * uAspect;
    float dist = length(d);

    // hover envelope: strong near cursor, fades out smoothly
    float falloff = smoothstep(${f(WAVE.RADIUS)}, 0.0, dist) * uHover;

    // traveling sine wave + organic noise
    float wave  = sin((uv.x - uMouse.x) * ${f(WAVE.WAVE_FREQ)} - uTime * ${f(WAVE.WAVE_SPEED)});
    float noise = snoise(vec2(uv.x * ${f(WAVE.NOISE_SCALE)} + uTime * ${f(WAVE.NOISE_SPEED)}, uv.y * 2.5 - uTime * 0.2));

    vec2 disp = vec2(
      noise * ${f(WAVE.NOISE_AMP)} * falloff,
      (wave * ${f(WAVE.WAVE_AMP)} + noise * ${f(WAVE.NOISE_AMP * 0.8)}) * falloff
    );

    vec4 col = texture2D(tMap, uv + disp);
    gl_FragColor = col;
  }
`;

export default function BrandWave({ text }: { text: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const canvas = canvasRef.current;
    if (!wrap || !canvas) return;

    let disposed = false;
    let rafId = 0;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const renderer = new Renderer({ canvas, dpr, alpha: true, premultipliedAlpha: true });
    const gl = renderer.gl;
    gl.clearColor(0, 0, 0, 0);

    // Offscreen text canvas → texture
    const textCanvas = document.createElement("canvas");
    const tctx = textCanvas.getContext("2d");
    if (!tctx) return;

    const texture = new Texture(gl, {
      image: textCanvas,
      generateMipmaps: false,
      minFilter: gl.LINEAR,
      magFilter: gl.LINEAR,
      premultiplyAlpha: true,
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        tMap: { value: texture },
        uMouse: { value: [0.5, 0.5] },
        uTime: { value: 0 },
        uHover: { value: 0 },
        uAspect: { value: [1, 1] },
      },
      transparent: true,
    });

    const mesh = new Mesh(gl, { geometry: new Triangle(gl), program });

    // Smoothing state
    let mouseTarget: [number, number] = [0.5, 0.5];
    let mouseCurrent: [number, number] = [0.5, 0.5];
    let hoverTarget = 0;
    let hoverCurrent = 0;

    const drawText = (cssW: number, cssH: number) => {
      const w = Math.max(1, Math.floor(cssW * dpr));
      const h = Math.max(1, Math.floor(cssH * dpr));
      textCanvas.width = w;
      textCanvas.height = h;

      tctx.clearRect(0, 0, w, h);
      tctx.textAlign = "center";
      tctx.textBaseline = "middle";
      tctx.font = `${FONT_WEIGHT} ${FONT_PX * dpr}px ${FONT_FAMILY}`;
      // canvas 2d has no letter-spacing in older Safari; emulate manually
      const lsPx = FONT_PX * dpr * LETTER_SPACING_EM;
      const chars = Array.from(text);
      const widths = chars.map((c) => tctx.measureText(c).width);
      const totalW =
        widths.reduce((a, b) => a + b, 0) + lsPx * (chars.length - 1);
      const startX = w / 2 - totalW / 2;
      const endX = w / 2 + totalW / 2;
      const y = h / 2;

      const gradient = tctx.createLinearGradient(startX, y, endX, y);
      gradient.addColorStop(0, "rgba(134, 132, 132, 0.8)");
      gradient.addColorStop(0.5, "rgba(191, 191, 191, 0.8)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.8)");
      tctx.fillStyle = gradient;

      let x = startX;
      for (let i = 0; i < chars.length; i++) {
        tctx.fillText(chars[i], x + widths[i] / 2, y);
        x += widths[i] + lsPx;
      }
      texture.image = textCanvas;
      texture.needsUpdate = true;
    };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      const cssW = rect.width;
      const cssH = rect.height;
      renderer.setSize(cssW, cssH);
      drawText(cssW, cssH);
      const aspect = cssW / cssH;
      program.uniforms.uAspect.value = [1, 1 / aspect];
    };

    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    // Wait for fonts before first draw to avoid fallback flash
    const start = (document as Document & { fonts?: { ready: Promise<unknown> } }).fonts?.ready;
    Promise.resolve(start).then(() => {
      if (disposed) return;
      resize();
    });

    const onMove = (e: PointerEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseTarget = [x, 1 - y]; // flip Y for GL UV
      hoverTarget = 1;
    };
    const onLeave = () => {
      hoverTarget = 0;
    };
    wrap.addEventListener("pointermove", onMove);
    wrap.addEventListener("pointerleave", onLeave);

    const t0 = performance.now();
    const loop = (t: number) => {
      if (disposed) return;
      const dt = (t - t0) / 1000;

      mouseCurrent[0] += (mouseTarget[0] - mouseCurrent[0]) * WAVE.MOUSE_LERP;
      mouseCurrent[1] += (mouseTarget[1] - mouseCurrent[1]) * WAVE.MOUSE_LERP;
      hoverCurrent += (hoverTarget - hoverCurrent) * WAVE.HOVER_IN;

      program.uniforms.uMouse.value = mouseCurrent;
      program.uniforms.uHover.value = hoverCurrent;
      program.uniforms.uTime.value = dt;

      renderer.render({ scene: mesh });
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    return () => {
      disposed = true;
      cancelAnimationFrame(rafId);
      ro.disconnect();
      wrap.removeEventListener("pointermove", onMove);
      wrap.removeEventListener("pointerleave", onLeave);
    };
  }, [text]);

  return (
    <div ref={wrapRef} className={styles.brand} aria-label={text}>
      <canvas ref={canvasRef} className={styles.brandCanvas} aria-hidden="true" />
    </div>
  );
}
