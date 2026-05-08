import type { WebProjectDetail } from "@/types/web";
import { eumfood } from "./eumfood";
import { zerolabs } from "./zerolabs";
import { cheongchun } from "./cheongchun";
import { daeseongKiosk } from "./daeseong-kiosk";

export const WEB_PROJECTS: WebProjectDetail[] = [
  eumfood,
  zerolabs,
  cheongchun,
  daeseongKiosk,
];

export const WEB_WIP_SLUGS = ["jeongseong-sr", "daeseong-sales"];
