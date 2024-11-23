"use client";
import { Card, CardBody } from "@nextui-org/react";
import { Upload } from "lucide-react";
import { useState, useRef, useEffect } from "react";

/** Props for UploadPanel component */
interface UploadPanelProps {
  /** Callback function when file is selected */
  onFileSelect?: (file: File) => void;
}

/** Component for handling file uploads with drag and drop functionality */
export default function UploadPanel({ onFileSelect }: UploadPanelProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  /** Clean up preview URL when component unmounts or file changes */
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  /** Handle file selection */
  const handleFileSelect = (files: FileList | null) => {
    if (!files?.length) return;

    const file = files[0];
    if (!file.type.startsWith("image/")) {
      alert("Please upload an image file");
      return;
    }

    // Clean up previous preview URL
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    // Create new preview URL
    const newPreviewUrl = URL.createObjectURL(file);
    setPreviewUrl(newPreviewUrl);
    setSelectedFile(file);
    onFileSelect?.(file);
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
    <div className="h-full flex flex-col gap-6">
      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept="image/*"
        onChange={(e) => handleFileSelect(e.target.files)}
      />

      <Card className="flex-1">
        <CardBody className="h-full p-0 overflow-hidden">
          <div
            className={`
          w-full h-full
          flex flex-col items-center justify-center gap-4
          transition-colors cursor-pointer relative
          ${isDragging ? "border-primary bg-primary/10" : "border-divider"}
        `}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
            onClick={handleClickUpload}
          >
            {previewUrl ? (
              <div className="w-full h-full flex items-center justify-center p-4 max-h-[400px]">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ) : (
              <>
                <Upload className="w-12 h-12 text-default-400" />
                <p className="text-default-600">
                  Drag files here or click to upload
                </p>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
