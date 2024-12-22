import { Table } from "@radix-ui/themes";
import clsx from "clsx";

type FirmsTableColumnCellProps = {
  children: React.ReactNode;
  delimiter?: boolean;
  isFirstColumnCell?: boolean;
  className?: string;
};

export default function FirmsTableColumnCell({
  isFirstColumnCell = false,
  delimiter = true,
  children,
  className,
}: FirmsTableColumnCellProps) {
  return (
    <Table.Cell
      className={clsx(
        className,
        "relative px-2 py-6",
        isFirstColumnCell && "pl-0"
      )}
    >
      {children}
      {delimiter ? (
        <span className="absolute inset-y-1/4 right-0 w-[1px] bg-background-tertiary" />
      ) : null}
    </Table.Cell>
  );
}
