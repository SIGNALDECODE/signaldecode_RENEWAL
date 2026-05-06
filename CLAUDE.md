# CLAUDE.md

Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.

---

## 핵심 아키텍처

- **Next.js App Router** + React 19 + TypeScript (strict mode)
- **상태관리**: Zustand — `src/stores/` 디렉토리에 도메인별 스토어 분리 (필요해질 때 생성)
- **스타일**: SCSS Modules + 토큰 시스템 (CSS 변수 ↔ SCSS 변수 하이브리드)
- **라우팅**: slug 기반 (`/marketing/[channel]` 등), id 기반 라우팅 사용 금지
- **Path alias**: `@/*` → `./src/*`

### 디렉토리 구조

```
src/
  app/                     # Next.js App Router
    layout.tsx             # imports @/assets/styles/main.scss
    page.tsx
    marketing/[channel]/page.tsx
  assets/styles/           # 전역 SCSS 자산
    main.scss              # 엔트리 — layout.tsx에서 한 번 import
    base/                  # CSS 변수 정의 + 전역 reset + 폰트
      _fonts.scss          # Pretendard @import
      _root.scss           # :root { --color-*, --sp-*, ... }
      _reset.scss          # *, html, body, a, button, img
      _index.scss          # @forward
    tokens/                # SCSS 변수 (CSS 변수 wrapper)
      _colors.scss, _typography.scss, _spacing.scss,
      _radius.scss, _shadows.scss, _layout.scss, _z-index.scss
      _index.scss          # @forward aggregator
  components/
    landing/               # 랜딩 페이지 섹션
    marketing/             # 마케팅 페이지 섹션
    ui/                    # Header / Footer / Reveal 등 공용
    {Component}.tsx + {Component}.module.scss
  data/                    # 모든 UI 텍스트/콘텐츠
    channels.ts            # 마케팅 채널 카드 데이터
    landing/               # 섹션별 분리 (hero, overview, valueCards, ...)
    ui/                    # header, footer
    marketing/             # hero
    index.ts               # 통합 re-export
  lib/
    data.ts                # 조회 함수 (getChannel, getAdjacentChannels 등)
  stores/                  # Zustand 스토어 (도메인별, 필요 시 생성)
  types/                   # 도메인 타입
    channel.ts, landing.ts, ui.ts, marketing.ts
```

### 데이터 흐름
`src/types/*.ts` (타입 정의) → `src/data/**/*.ts` (데이터) → `src/lib/data.ts` (조회 함수) → 컴포넌트
- 컴포넌트 → 타입 단방향 의존. **data → component import 금지**.
- 데이터는 섹션별로 파일 분리 (예: `data/landing/overview.ts`).
- 단일 도메인 조회는 직접 import 가능. 여러 도메인 합산이 필요하면 `lib/data.ts`에 함수 추가.

---

## 데이터 분리 원칙 (절대)

모든 UI 텍스트는 `src/data/**/*.ts`에서 관리한다. **하드코딩 절대 금지.**
- 페이지 타이틀 / 메타 설명 / OG 태그
- 이미지 alt(의미 있는 경우), 버튼 label, aria-label(가시 텍스트)
- 섹션 제목 / 설명 / FAQ / 카드 콘텐츠

**예외 — 인라인 허용:**
- 장식용 빈 alt (`alt=""`) — WCAG 권장
- 정적 SVG 내부 path / 아이콘 a11y용 `aria-hidden`
- 동작용 짧은 ARIA 라벨 (`aria-label="prev"`, `aria-label="toggle"`)

데이터는 TS로 관리해 타입 안전성을 확보한다 (JSON 사용 금지). 모든 데이터는 `src/types/`의 타입을 사용해 선언한다.

---

## 네이밍 규칙

**컴포넌트 파일명** (PascalCase):
- 큰 섹션: `SomethingContainer.tsx`
- 레이아웃: `SomethingLayout.tsx`
- 래퍼: `SomethingWrap.tsx`

**CSS 클래스** (kebab-case, BEM 스타일):
- ul: `-list`, li: `-item`
- 스타일 용도 id 사용 금지 (form label용 id/htmlFor는 허용)

**데이터 파일명** (camelCase):
- `valueCards.ts`, `phoneSlider.ts` 등 — 컴포넌트와 매칭

---

## 스타일 / 토큰 규칙 (절대 준수)

- inline style 금지 (애니메이션 등 동적 값은 예외 — `transform`, `opacity` 등)
- HEX / px 직접 사용 금지 — 항상 토큰 사용
- 컴포넌트 파일 내 스타일 선언 금지 (CSS-in-JS 금지)
- 모든 컴포넌트 스타일은 `*.module.scss`로 작성

**토큰 사용법 (하이브리드):**
- 토큰 값 정의: `src/assets/styles/base/_root.scss`의 `:root { --color-*: ... }`
- SCSS 변수 (자동완성/오타 방지): `src/assets/styles/tokens/_*.scss`에서 `$color-primary: var(--color-primary);`로 매핑
- 컴포넌트 SCSS에서:
  ```scss
  @use "tokens" as *;  // sassOptions.includePaths에 등록되어 있음
  .x { color: $color-primary; padding: $sp-4; }
  ```
- 또는 직접 `var(--color-primary)` 사용도 허용

**전역 스타일 추가 시:**
- 새 reset/base 규칙 → `src/assets/styles/base/_reset.scss` 또는 새 partial 추가 후 `_index.scss`에 `@forward`
- 새 폰트 → `_fonts.scss`
- 새 mixin/util이 필요해지면 `src/assets/styles/mixins/` 또는 `utils/` 디렉토리 생성

**토큰 카테고리:**
- 색상: `$color-*` / `--color-*`
- 폰트 패밀리: `$ff-*` / `--ff-*`
- 폰트 크기: `$fs-*` / `--fs-*`
- 폰트 굵기: `$fw-*` / `--fw-*`
- 간격: `$sp-*` / `--sp-*`
- 라운드: `$r-*` / `--r-*`
- 그림자: `$shadow-*` / `--shadow-*`
- 레이아웃: `$container-*`, `$content-*` / `--container-*`, `--content-*`
- z-index: `$z-*` / `--z-*`

새 디자인 값이 필요하면 `globals.scss`에 CSS 변수를 추가한 뒤, 필요하면 `tokens/`에 SCSS 매핑을 추가한다.

---

## SEO / A11y 규칙

- 시맨틱 태그: `<main>`, `<section>`, `<article>`, `<nav>` 등
- 페이지당 H1 1개, 이후 H2 → H3 계층
- alt, aria-label은 반드시 data에서 가져오기 (위 "예외" 항목 제외)
- 키보드 접근성: 인터랙션 요소는 `<button>`, `<a>`, `<input>` 사용
- Metadata API로 메타 태그 생성, JSON-LD 구조화 데이터 지원

---

## 커스터마이징 원칙

고객사/브랜드 변경 시 아래만 수정:
1. `src/data/**/*.ts` — 문구/구성/SEO 데이터
2. `src/assets/styles/base/_root.scss`의 `:root` 토큰 — 브랜드 컬러/타이포/스페이싱
3. (생기면) `src/config/index.ts` — API base URL 등

컴포넌트/페이지 구조 변경은 **최후의 수단**.

---

## 금지 사항

- inline style / HEX / px 직접 사용 (애니메이션 동적 값은 예외)
- UI 텍스트/의미 있는 alt/aria 하드코딩
- JSON으로 데이터 관리 (TS로 타입 안전성 유지)
- `data/` → `components/` import (역방향 의존)
- 불필요한 `any` 타입

