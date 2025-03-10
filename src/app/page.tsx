import "./globals.css";
import SharePage from "./page/share/ShareComponentClient";
import ReportPage from "./page/report/ReportComponentClient";
import FundPage from "./page/fund/FundComponentClient";
import { Analytics } from "@vercel/analytics/react";
//import BackDropBlurPage from "./page/scale/BackDropBlurComponentClient";

export default async function ArticlePage() {
  const res = await fetch(`${process.env.API_URL}/report`, {
    next: { revalidate: 600 },
  });
  const data = await res.json();
  const { tossPortfolioDTO, openAiMarkUpMessage, kbPortfolioDTO } = data;

  return (
    //<BackDropBlurPage>
    <>
      <Analytics />
      <ReportPage openAiMarkUpMessage={openAiMarkUpMessage} />
      <SharePage {...tossPortfolioDTO} />
      <FundPage {...kbPortfolioDTO} />
    </>
    //</BackDropBlurPage>
  );
}
