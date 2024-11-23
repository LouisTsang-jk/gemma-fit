"use client";
import UploadPanel from "@/components/UploadPanel";
import { useState } from "react";
import { Card, CardBody, Spinner } from "@nextui-org/react";

export default function Food() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const imgUrl = `https://big-vision-paligemma.hf.space/file=/tmp/gradio/18bee4d7dd777847e11918533fe6e06576d21aad/image.png`;

  /** Handles file upload and analysis */
  const handleAnalyzeImage = async (file: File) => {
    setLoading(true);
    setResult(null);
    try {
      const data = JSON.stringify({
        inputs: {
          text: "What kind of this food is it?",
          image: imgUrl,
        },
      });

      const response = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URL!, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("API did not return JSON");
      }

      const result = await response.json();
      setResult(result);
    } catch (error) {
      console.error("Error analyzing image:", error);
      setResult({ error: "Failed to analyze image. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  /** Handles file selection */
  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
    // if (file) {
    // handleAnalyzeImage(file);
    // }
  };

  return (
    <div className="flex h-full">
      {/* Upload Panel */}
      <div className="w-[400px] h-full p-4 bg-content1">
        <UploadPanel onFileSelect={handleFileSelect} />
      </div>

      {/* Analysis Result */}
      <div className="flex-1 p-4">
        <Card className="h-full">
          <CardBody>
            {loading ? (
              <div className="flex items-center justify-center">
                <Spinner label="Analyzing..." />
              </div>
            ) : selectedFile ? (
              <div>
                <p className="text-default-500">
                  Regular Cheese Pizza (30cm diameter, 8 slices):
                  <br />
                  Each slice contains approximately 200-300 calories.
                  <br />
                  <br />
                  Main calorie sources: Pizza crust, cheese.
                  <br />
                  Additional toppings (like Italian sausage, bacon) can add
                  50-100 calories per slice.
                  <br />
                  <br />
                  Common toppings calorie contribution (per slice):
                  <br />
                  • Italian sausage: ~50 calories
                  <br />
                  • Mushrooms: ~10 calories
                  <br />
                  • Green peppers: ~5 calories
                  <br />• Olives: ~20 calories
                </p>
              </div>
            ) : (
              <p className="text-default-500 p-4">
                Upload a food image to get detailed nutritional information and
                calorie estimates. The analysis will include portion sizes, main
                ingredients, and calorie breakdown.
              </p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
