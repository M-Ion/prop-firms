import { Heading } from "@radix-ui/themes";

export default function Header() {
  return (
    <div className="mt-24">
      <Heading as="h1" className="heading-text">
        Prop Firms Insights and Analytics
      </Heading>
      <Heading as="h2" className="subHeading-text">
        Across +500 Challenges and of 40+ of the largest firms.
      </Heading>
    </div>
  );
}
