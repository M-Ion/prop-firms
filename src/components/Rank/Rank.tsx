import Image from "next/image";

import star from "./assets/star.png";
import { CompanyData } from "@/app/types";

export default function Rank({
  numberOfReviews,
  rank,
}: Pick<CompanyData, "numberOfReviews" | "rank">) {
  return (
    <div className="flex justify-start items-center gap-2 normal-case flex-col">
      <div className="p-[2px] bg-gradient-custom rounded-full">
        <div className="bg-background-tertiary rounded-full">
          <div className="px-2 py-1 w-full h-full bg-gradient-custom-transparent rounded-full">
            <span className="medium-text">{rank.toFixed(1)}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {Array.from({ length: Math.floor(rank) }, (_, index) => (
          <Image key={index} src={star} alt="Star" width={14} height={14} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-1 text-[12px] font-[family-name:var(--font-inter)] font-[400] leading-[18px] mt-[-5px]">
        <span className="text-tertiary">{numberOfReviews}</span>
        <span className="text-primary">reviews</span>
      </div>
    </div>
  );
}
