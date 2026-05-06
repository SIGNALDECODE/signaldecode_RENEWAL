import type { PerformanceChartData } from "@/types/landing";

export const performanceChart: PerformanceChartData = {
  copy: {
    eyebrow: "VALUE",
    title: "수치로 증명하는 압도적인 캠페인 퍼포먼스",
    desc: "단순한 광고 집행을 넘어, 실시간 데이터 분석을 통해 타사 대비 월등한 전환율(CVR)을 기록합니다. 최적의 효율을 찾아내는 그로스 해킹 전략으로 귀사의 매출 곡선을 가파르게 상승시켜 보세요.",
  },
  bars: {
    competitor: { label: "기존전략", height: "9rem", percent: "55%" },
    own: { label: "당사 전략", height: "20rem", callout: "압도적인 캠페인 퍼포먼스" },
    industry: { label: "타사 평균", height: "12rem", percent: "75%" },
  },
};
