"use client";
import { useState } from "react";
import Person from "./components/Person";
import UploadPanel from "@/components/UploadPanel";
import { Button, Card, CardBody } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";

/** Scanner page component */
export default function ScannerPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="flex h-screen w-screen">
      {/* Left Panel */}
      <Card className="h-full">
        <CardBody>
          <div className="w-[400px] h-full p-4 bg-content1 flex flex-col justify-center">
            <div className="flex flex-col justify-between p-4 items-center gap-2 mb-4">
              <div>
                <Person height={480} width={200} />
              </div>
              <p className="text-sm text-default-500">
                Please upload a full-body photo for analysis. We ensure complete
                privacy and security of your data. Your photo will be processed
                locally and not stored on any servers.
              </p>
            </div>
          </div>
        </CardBody>
      </Card>

      {/* Right Content */}
      <div className="flex-1 p-6 h-full">
        <UploadPanel onFileSelect={setSelectedFile} />
        {/* Report */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-bold">Report</p>
          <p className="text-sm text-default-500"></p>
        </div>
        <Button
          color="primary"
          endContent={<ArrowRight className="w-4 h-4" />}
          className="w-full"
          isDisabled={!selectedFile}
        >
          Start Processing
        </Button>
      </div>
    </div>
  );
}
