import React from "react";
import ShareTableTr, { ShareTableDetail } from "./shareTable";

interface ShareTableInfo {
  subTitle: string;
  tableDetails: Array<ShareTableDetail>;
}

const ShareTableTitle: React.FC<ShareTableInfo> = ({
  subTitle,
  tableDetails = [],
}) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow overflow-x-auto">
      <h2 className="text-lg font-bold mb-2">{subTitle}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tableDetails.map((tableDetail) => (
          <ShareTableTr key={tableDetail.name} {...tableDetail} />
        ))}
      </div>
    </div>
  );
};

export default ShareTableTitle;
