import { CompanyData } from "@/app/types";
import Action from "@/components/Action";
import Asset from "@/components/Asset";
import Avatar from "@/components/Avatar";
import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import CircularProgressbar from "@/components/CircularProgressbar";
import Firm from "@/components/Firm/Firm";
import FirmsTableColumnCell from "./FirmsTableCell";
import GBFlagIcon from "@/icons/GBFlagIcon";
import Progress from "@/components/Progress";
import Promo from "@/components/Promo";
import Rank from "@/components/Rank/Rank";
import StarFilledIcon from "@/icons/StarFilledIcon";

const formatter = new Intl.NumberFormat("en-US", {
  notation: "compact",
  compactDisplay: "short",
});

export default function DataRow({
  assets,
  companyName,
  countryIsoCode,
  maxAllocation,
  numberOfLikes,
  numberOfReviews,
  rank,
  trustpilotRating,
  yearsInOperation,
}: CompanyData) {
  return (
    <>
      <FirmsTableColumnCell isFirstColumnCell>
        <Firm companyName={companyName} numberOfLikes={numberOfLikes} />
      </FirmsTableColumnCell>
      <FirmsTableColumnCell>
        <Rank numberOfReviews={numberOfReviews} rank={rank} />
      </FirmsTableColumnCell>

      <FirmsTableColumnCell className="medium-text">
        <div className="flex items-center justify-center gap-2">
          <GBFlagIcon />
          {countryIsoCode}
        </div>
      </FirmsTableColumnCell>

      <FirmsTableColumnCell className="max-w-20">
        <CircularProgressbar progress={yearsInOperation} />
      </FirmsTableColumnCell>

      <FirmsTableColumnCell className="max-w-24">
        <div className="flex items-center justify-center gap-1">
          <StarFilledIcon />
          {trustpilotRating.toFixed(1)}
        </div>
      </FirmsTableColumnCell>

      <FirmsTableColumnCell>
        <div className="flex items-center justify-center flex-wrap gap-1 max-w-64 m-auto">
          {assets.map((asset) => (
            <Asset key={asset} label={asset} />
          ))}
        </div>
      </FirmsTableColumnCell>

      <FirmsTableColumnCell>
        <div className="flex justify-center items-center gap-1">
          <Avatar src={avatar1} alt="Avatar 1" />
          <Avatar src={avatar2} alt="Avatar 2" />
        </div>
      </FirmsTableColumnCell>

      <FirmsTableColumnCell>
        <div className="flex flex-col justify-center items-center px-2 gap-1">
          <span>${formatter.format(maxAllocation)}</span>
          <Progress
            progress={Math.min(
              100,
              Math.round((maxAllocation / 1000000) * 100)
            )}
          />
        </div>
      </FirmsTableColumnCell>

      <FirmsTableColumnCell>
        <Promo />
      </FirmsTableColumnCell>

      <FirmsTableColumnCell delimiter={false} className="pr-0">
        <Action />
      </FirmsTableColumnCell>
    </>
  );
}
