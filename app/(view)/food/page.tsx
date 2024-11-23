"use client";
import UploadPanel from "@/components/UploadPanel";
import { useState } from "react";
import { Card, CardBody } from "@nextui-org/react";

export default function Food() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <div className="flex h-screen">
      {/* Upload Panel: 固定宽度 400px */}
      <div className="w-[400px] h-full p-4 bg-content1">
        <UploadPanel onFileSelect={setSelectedFile} />
      </div>

      {/* Analysis Result: flex-1 占据剩余空间 */}
      <div className="flex-1 p-4">
        <Card className="h-full">
          <CardBody>
            {selectedFile ? (
              <p>Selected file: {selectedFile.name}</p>
            ) : (
              <p className="text-default-500">
                Please upload a file to see the report
              </p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
