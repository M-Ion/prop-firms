import Image from "next/image";
import logo from "./assets/firm.png";
import { HeartIcon } from "@radix-ui/react-icons";
import { CompanyData } from "@/app/types";

export default function Firm({
  companyName,
  numberOfLikes,
}: Pick<CompanyData, "companyName" | "numberOfLikes">) {
  return (
    <div className="flex justify-start items-center gap-2 normal-case">
      <Image src={logo} alt="logo" height={48} width={48} />
      <div className="flex justify-center items-start flex-col gap-1">
        <div className="flex justify-center items-center gap-1">
          <span className="text-white text-[14px] font-[family-name:var(--font-inter)] font-[600] leading-[21px]">
            {companyName}
          </span>
          <HeartIcon />
        </div>
        <div className="flex justify-start items-center gap-1">
          <HeartIcon style={{ color: "#E74694" }} />{" "}
          <span className="text-tertiary text-[12px] font-[family-name:var(--font-inter)] font-[400] leading-[18px]">
            {numberOfLikes}
          </span>
        </div>
      </div>
    </div>
  );
}
