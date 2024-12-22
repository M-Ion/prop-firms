import { Table } from "@radix-ui/themes";
import clsx from "clsx";

type FirmsTableRowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function FirmsTableRow({
  children,
  className,
}: FirmsTableRowProps) {
  return (
    <Table.Row
      className={clsx(
        "border-b border-background-tertiary text-primary text-[10px] font-[family-name:var(--font-inter)] font-[600] leading-[12px] uppercase",
        className
      )}
    >
      {children}
    </Table.Row>
  );
}
