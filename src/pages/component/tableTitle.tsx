import React from "react";
import TableTr, { TableDetail } from "./table";

interface TableInfo {
  subTitle: string;
  tableDetails: Array<TableDetail>;
}

const TableTitle: React.FC<TableInfo> = ({ subTitle, tableDetails = [] }) => {
  return (
    <div className="mt-6 overflow-x-auto">
      <h2 className="text-lg font-semibold mb-2">{subTitle}</h2>
      <table className="w-full min-w-[800px] border-collapse border border-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th className="border border-gray-700 p-2">종목명</th>
            <th className="border border-gray-700 p-2">총 수익률</th>
            <th className="border border-gray-700 p-2">총 수익금</th>
            <th className="border border-gray-700 p-2">1주 평균금액</th>
            <th className="border border-gray-700 p-2">현재가</th>
            <th className="border border-gray-700 p-2">보유 수량</th>
            <th className="border border-gray-700 p-2">평가금</th>
            <th className="border border-gray-700 p-2">원금</th>
            <th className="border border-gray-700 p-2">일간 수익률</th>
            <th className="border border-gray-700 p-2">일간 수익금</th>
          </tr>
        </thead>
        <tbody>
          {tableDetails.map((tableDetail) => (
            <TableTr key={tableDetail.name} {...tableDetail} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableTitle;
