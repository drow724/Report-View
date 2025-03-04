import React from "react";

export interface ShareTableDetail {
  name: string;
  totalRate: string;
  totalProfit: string;
  avgPrice: string;
  currentPrice: string;
  shares: string;
  totalValue: string;
  principal: string;
  dailyRate: string;
  dailyProfit: string;
}

const ShareTableTr: React.FC<ShareTableDetail> = ({
  name,
  totalRate,
  totalProfit,
  avgPrice,
  currentPrice,
  shares,
  totalValue,
  principal,
  dailyRate,
  dailyProfit,
}) => {
  return (
    <div className="p-3 bg-gray-700 rounded-lg">
      <p className="text-lg font-semibold">{name}</p>
      <p
        className={`${
          totalRate?.includes("-") ? "text-blue-400" : "text-red-400"
        }`}
      >
        총 수익: {totalRate} ({totalProfit})
      </p>
      <p
        className={`${
          dailyRate?.includes("-") ? "text-blue-400" : "text-red-400"
        }`}
      >
        일간 수익: {dailyRate} ({dailyProfit})
      </p>
      <p className="text-sm text-gray-400">
        보유 수량: {shares} | 현재가: {currentPrice} <br />
        평가금: {totalValue} | 원금: {principal} <br />
        1주 평균금액: {avgPrice}
      </p>
    </div>
  );
};

export default ShareTableTr;
