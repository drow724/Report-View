"use client";

import React, { useState, useRef } from "react";
import ShareTableTitle from "../../component/share/shareTableTitle";
import {
  TossPortfolioDTO,
  DomesticStock,
  OverseasStock,
} from "../../../types/types";
import { ChevronsDown, ChevronsUp } from "lucide-react";

export default function SharePage({
  totalInvestment,
  originalInvestment,
  totalRevenue,
  dailyRevenue,
  domesticTotal,
  domesticRevenue,
  overSeasTotal,
  overSeasRevenue,
  domesticsList,
  overSeasList,
}: TossPortfolioDTO) {
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
              containerRef.current.getBoundingClientRect().top + window.scrollY;
            smoothScrollTo(topY, 1000);
          }
          setIsClose(true);
        }, 300); // Tailwind `duration-500`의 절반 시간 후 이동 시작
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
          ? "relative block-content max-h-72 overflow-hidden scale-100"
          : `relative open-content max-h-[10000px] scale-105`
      } max-w-4xl mx-auto mb-20 transition-all duration-1000 ease-in-out`}
    >
      <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md transition-all duration-1000 ease-in-out">
        <h1 className="text-2xl font-bold">주식 투자</h1>
        <p className="text-lg mt-2">
          <span className="font-bold">평가금</span> : {totalInvestment}
          <br />
          <span className="font-bold">원금</span> : {originalInvestment}
        </p>
        <p
          className={`${
            totalRevenue.includes("+") ? "text-red-400" : "text-blue-400"
          } mt-1`}
        >
          총 수익: {totalRevenue}
        </p>
        <p
          className={`${
            dailyRevenue.includes("+") ? "text-red-400" : "text-blue-400"
          }`}
        >
          일간 수익: {dailyRevenue}
        </p>
      </div>
      <div className="mb-6 space-y-4">
        <ShareTableTitle
          subTitle="국내주식"
          totalInvestment={domesticTotal}
          totalRevenue={domesticRevenue}
          tableDetails={domesticsList.map((domestics: DomesticStock) => ({
            name: domestics.stockName,
            totalRate: domestics.totalReturnRate,
            totalProfit: domestics.totalProfit,
            avgPrice: domestics.averagePricePerShare,
            currentPrice: domestics.currentPrice,
            shares: domestics.quantityOwned,
            totalValue: domestics.evaluationAmount,
            principal: domestics.principalAmount,
            dailyRate: domestics.dailyReturnRate,
            dailyProfit: domestics.dailyProfit,
          }))}
        />
        <ShareTableTitle
          subTitle="해외주식"
          totalInvestment={overSeasTotal}
          totalRevenue={overSeasRevenue}
          tableDetails={overSeasList.map((domestics: OverseasStock) => ({
            name: domestics.stockName,
            totalRate: domestics.totalReturnRate,
            totalProfit: domestics.totalProfit,
            avgPrice: domestics.averagePricePerShare,
            currentPrice: domestics.currentPrice,
            shares: domestics.quantityOwned,
            totalValue: domestics.evaluationAmount,
            principal: domestics.principalAmount,
            dailyRate: domestics.dailyReturnRate,
            dailyProfit: domestics.dailyProfit,
          }))}
        />
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
