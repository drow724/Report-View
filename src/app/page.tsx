import "./globals.css";
import SharePage from "./page/share/ShareComponentClient";
import ReportPage from "./page/report/ReportComponentClient";
import FundPage from "./page/fund/FundComponentClient";

export default async function ArticlePage() {
  const res = await fetch("http://129.154.198.38:8080/report");
  const data = await res.json();
  const { tossPortfolioDTO, openAiMarkUpMessage, kbPortfolioDTO } = data;

  return (
    <>
      <ReportPage openAiMarkUpMessage={openAiMarkUpMessage} />
      <SharePage {...tossPortfolioDTO} />
      <FundPage {...kbPortfolioDTO} />
    </>
  );
}
