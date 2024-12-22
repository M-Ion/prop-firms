import InfoIcon from "@/icons/InfoIcon";
import clsx from "clsx";

type AlertProps = {
  text: string;
  className?: string;
};

export default function Alert({ className, text }: AlertProps) {
  return (
    <div
      className={clsx(
        "flex justify-start items-center gap-2 bg-gradient-custom-transparent rounded-md p-3",
        className
      )}
    >
      <InfoIcon />
      <p className="text-primary font-[family-name:var(--font-inter)] font-[400] text-[14px] leading-[21px]">
        {text}
      </p>
    </div>
  );
}
