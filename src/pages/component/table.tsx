import React from "react";

export interface TableDetail {
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

const TableTr: React.FC<TableDetail> = ({
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
    <tr className="text-center">
      <td className="border border-gray-700 p-2">{name}</td>
      <td className={`border border-gray-700 p-2`}>{totalRate}</td>
      <td className="border border-gray-700 p-2">{totalProfit}</td>
      <td className="border border-gray-700 p-2">{avgPrice}</td>
      <td className="border border-gray-700 p-2">{currentPrice}</td>
      <td className="border border-gray-700 p-2">{shares}</td>
      <td className="border border-gray-700 p-2">{totalValue}</td>
      <td className="border border-gray-700 p-2">{principal}</td>
      <td className={`border border-gray-700 p-2`}>{dailyRate}</td>
      <td className="border border-gray-700 p-2">{dailyProfit}</td>
    </tr>
  );
};

export default TableTr;
