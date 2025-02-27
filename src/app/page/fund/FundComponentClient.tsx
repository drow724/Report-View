"use client";

import React, { useState } from "react";
import FundTableTitle from "../../component/fund/fundTableTitle";
import { KBPortfolioDTO } from "@/types/types";

export default function FundPage({
  totalInvestment,
  originalInvestment,
  totalRevenue,
  fundDetails,
}: KBPortfolioDTO) {
  const [isClose, setIsClose] = useState(true);

  return (
    <div
      className={`${
        isClose ? "relative line-clamp-5 block-content" : ""
      } max-w-4xl mx-auto mb-6`}
    >
      <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md ">
        <h1 className="text-2xl font-bold">펀드 투자</h1>
        <p className="text-lg mt-2">
          <span className="font-bold">평가금</span> : {totalInvestment}
          <br />
          <span className="font-bold">원금</span> : {originalInvestment}
        </p>
        <p
          className={`mt-1 ${
            totalRevenue.includes("+") ? "text-red-400" : "text-blue-400"
          } mt-1`}
        >
          총 수익: {totalRevenue}
        </p>
      </div>
      <div className="mb-6 space-y-4">
        <FundTableTitle
          totalInvestment={totalInvestment}
          totalRevenue={totalRevenue}
          subTitle="국내펀드"
          tableDetails={fundDetails.map((fund) => ({
            name: fund.fundName,
            totalRate: fund.totalReturnRate,
            totalProfit: fund.totalProfit,
            fundBankAccount: fund.fundBankAccount,
            totalValue: fund.evaluationAmount,
            principal: fund.principalAmount,
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
