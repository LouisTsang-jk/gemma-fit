"use client";
import { Button } from "@nextui-org/react";
import { Upload, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import Person from "./components/Person";

/** Scanner page component */
export default function ScannerPage() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /** Handle file selection */
  const handleFileSelect = (files: FileList | null) => {
    if (!files?.length) return;

    const file = files[0];
    // Only accept image files
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    setSelectedFile(file);
  };

  /** Handle click upload */
  const handleClickUpload = () => {
    fileInputRef.current?.click();
  };

  /** Handle drag events */
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragging(true);
    } else if (e.type === "dragleave") {
      setIsDragging(false);
    }
  };

  /** Handle drop event */
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files);
  };

  return (
    <div className="flex h-screen w-screen">
      {/* Left Panel */}
      <div className="w-[400px] h-full p-4 bg-content1">
        <div className="flex flex-col p-4 items-center gap-2 mb-4">
          <Person />
          <p className="text-sm text-default-500">
            Please upload a full-body photo for analysis. We ensure complete
            privacy and security of your data. Your photo will be processed
            locally and not stored on any servers.
          </p>
        </div>
        {/* Add panel content here */}
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6 flex flex-col gap-6">
        <input
          type="file"
          ref={fileInputRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFileSelect(e.target.files)}
        />

        {/* Upload Area */}
        <div
          className={`
            flex-1 border-2 border-dashed rounded-lg
            flex flex-col items-center justify-center gap-4
            transition-colors cursor-pointer
            ${isDragging ? "border-primary bg-primary/10" : "border-divider"}
          `}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={handleClickUpload}
        >
          <Upload className="w-12 h-12 text-default-400" />
          <p className="text-default-600">
            {selectedFile
              ? `Selected: ${selectedFile.name}`
              : "Drag files here or click to upload"}
          </p>
        </div>

        {/* Action Button */}
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
