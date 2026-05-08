import { CHANNELS } from "@/data/channels";
import { WEB_PROJECTS, WEB_WIP_SLUGS } from "@/data/web/projects";
import type { Channel, ChannelKey } from "@/types/channel";
import type { WebProjectDetail } from "@/types/web";

export function getChannel(key: string): Channel | undefined {
  return CHANNELS.find((c) => c.key === key);
}

export function getAdjacentChannels(key: ChannelKey) {
  const idx = CHANNELS.findIndex((c) => c.key === key);
  const total = CHANNELS.length;
  const prev = CHANNELS[(idx - 1 + total) % total];
  const next = CHANNELS[(idx + 1) % total];
  return { prev, next };
}

export function getWebProject(slug: string): WebProjectDetail | undefined {
  return WEB_PROJECTS.find((p) => p.slug === slug);
}

export function isWebWipSlug(slug: string): boolean {
  return WEB_WIP_SLUGS.includes(slug);
}

export function getAllWebSlugs(): string[] {
  return [...WEB_PROJECTS.map((p) => p.slug), ...WEB_WIP_SLUGS];
}
