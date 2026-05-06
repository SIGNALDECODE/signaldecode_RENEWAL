import type { Channel, ChannelKey } from "@/types/channel";

export type { Channel, ChannelKey };

const NAVER_TINT = "rgba(3, 169, 77, 0.4)";
const SNS_TINT = "rgba(238, 78, 52, 0.35)";
const VIDEO_TINT = "rgba(96, 96, 96, 0.4)";
const BUSINESS_TINT = "rgba(67, 67, 67, 0.4)";

export const CHANNELS: Channel[] = [
  {
    key: "naver",
    label: "네이버",
    pillLabel: "NAVER",
    brand: "NAVER",
    kicker: "Advertising Media",
    title: "네이버",
    tint: NAVER_TINT,
    cards: [
      {
        tag: "브랜드 유입",
        title: "홈판 노출",
        desc: "검색 상위에 노출될 수 있도록 구조를 설계합니다. 지속적인 방문자 유입과 브랜드 노출을 확보합니다.",
        variant: "phone",
      },
      {
        tag: "핵심 키워드 최적화",
        title: "검색 키워드 최적화",
        desc: "구매 가능성이 높은 핵심 키워드를 선별하고 최적화 합니다. 전환 가능성이 높은 유입을 만듭니다.",
        variant: "search",
      },
      {
        tag: "실제 방문 고객 유입",
        title: "플레이스",
        desc: "지역 검색에 최적화된 정보와 콘텐츠를 구성하고 실제 방문으로 이어지는 고객 유입을 증가시킵니다.",
        variant: "map",
      },
      {
        tag: "블로그 노출",
        title: "블로그",
        desc: "검색 중심의 콘텐츠 기획 및 체계적 발행을 합니다. 지속적으로 유입이 발생하는 구조를 만듭니다.",
        variant: "phone",
      },
      {
        tag: "전략적 답변 작성",
        title: "지식인",
        desc: "질문에 맞는 답변 콘텐츠를 전략적으로 작성합니다. 신뢰도를 높여 자연스럽게 고객 유입을 유도합니다.",
        variant: "phone",
      },
      {
        tag: "신뢰 기반 유입",
        title: "카페 (댓글작업, 커뮤니티 활성화, C랭크, 최적화)",
        desc: "커뮤니티 내 자연스러운 참여와 노출을 설계합니다. 광고 느낌 없이 신뢰 기반의 유입을 확보합니다.",
        variant: "phone",
      },
      {
        tag: "영상 콘텐츠",
        title: "클립 제작 및 노출",
        desc: "짧고 집중도 높은 영상 콘텐츠를 제작합니다. 빠른 확산을 통해 신규 유입과 관심도를 높입니다.",
        variant: "phone",
      },
      {
        tag: "노출 구조 개선",
        title: "스마트스토어 최적화",
        desc: "상품 상세와 노출 구조를 전환 중심으로 개선합니다. 클릭률과 구매 전환율을 동시에 높입니다.",
        variant: "phone",
      },
      {
        tag: "리뷰 콘텐츠",
        title: "체험단",
        desc: "실제 사용 기반 리뷰 콘텐츠를 기획 및 운영합니다. 신뢰도를 높여 구매에 직접적인 영향을 줍니다.",
        variant: "phone",
      },
      {
        tag: "고객 후기",
        title: "후기 업로드",
        desc: "고객 후기를 전략적으로 수집하고 콘텐츠화합니다. 브랜드 신뢰를 강화하고 전환율을 끌어올립니다.",
        variant: "phone",
      },
    ],
  },
  {
    key: "google",
    label: "구글",
    pillLabel: "Google",
    brand: "Google",
    kicker: "Advertising Media",
    title: "구글",
    tint:
      "linear-gradient(180deg, rgba(234,67,53,0.5) 0%, rgba(255,185,2,0.5) 39%, rgba(52,168,83,0.5) 71%, rgba(66,133,244,0.05) 100%)",
    cards: [
      {
        tag: "검색 알고리즘",
        title: "SEO 최적화",
        desc: "검색 알고리즘에 맞춰 콘텐츠와 구조를 최적화합니다. 지속적인 상위 노출과 자연 유입을 확보합니다.",
      },
      {
        tag: "지도 노출",
        title: "구글 지도 노출",
        desc: "구글 지도와 로컬 검색에 최적화된 정보를 구성합니다. 지역 기반 고객 유입과 방문 전환을 높입니다.",
      },
      {
        tag: "브랜드 노출",
        title: "앱 & 배너 노출",
        desc: "타겟 고객에게 맞는 광고를 전략적으로 운영합니다. 브랜드 노출을 확대하고 유입을 빠르게 확보합니다.",
      },
    ],
  },
  {
    key: "sns",
    label: "SNS",
    pillLabel: "SNS",
    brand: "SNS",
    kicker: "Advertising Media",
    title: "SNS",
    tint: SNS_TINT,
    cards: [
      {
        tag: "타겟 맞춤형 콘텐츠",
        title: "인스타 & 페이스북",
        desc: "타겟 맞춤 콘텐츠와 광고를 전략적으로 운영합니다. 도달 및 반응을 높여 브랜드 유입을 확대합니다.",
        brand: "Instagram",
      },
      {
        tag: "트렌드 콘텐츠",
        title: "스레드",
        desc: "트렌드 기반 콘텐츠로 빠른 노출 구조를 만듭니다. 자연스러운 확산을 통해 신규 유입을 유도합니다.",
        brand: "Threads",
      },
      {
        tag: "검색 최적화",
        title: "티스토리",
        desc: "검색 최적화 콘텐츠 기반의 노출 구조를 설계합니다. 지속적인 검색 유입과 방문자 증가를 만듭니다.",
        brand: "Tistory",
      },
      {
        tag: "이미지 중심",
        title: "핀터레스트 노출",
        desc: "이미지 중심 콘텐츠로 추천 노출을 강화합니다. 글로벌 유입과 장기적인 트래픽을 확보합니다.",
        brand: "Pinterest",
      },
    ],
  },
  {
    key: "video",
    label: "비디오 콘텐츠",
    pillLabel: "Video Contents",
    brand: "Video",
    kicker: "Advertising Media",
    title: "비디오 콘텐츠",
    tint: VIDEO_TINT,
    cards: [
      {
        tag: "장기 노출 구조",
        title: "유튜브",
        desc: "검색 기반 콘텐츠로 장기 노출 구조를 설계합니다. 지속적인 조회수와 안정적인 유입을 확보합니다.",
        brand: "YouTube",
      },
      {
        tag: "유입되는 콘텐츠",
        title: "틱톡",
        desc: "짧고 강한 콘텐츠로 빠른 노출을 유도합니다. 알고리즘 확산을 통해 신규 유입을 극대화합니다.",
        brand: "TikTok",
      },
      {
        tag: "SNS 알고리즘",
        title: "릴스",
        desc: "SNS 알고리즘에 맞춘 영상 콘텐츠를 제작합니다. 도달과 반응을 높여 브랜드 노출을 확대합니다.",
        brand: "Reels",
      },
      {
        tag: "짧은 영상",
        title: "숏츠",
        desc: "짧은 영상으로 반복 노출 구조를 만듭니다. 조회수 증가와 빠른 관심 유입을 유도합니다.",
        brand: "Shorts",
      },
      {
        tag: "영상 콘텐츠",
        title: "영상 제작",
        desc: "브랜드와 목적에 맞는 영상 콘텐츠를 기획·제작합니다. 전환까지 이어지는 콘텐츠 구조를 완성합니다.",
        brand: "Video",
      },
    ],
  },
  {
    key: "influencer",
    label: "인플루언서 커머스",
    pillLabel: "Influencer Commerce",
    brand: "Influencer",
    kicker: "Advertising Media",
    title: "인플루언서 커머스",
    cards: [
      {
        tag: "실시간 방송",
        title: "라이브 커머스",
        desc: "실시간 방송으로 상품의 매력을 직접 전달합니다. 즉각적인 반응과 구매 전환을 동시에 유도합니다.",
        brand: "Live",
        tint: "rgba(3, 169, 77, 0.4)",
      },
      {
        tag: "영상 기반 상품 구매",
        title: "유튜브 커머스",
        desc: "영상 콘텐츠에 상품 구매 흐름을 자연스럽게 연결하여 소비에서 구매까지 이어지는 구조를 만듭니다.",
        brand: "Shopping",
        tint: "rgba(255, 0, 0, 0.4)",
      },
      {
        tag: "고객 접점 강화",
        title: "카카오",
        desc: "카카오 채널과 메시지를 활용해 고객 접점을 강화하고 재방문과 구매 전환을 유도한 구조를 만듭니다.",
        brand: "Kakao",
        tint: "rgba(206, 187, 1, 0.5)",
      },
      {
        tag: "반복 구매 유도",
        title: "재구매 유도",
        desc: "기존 고객 데이터로 맞춤 전략을 설계합니다. 반복 구매를 유도해 매출을 안정적으로 증가시킵니다.",
        brand: "Purchase",
        tint: "rgba(3, 169, 77, 0.4)",
      },
      {
        tag: "구매 전환율 상승",
        title: "체험단",
        desc: "실제 사용 기반 리뷰 콘텐츠를 기획 및 확산시킵니다. 신뢰도를 높여 구매로서의 전환율을 올립니다.",
        brand: "Influencer",
        tint: "rgba(3, 169, 77, 0.4)",
      },
    ],
  },
  {
    key: "design",
    label: "디자인",
    pillLabel: "Design",
    brand: "",
    kicker: "Advertising Media",
    title: "디자인",
    cards: [
      {
        tag: "클릭률 상승",
        title: "배너",
        desc: "클릭을 유도하는 구조와 메시지로 배너를 설계하고 노출 대비 클릭률을 높이고 유입을 극대화합니다.",
        brand: "",
      },
      {
        tag: "사용자 흐름 고려",
        title: "웹 디자인",
        desc: "사용자 흐름을 고려한 구조 중심으로 웹을 설계하여 방문자가 이탈하지 않고 전환까지 이어지게 합니다.",
        brand: "",
      },
      {
        tag: "직관성 기반",
        title: "앱 디자인",
        desc: "사용성과 직관성을 기반으로 인터페이스를 설계합니다. 이용 편의성을 높여 체류 시간을 개선합니다.",
        brand: "",
      },
      {
        tag: "시선 집중 비주얼",
        title: "광고 썸네일",
        desc: "시선을 멈추게 하는 비주얼과 카피를 설계하여 노출 대비 클릭률을 높여 광고 효율을 극대화합니다.",
        brand: "",
      },
      {
        tag: "구매 유도 효과",
        title: "포스터 제작",
        desc: "핵심 메시지가 한눈에 전달되도록 디자인합니다. 브랜드 인지도를 높이고 고객에게 구매를 유도합니다.",
        brand: "",
      },
    ],
  },
  {
    key: "business",
    label: "비즈니스",
    pillLabel: "Business",
    brand: "",
    kicker: "Advertising Media",
    title: "비즈니스",
    tint: BUSINESS_TINT,
    cards: [
      {
        tag: "맞춤 전략 설계",
        title: "협의 문의",
        desc: "비즈니스 상황에 맞는 맞춤 전략을 함께 설계하고 목표와 예산에 맞춰 효율적인 방향을 제안합니다.",
        brand: "",
      },
      {
        tag: "협업 제안",
        title: "제휴 문의",
        desc: "파트너십으로 시너지를 만드는 협업을 제안하고 브랜드와 서비스 확장을 위한 성과를 함께 만듭니다.",
        brand: "",
      },
    ],
  },
];

