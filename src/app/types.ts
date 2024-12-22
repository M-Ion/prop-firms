export interface CompanyData {
  assets: string[];
  companyName: string;
  countryIsoCode: string;
  maxAllocation: number;
  numberOfLikes: number;
  numberOfReviews: number;
  rank: number;
  trustpilotRating: number;
  year: number;
  yearsInOperation: number;
}

export enum Filter {
  Favourite = "favourite",
  New = "new",
  Popular = "popular",
}
