"use client";

import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ReportData } from "@/types/types";

export default function ReportPage({ openAiMarkUpMessage }: ReportData) {
  const [isClose, setIsClose] = useState(true);

  return (
    <div
      className={`${
        isClose ? "relative line-clamp-5 block-content" : ""
      } max-w-4xl mx-auto mb-6`}
    >
      <div className="p-6 bg-gray-800 rounded-lg shadow-md ">
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
      {isClose && (
        <button className="copas_btn" onClick={() => setIsClose(false)}>
          <b>더보기</b>
        </button>
      )}
    </div>
  );
}
