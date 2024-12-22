"use client";

import SearchIcon from "@/icons/SearchIcon";
import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type SearchProps = {
  className?: string;
};

export default function Search({ className }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(searchParams.get("search") || "");

  useEffect(() => {
    const handler = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (search) params.set("search", search);
      else params.delete("search");

      router.push(`?${params.toString()}`);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchParams, search, router]);

  return (
    <div
      className={clsx(
        "flex items-center bg-background-tertiary rounded-full px-[10px] p-2 w-full border border-[#2F2C2D] focus-within:border-white",
        className
      )}
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        className="ml-2 outline-none text-secondary w-full font-[family-name:var(--font-inter)] text-[14px] leading-[17.5px] font-[400] bg-background-tertiary"
      />
    </div>
  );
}
