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
                <p className="text-default-500 px-4">
                  <PieChart />
                  披萨成分分析：
                  <br />
                  <br />
                  • 总重量： 约 620 克
                  <br />
                  • 面团： 200 克 (32.3%)
                  <br />
                  • 芝士： 150 克 (24.2%)
                  <br />
                  • 番茄酱： 100 克 (16.1%)
                  <br />
                  • 香肠： 80 克 (12.9%)
                  <br />
                  • 蘑菇： 50 克 (8.1%)
                  <br />
                  • 青椒： 40 克 (6.4%)
                  <br />
                  <br />
                  营养建议：
                  <br />
                  <br />
                  • 这是一份标准尺寸的披萨，总热量约为 1500-1800 千卡
                  <br />
                  • 芝士和香肠的含量较高，属于高脂肪、高蛋白质食材
                  <br />
                  • 建议搭配沙拉等低热量食物，平衡营养摄入
                  <br />
                  • 如果在减重期间，建议与他人分享食用或选择蔬菜含量更多的配料
                  <br />• 青椒和蘑菇等蔬菜配料提供了额外的膳食纤维和维生素
                </p>
              </div>
            ) : (
              <p className="text-default-500 p-4">
                上传食物图片以获取详细的营养信息和卡路里估算。分析将包含份量大小、主要配料和卡路里分布。
              </p>
            )}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
