"use client";
import { useState } from "react";
import Person from "./components/Person";
import UploadPanel from "@/components/UploadPanel";
import { Button, Card, CardBody } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

/** Scanner page component */
export default function ScannerPage() {
  const router = useRouter();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isProcessing] = useState(false);
  /** Loading state for the processing button */
  const [isLoading, setIsLoading] = useState(false);

  /** Handle the processing start with loading state */
  const handleProcessing = () => {
    setIsLoading(true);
    // Simulate processing delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/report");
    }, 2000);
  };

  return (
    <div className="flex h-screen w-screen p-8 gap-4">
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
      <div className="flex-1 px-4 h-full flex flex-col gap-4">
        <div className="h-full bg-content1">
          <UploadPanel onFileSelect={setSelectedFile} />
        </div>

        <AnimatePresence>
          {isProcessing && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 300, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-2 bg-content2 rounded-lg p-4"
            >
              <p className="text-lg font-bold">Report</p>
              <p className="text-sm text-default-500">
                Processing results will appear here...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full">
          <div className="w-full">
            <div className="flex gap-2">
              <div className="rounded-lg mb-4 overflow-hidden">
                <img height={52} width={52} src="/app_1.webp" alt="report" />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img height={52} width={52} src="/app_2.webp" alt="report" />
              </div>
              <div className="rounded-lg overflow-hidden bg-white">
                <img height={52} width={52} src="/app_3.webp" alt="report" />
              </div>
            </div>
            <p className="pb-2">这些 App 的数据将会导入到 Gemma Fit</p>
          </div>
          {!isProcessing ? (
            <Button
              color="primary"
              fullWidth
              isDisabled={!selectedFile}
              isLoading={isLoading}
              onClick={handleProcessing}
            >
              Start Processing
            </Button>
          ) : (
            <Button
              color="secondary"
              fullWidth
              onClick={() => router.push("/food")}
            >
              Continue
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
