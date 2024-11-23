"use client";
import UploadPanel from "@/components/UploadPanel";
import { Fragment, useState } from "react";
import { Card, CardBody, Spinner } from "@nextui-org/react";
import PieChart from "./components/PieChart";
import { foodAnalysisData } from "./data";
import { FoodAnalysis } from "./types";

export default function Food() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [selectedFood, setSelectedFood] = useState<FoodAnalysis | null>(null);

  /** Handles file selection and simulates analysis loading */
  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
    if (file) {
      setLoading(true);
      // Simulate API delay
      setTimeout(() => {
        setSelectedFood(foodAnalysisData.dumplings);
        setLoading(false);
      }, 2000); // 2 second delay
    } else {
      setSelectedFood(null);
    }
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
            ) : selectedFile && selectedFood ? (
              <div>
                <p className="text-default-500 px-4">
                  <PieChart />
                  {selectedFood.name}成分分析：
                  <br />
                  <br />• 总重量： 约 {selectedFood.totalWeight} 克
                  <br />
                  {selectedFood.ingredients.map((ingredient) => (
                    <Fragment key={ingredient.name}>
                      • {ingredient.name}： {ingredient.weight} 克 (
                      {ingredient.percentage}%)
                      <br />
                    </Fragment>
                  ))}
                  <br />
                  营养建议：
                  <br />
                  <br />
                  {selectedFood.nutritionTips.map((tip, index) => (
                    <Fragment key={index}>
                      • {tip}
                      <br />
                    </Fragment>
                  ))}
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
