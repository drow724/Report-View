import ShareTableTitle from "./component/share/shareTableTitle";
import FundTableTitle from "./component/fund/fundTableTitle";
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
  const res = await fetch("http://129.154.198.38:8080/report");
  const data = await res.json();

  return {
    props: {
      ...data,
    },
    revalidate: 1800, // 30분마다 페이지를 재생성
  };
}

const Home: React.FC<PortfolioData> = ({
  tossPortfolioDTO,
  kbPortfolioDTO,
}) => {
  const { domesticsList, overSeasList } = tossPortfolioDTO;

  const { fundDetails } = kbPortfolioDTO;

  return (
    <div className="bg-gray-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 p-6 bg-gray-800 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold">내 투자</h1>
          <p className="text-3xl font-semibold mt-2">
            {tossPortfolioDTO.totalInvestment}
          </p>
          <p
            className={`${
              tossPortfolioDTO.totalRevenue.includes("+")
                ? "text-red-400"
                : "text-blue-400"
            } mt-1`}
          >
            총 수익: {tossPortfolioDTO.totalRevenue}
          </p>
          <p
            className={`${
              tossPortfolioDTO.totalRevenue.includes("+")
                ? "text-red-400"
                : "text-blue-400"
            }`}
          >
            일간 수익: {tossPortfolioDTO.dailyRevenue}
          </p>
        </div>
        <div className="space-y-4">
          <ShareTableTitle
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
          <ShareTableTitle
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
          <FundTableTitle
            totalInvestment={kbPortfolioDTO.totalInvestment}
            isPositive={kbPortfolioDTO.isPositive}
            totalRevenue={kbPortfolioDTO.totalRevenue}
            subTitle="국내펀드"
            tableDetails={fundDetails.map((fund) => ({
              name: fund.fundName,
              totalRate: fund.fundRevenue,
              totalProfit: fund.fundAmount,
              fundBankAccount: fund.fundBankAccount,
              isFundPositive: fund.isFundPositive,
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
