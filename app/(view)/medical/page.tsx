import { Card } from "@nextui-org/react";

export default function Medical() {
  return (
    <div className="h-full w-full flex justify-center items-center p-8">
      <div className="h-[400px] w-full grid grid-cols-2 gap-10">
        {/* Left side - 50% width */}
        <div className="w-full">
          <Card className="h-full flex items-center justify-center">
            Ask a Doctor
          </Card>
        </div>
        {/* Right side - 50% width */}
        <div className="grid grid-rows-2 gap-10">
          <Card className="flex items-center justify-center">
            Check Diseases
          </Card>
          <Card className="flex items-center justify-center">
            Check Medicines
          </Card>
        </div>
      </div>
    </div>
  );
}
