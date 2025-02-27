import { ReactElement } from "react";

export interface TossPortfolioDTO {
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

export interface OverseasStock {
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

export interface DomesticStock {
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

export interface KBPortfolioDTO {
  bankAccount: string;
  portfolioTitle: string;
  totalInvestment: string;
  originalInvestment: string;
  totalRevenue: string;
  fundDetails: FundDetails[];
}

export interface FundDetails {
  fundBankAccount: string;
  fundName: string;
  totalProfit: string;
  totalReturnRate: string;
  fundAmount: string;
  evaluationAmount: string;
  principalAmount: string;
}

export interface ReportData {
  openAiMarkUpMessage: string;
}

export interface PortfolioData {
  totalInvestment: string;
  originalInvestment: string;
  totalRevenue: string;
  openAiMarkUpMessage: string;
  tossPortfolioDTO: TossPortfolioDTO;
  kbPortfolioDTO: KBPortfolioDTO;
}

export interface BackDropBlurProp {
  handleStart: (
    component: ReactElement
  ) => (event: React.MouseEvent | React.TouchEvent) => void;
  handleEnd: () => void;
}
