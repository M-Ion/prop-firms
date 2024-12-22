import { Table } from "@radix-ui/themes";
import DataRow from "./components/DataRow";
import FirmsTableRow from "./components/FirmsTableRow";
import { fetchData } from "@/app/lib/fetchData";
import FirmsTableColumnHeaderCell from "./components/FirmsTableColumnHeaderCell";
import { Filter } from "@/app/types";

export default async function FirmsTable({
  searchParams,
}: {
  searchParams: Promise<{ search?: string; filter?: string }>;
}) {
  const params = await searchParams;
  const data = await fetchData({
    search: params.search,
    filter: params.filter as Filter,
  });

  return (
    <Table.Root variant="surface" className="mt-4 mb-24 tableRoot">
      <Table.Header>
        <FirmsTableRow>
          <FirmsTableColumnHeaderCell label={"Firm"} isFirstColumnCell />
          <FirmsTableColumnHeaderCell label={"Rank"} />
          <FirmsTableColumnHeaderCell label={"Country"} />
          <FirmsTableColumnHeaderCell
            className="max-w-20"
            label={"Years in Operation"}
          />
          <FirmsTableColumnHeaderCell
            className="max-w-24"
            label={"Trustpilot"}
          />
          <FirmsTableColumnHeaderCell label={"Assets"} />
          <FirmsTableColumnHeaderCell label={"Platforms"} />
          <FirmsTableColumnHeaderCell label={"Max Allocation"} />
          <FirmsTableColumnHeaderCell label={"Promo"} />
          <FirmsTableColumnHeaderCell
            canSort={false}
            delimiter={false}
            isLastColumnCell={true}
            label={"Actions"}
          />
        </FirmsTableRow>
      </Table.Header>

      <Table.Body>
        {data.map((company) => (
          <FirmsTableRow key={company.companyName} className="large-text">
            <DataRow {...company} />
          </FirmsTableRow>
        ))}
      </Table.Body>
    </Table.Root>
  );
}
