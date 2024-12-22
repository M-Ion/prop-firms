import { CompanyData, Filter } from "../types";

export const data: CompanyData[] = [
  {
    assets: ["Forex", "Futures", "Stocks", "Crypto", "Indices", "Commodities"],
    companyName: "Alpha Capital Group",
    countryIsoCode: "UK",
    maxAllocation: 700000,
    numberOfLikes: 1179,
    numberOfReviews: 407,
    rank: 3.9,
    trustpilotRating: 4,
    year: 2024,
    yearsInOperation: 3,
  },
  {
    assets: ["Forex", "Futures", "Stocks"],
    companyName: "TechNova Solutions",
    countryIsoCode: "UK",
    maxAllocation: 822000,
    numberOfLikes: 1079,
    numberOfReviews: 317,
    rank: 5.0,
    trustpilotRating: 4,
    year: 2024,
    yearsInOperation: 2,
  },
  {
    assets: ["Forex", "Futures", "Stocks", "Crypto", "Indices"],
    companyName: "GreenEdge Industries",
    countryIsoCode: "UK",
    maxAllocation: 800000,
    numberOfLikes: 1199,
    numberOfReviews: 517,
    rank: 4.8,
    trustpilotRating: 4,
    year: 2021,
    yearsInOperation: 1,
  },
  {
    assets: ["Forex"],
    companyName: "Skyline Ventures",
    countryIsoCode: "UK",
    maxAllocation: 722000,
    numberOfLikes: 1109,
    numberOfReviews: 1017,
    rank: 4.0,
    trustpilotRating: 4,
    year: 2022,
    yearsInOperation: 12,
  },
];

export async function fetchData({
  search,
  filter,
}: {
  search?: string;
  filter?: Filter;
}): Promise<CompanyData[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let companies = data;
      const currentYear = new Date().getFullYear();

      if (filter) {
        companies = companies.filter((company) => {
          switch (filter) {
            case Filter.Favourite:
              return company.numberOfLikes > 1100;
            case Filter.New:
              return company.year === currentYear;
            case Filter.Popular:
              return company.numberOfReviews > 500;
          }
        });
      }

      if (search) {
        companies = companies.filter(
          (company) =>
            company.companyName.toLocaleLowerCase().includes(search) ||
            company.assets.some((asset) =>
              asset.toLowerCase().includes(search.toLowerCase())
            )
        );
      }
      resolve(companies);
    }, 300);
  });
}
