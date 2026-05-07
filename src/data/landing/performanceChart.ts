import type { PerformanceChartData } from "@/types/landing";

export const performanceChart: PerformanceChartData = {
  copy: {
    eyebrow: "value",
    title: "본질에 집중한 광고,\n매출이라는 확실한 성과",
    desc: "우리는 시장의 무수한 노이즈 속에서 브랜드의 본질적인 신호를 찾아내고, 데이터 기반의 정교한 분석을 통해 이를 실질적인 구매 행동과 매출 성장으로 전환합니다.",
  },
  bars: {
    competitor: { label: "기존전략", height: "12.5rem", percent: "48%" },
    own: { label: "당사 전략", height: "25rem", callout: "시그널디코드" },
    industry: { label: "타사 평균", height: "17.5rem", percent: "60%" },
  },
};
