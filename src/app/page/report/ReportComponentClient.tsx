"use client";

import React, { useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReportData } from "@/types/types";
import { ChevronsDown, ChevronsUp } from "lucide-react";

export default function ReportPage({ openAiMarkUpMessage }: ReportData) {
  const [isClose, setIsClose] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null); // 최상단 div 참조
  const smoothScrollTo = (targetY: number, duration = 500) => {
    const start = window.scrollY;
    const startTime = performance.now();

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutQuad(progress);
      const nextY = start + (targetY - start) * easedProgress;

      window.scrollTo(0, nextY);

      if (elapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const toggleContent = () => {
    if (!isClose) {
      // ✅ 1단계: 닫을 때 -> div의 하단을 "화면 중앙"으로 이동
      if (containerRef.current) {
        const { bottom } = containerRef.current.getBoundingClientRect();
        const centerY = bottom + window.scrollY - window.innerHeight / 2;

        smoothScrollTo(centerY, 300);

        // ✅ 2단계: div가 collapse되기 시작한 후 300ms 뒤에 상단으로 이동
        setTimeout(() => {
          if (containerRef.current) {
            const topY =
              containerRef.current.getBoundingClientRect().top +
              window.scrollY -
              50;
            smoothScrollTo(topY, 1000);
          }
          setIsClose(true);
        }, 300); // Tailwind `duration-1000`의 절반 시간 후 이동 시작
      }
    } else {
      setIsClose(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`${
        isClose
          ? "relative block-content max-h-72 overflow-hidden scale-100 mb-6"
          : `relative open-content max-h-[10000px] scale-105 mt-20 mb-20`
      } max-w-4xl mx-auto mb-20 max-w-4xl mx-auto transition-all duration-1000 ease-in-out`}
    >
      <div
        className={`${
          isClose ? "" : "pb-16"
        } p-6 bg-gray-800 rounded-lg transition-all duration-1000 ease-in-out`}
      >
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold flex items-center mb-4">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-bold flex items-center mb-4">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-bold flex items-center mb-4">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-lg font-semibold flex items-center mb-4">
                {children}
              </h4>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-5">{children}</ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal pl-5">{children}</ol>
            ),
            li: ({ children }) => <li className="mb-1">{children}</li>,
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-yellow-500 pl-4 italic text-yellow-400">
                {children}
              </blockquote>
            ),
            hr: () => <hr className="border-gray-700 my-4" />,
            p: ({ children }) => (
              <p className="text-yellow-400 font-semibold">{children}</p>
            ),
            code: ({ children }) => <>{children}</>,
          }}
        >
          {openAiMarkUpMessage}
        </ReactMarkdown>
      </div>
      <button
        className={`transition-all duration-1000 ease-in-out ${
          isClose ? "scale-100 copas_btn_close" : "scale-105 copas_btn_open"
        }`}
        onClick={toggleContent}
      >
        {isClose ? (
          <ChevronsDown className="w-8 h-8 text-white-900 animate-bounce" />
        ) : (
          <ChevronsUp className="w-8 h-8 text-white-900 animate-bounce" />
        )}
      </button>
    </div>
  );
}
