"use client";
import UploadPanel from "@/components/UploadPanel";
import { useState } from "react";
import { Card, CardBody, Spinner } from "@nextui-org/react";
import PieChart from "./components/PieChart";

export default function Food() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  // const imgUrl = `https://big-vision-paligemma.hf.space/file=/tmp/gradio/18bee4d7dd777847e11918533fe6e06576d21aad/image.png`;

  /** Handles file upload and analysis */
  // const handleAnalyzeImage = async (file: File) => {
  //   setLoading(true);
  //   setResult(null);
  //   try {
  //     const data = JSON.stringify({
  //       inputs: {
  //         text: "What kind of this food is it?",
  //         image: imgUrl,
  //       },
  //     });

  //     const response = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URL!, {
  //       headers: {
  //         Accept: "application/json",
  //         Authorization: `Bearer ${process.env.NEXT_PUBLIC_HUGGING_FACE_TOKEN}`,
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: data,
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const contentType = response.headers.get("content-type");
  //     if (!contentType || !contentType.includes("application/json")) {
  //       throw new Error("API did not return JSON");
  //     }

  //     const result = await response.json();
  //     setResult(result);
  //   } catch (error) {
  //     console.error("Error analyzing image:", error);
  //     setResult({ error: "Failed to analyze image. Please try again." });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

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
                  <PieChart />
                  日均能量和营养摄入分析：
                  <br />
                  <br />
                  • 能量： 约 1400 千卡
                  <br />
                  • 蛋白质： 约 200 克
                  <br />
                  • 脂肪： 约 150 克
                  <br />
                  • 碳水化合物： 约 200 克
                  <br />
                  <br />
                  建议（减脂减重目标）：
                  <br />
                  <br />
                  • 本周摄入总能量过高，建议控制在1200千卡以内
                  <br />
                  • 本周摄入碳水含量过高，建议均102g
                  <br />
                  • 本周蛋白质摄入略低，建议日均
                  210g。建议适当增加鱼、蛋、奶或豆类等优质蛋白的摄入。
                  <br />
                  •
                  本周蔬菜摄入充足，但水果种类略显单一，建议增加其他种类水果的摄入，以获得更丰富的维生素和矿物质。
                  <br />•
                  本周油脂摄入略高，建议减少红烧肉等高脂肪食物的摄入，或选择更健康的烹饪方式。
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
