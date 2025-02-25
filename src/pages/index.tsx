import TableTitle from "./component/tableTitle";
import "./globals.css";

interface TossPortfolioDTO {
  totalInvestment: string;
  originalInvestment: string;
  totalRevenue: string;
  dailyRevenue: string;
  overSeasTotal: string;
  overSeasRevenue: string;
  overSeasList: OverseasStock[];
  domesticTotal: string;
  domesticRevenue: string;
  domesticsList: DomesticStock[];
}

interface OverseasStock {
  totalReturnRate: string;
  quantityOwned: string;
  dailyReturnRate: string;
  stockName: string;
  totalProfit: string;
  averagePricePerShare: string;
  dailyProfit: string;
  currentPrice: string;
  evaluationAmount: string;
  principalAmount: string;
}

interface DomesticStock {
  totalReturnRate: string;
  quantityOwned: string;
  dailyReturnRate: string;
  stockName: string;
  totalProfit: string;
  averagePricePerShare: string;
  dailyProfit: string;
  currentPrice: string;
  evaluationAmount: string;
  principalAmount: string;
}

interface KBPortfolioDTO {
  bankAccount: string;
  portfolioTitle: string;
  totalInvestment: string;
  totalRevenue: string;
  isPositive: boolean;
  fundDetails: FundDetails[];
}

interface FundDetails {
  fundBankAccount: string;
  fundName: string;
  isFundPositive: boolean;
  fundRevenue: string;
  fundAmount: string;
}

interface PortfolioData {
  tossPortfolioDTO: TossPortfolioDTO;
  kbPortfolioDTO: KBPortfolioDTO;
}

export async function getStaticProps() {
  // 데이터 호출 (예: API 호출)
  const res = await fetch("http://localhost:8080/report");
  const data = await res.json();

  return {
    props: {
      ...data,
    },
    revalidate: 60, // 60초마다 페이지를 재생성
  };
}

const Home: React.FC<PortfolioData> = ({ tossPortfolioDTO }) => {
  const { domesticsList, overSeasList } = tossPortfolioDTO;

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">내 투자</h1>
      <p className="text-xl mt-2">1,650,048원</p>
      <p className="text-red-500">총 수익 +33,559원 (2.0%)</p>
      <p className="text-gray-400">일간 수익 -5,698원 (0.3%)</p>
      <TableTitle
        subTitle="국내주식"
        tableDetails={domesticsList.map((domestics) => ({
          name: domestics.stockName,
          totalRate: domestics.totalReturnRate,
          totalProfit: domestics.totalProfit,
          avgPrice: domestics.averagePricePerShare,
          currentPrice: domestics.currentPrice,
          shares: domestics.quantityOwned,
          totalValue: domestics.evaluationAmount,
          principal: domestics.principalAmount,
          dailyRate: domestics.dailyReturnRate,
          dailyProfit: domestics.dailyProfit,
        }))}
      />
      <TableTitle
        subTitle="해외주식"
        tableDetails={overSeasList.map((domestics) => ({
          name: domestics.stockName,
          totalRate: domestics.totalReturnRate,
          totalProfit: domestics.totalProfit,
          avgPrice: domestics.averagePricePerShare,
          currentPrice: domestics.currentPrice,
          shares: domestics.quantityOwned,
          totalValue: domestics.evaluationAmount,
          principal: domestics.principalAmount,
          dailyRate: domestics.dailyReturnRate,
          dailyProfit: domestics.dailyProfit,
        }))}
      />
    </div>
  );
};

export default Home;
