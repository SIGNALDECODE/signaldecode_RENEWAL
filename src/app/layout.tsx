import type { Metadata } from "next";
import "@/assets/styles/main.scss";

export const metadata: Metadata = {
  title: "SIGNALDECODE",
  description: "시그널디코드 - 데이터로 증명하는 퍼포먼스 마케팅 솔루션",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
