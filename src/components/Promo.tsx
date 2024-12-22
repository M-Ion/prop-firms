import CopyIcon from "@/icons/CopyIcon";

export default function Promo() {
  return (
    <div className="rounded-lg bg-gradient-custom w-[71px] p-[2px] mx-auto">
      <span className="block text-white text-[12px] text-center font-[family-name:var(--font-inter)] font-[600] leading-[18px] pt-1">
        12% OFF
      </span>
      <div className="gap-1 flex justify-center items-center rounded-lg bg-background-tertiary p-2 text-white text-[10px] text-center font-[family-name:var(--font-inter)] font-[600] leading-[15px]">
        <span>MATCH</span>
        <CopyIcon />
      </div>
    </div>
  );
}
