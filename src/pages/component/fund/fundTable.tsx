import React from "react";

export interface FundTableDetail {
  name: string;
  totalRate: string;
  totalProfit: string;
  fundBankAccount: string;
  totalValue: string;
  principal: string;
}

const FundTableTr: React.FC<FundTableDetail> = ({
  name,
  totalRate,
  totalProfit,
  fundBankAccount,
  totalValue,
  principal,
}) => {
  return (
    <div className="p-3 bg-gray-700 rounded-lg">
      <p className="text-lg font-semibold">{name}</p>
      <p className={`${totalRate ? "text-red-400" : "text-blue-400"}`}>
        총 수익: {totalRate} ({totalProfit})
      </p>
      <p className="text-sm text-gray-400">
        펀드 계좌: {fundBankAccount} <br />
        평가금: {totalValue} | 원금: {principal}
      </p>
    </div>
  );
};

export default FundTableTr;
