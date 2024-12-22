"use client";

import { Button as RadixUIButton } from "@radix-ui/themes";
import clsx from "clsx";
import { JSX } from "react";

type ButtonProps = {
  icon?: JSX.Element;
  isActive?: boolean;
  label: string;
  onClick: () => void;
};

export default function Button({
  icon,
  label,
  isActive = false,
  onClick,
}: ButtonProps) {
  return (
    <RadixUIButton
      onClick={onClick}
      className={clsx(
        "text-[12px] leading-[18px] font-[600] font-[family-name:var(--font-poppins)] bg-background-tertiary py-[10px] px-3 rounded-full flex justify-center items-center gap-2 hover:bg-background hover:outline hover:outline-white",
        isActive && "bg-background outline outline-white"
      )}
    >
      {icon ? icon : null}
      {label}
    </RadixUIButton>
  );
}
