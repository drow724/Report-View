"use client";

import React, { useState } from "react";
import ShareTableTitle from "../../component/share/shareTableTitle";
import {
  TossPortfolioDTO,
  DomesticStock,
  OverseasStock,
} from "../../../types/types";

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

  return (
    <div
      className={`${
        isClose ? "relative line-clamp-3 block-content" : ""
      } max-w-4xl mx-auto mb-6`}
    >
      <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md">
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
      {isClose && (
        <button className="copas_btn" onClick={() => setIsClose(false)}>
          <b>더보기</b>
        </button>
      )}
    </div>
  );
}
