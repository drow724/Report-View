import React from "react";

export interface FundTableDetail {
  name: string;
  totalRate: string;
  totalProfit: string;
  fundBankAccount: string;
  isFundPositive: boolean;
}

const FundTableTr: React.FC<FundTableDetail> = ({
  name,
  totalRate,
  totalProfit,
  fundBankAccount,
  isFundPositive,
}) => {
  return (
    <div className="p-3 bg-gray-700 rounded-lg">
      <p className="text-lg font-semibold">{name}</p>
      <p className={`${isFundPositive ? "text-red-400" : "text-green-400"}`}>
        총 수익: {totalRate} ({totalProfit})
      </p>
      <p className="text-sm text-gray-400">펀드 계좌: {fundBankAccount}</p>
    </div>
  );
};

export default FundTableTr;
