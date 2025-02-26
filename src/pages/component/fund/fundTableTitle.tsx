import React from "react";
import FundTableTr, { FundTableDetail } from "./fundTable";

interface FundTableInfo {
  subTitle: string;
  totalInvestment: string;
  isPositive: boolean;
  totalRevenue: string;
  tableDetails: Array<FundTableDetail>;
}

const FundTableTitle: React.FC<FundTableInfo> = ({
  subTitle,
  totalInvestment,
  isPositive,
  totalRevenue,
  tableDetails = [],
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
      <h2 className="text-lg font-bold mb-2">
        {subTitle} {totalInvestment}원{" "}
        <span
          className={`${isPositive ? "text-red-400" : "text-blue-400"} mt-1`}
        >
          총 수익: {totalRevenue}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tableDetails.map((tableDetail) => (
          <FundTableTr key={tableDetail.name} {...tableDetail} />
        ))}
      </div>
    </div>
  );
};

export default FundTableTitle;
