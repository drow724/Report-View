import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "송재근의 주식 포트폴리오",
  description: "송재근의 주식(국내, 해외) 국내 펀드 상품 포트폴리오 입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="kr">
      <body className="bg-gray-900 text-white p-6">{children}</body>
    </html>
  );
}
