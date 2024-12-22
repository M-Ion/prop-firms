"use client";

import { useRouter, useSearchParams } from "next/navigation";
import BadgeCheckIcon from "@/icons/BadgeCheck";
import Button from "@/components/Button";
import FlameIcon from "@/icons/FlameIcon";
import HeartIcon from "@/icons/Heartcon";
import Search from "@/components/Search";
import { useState } from "react";

const filters = [
  {
    label: "Popular",
    icon: (isActive: boolean) => <FlameIcon isActive={isActive} />,
  },
  {
    label: "Favourite",
    icon: (isActive: boolean) => <HeartIcon isActive={isActive} />,
  },
  {
    label: "New",
    icon: (isActive: boolean) => <BadgeCheckIcon isActive={isActive} />,
  },
  {
    label: "All",
  },
];

export default function Filters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState(searchParams.get("filter") || "");

  const addFilter = (filter: string) => {
    setFilter(filter);
    const params = new URLSearchParams(searchParams.toString());

    if (filter === "all") {
      params.delete("filter");
    } else {
      params.set("filter", filter);
    }

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="justify-self-start flex justify-center items-center mt-16 gap-2 w-full">
      {filters.map((el) => (
        <Button
          key={el.label}
          label={el.label}
          icon={
            el.icon
              ? el.icon(el.label.toLocaleLowerCase() === filter)
              : undefined
          }
          isActive={el.label.toLocaleLowerCase() === filter}
          onClick={() => addFilter(el.label.toLocaleLowerCase())}
        />
      ))}

      <Search className="max-w-[240px] ml-auto" />
    </div>
  );
}
