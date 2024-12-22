import { Button } from "@radix-ui/themes";

export default function Action() {
  return (
    <div className="rounded-full p-[1px] bg-gradient-custom cursor-pointer hover:bg-gradient-custom-invert">
      <Button className="rounded-full p-2 bg-background-tertiary large-text w-full">
        Firm
      </Button>
    </div>
  );
}
