import { Input } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-[320px]">
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
        <Input type="email" label="Email" />
        <Input type="email" label="Email" placeholder="Enter your email" />
      </div>
    </div>
  );
}
