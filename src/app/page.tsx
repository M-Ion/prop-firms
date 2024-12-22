import Alert from "@/components/Alert";
import FirmsTable from "./components/FirmsTable/FirmsTable";
import { Suspense } from "react";
import Filters from "./components/Filters";

export default async function PropFirms({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  return (
    <Suspense fallback={<p className="large-text">Loading...</p>}>
      <div className="flex justify-center items-center">
        <main className="w-screen px-24">
          <Filters />
          <Alert
            className="mt-6"
            text="Here is an explanation text about how the Popular pick is calculated."
          />
          <FirmsTable searchParams={searchParams} />
        </main>
      </div>
    </Suspense>
  );
}
