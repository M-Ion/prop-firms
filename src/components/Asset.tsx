type AssetProps = {
  label: string;
};

export default function Asset({ label }: AssetProps) {
  return (
    <span className="uppercase px-2 py-1 inline-block text-primary text-[12px] text-center font-[family-name:var(--font-inter)] font-[500] leading-[18px] bg-background-tertiary rounded-full">
      {label}
    </span>
  );
}
