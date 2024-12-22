import { Table } from "@radix-ui/themes";
import sort from "../assets/sort.png";
import Image from "next/image";
import clsx from "clsx";

type FirmsTableColumnHeaderCellProps = {
  label: string;
  delimiter?: boolean;
  isFirstColumnCell?: boolean;
  isLastColumnCell?: boolean;
  canSort?: boolean;
  className?: string;
};

export default function FirmsTableColumnHeaderCell({
  isFirstColumnCell = false,
  isLastColumnCell = false,
  delimiter = true,
  label,
  canSort = true,
  className,
}: FirmsTableColumnHeaderCellProps) {
  return (
    <Table.ColumnHeaderCell
      className={clsx(
        className,
        "relative p-4",
        isFirstColumnCell && "pl-0",
        isLastColumnCell && "pr-0"
      )}
    >
      <div
        className={clsx(
          "flex items-center gap-2",
          isFirstColumnCell
            ? "justify-start"
            : isLastColumnCell
            ? "justify-end"
            : "justify-center"
        )}
      >
        {label}
        {canSort ? (
          <Image src={sort} height={12} width={6} alt="Sort arrows" />
        ) : null}
      </div>

      {delimiter ? (
        <span className="absolute inset-y-1/4 right-0 w-[1px] bg-background-tertiary" />
      ) : null}
    </Table.ColumnHeaderCell>
  );
}
