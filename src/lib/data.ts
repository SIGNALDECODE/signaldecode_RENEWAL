import { CHANNELS } from "@/data/channels";
import type { Channel, ChannelKey } from "@/types/channel";

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
