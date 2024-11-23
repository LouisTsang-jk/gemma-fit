import { FoodAnalysis } from './types';

/** Food analysis data */
export const foodAnalysisData: Record<string, FoodAnalysis> = {
  pizza: {
    name: "披萨",
    totalWeight: 620,
    ingredients: [
      { name: "面团", weight: 200, percentage: 32.3 },
      { name: "芝士", weight: 150, percentage: 24.2 },
      { name: "番茄酱", weight: 100, percentage: 16.1 },
      { name: "香肠", weight: 80, percentage: 12.9 },
      { name: "蘑菇", weight: 50, percentage: 8.1 },
      { name: "青椒", weight: 40, percentage: 6.4 },
    ],
    nutritionTips: [
      "这是一份标准尺寸的披萨，总热量约为 1500-1800 千卡",
      "芝士和香肠的含量较高，属于高脂肪、高蛋白质食材",
      "建议搭配沙拉等低热量食物，平衡营养摄入",
      "如果在减重期间，建议与他人分享食用或选择蔬菜含量更多的配料",
      "青椒和蘑菇等蔬菜配料提供了额外的膳食纤维和维生素"
    ]
  },
  dumplings: {
    name: "饺子",
    totalWeight: 250,
    ingredients: [
      { name: "面皮", weight: 100, percentage: 40 },
      { name: "猪肉", weight: 80, percentage: 32 },
      { name: "白菜", weight: 40, percentage: 16 },
      { name: "葱姜", weight: 20, percentage: 8 },
      { name: "调味料", weight: 10, percentage: 4 },
    ],
    nutritionTips: [
      "每份饺子（约8个）总热量约为 400-450 千卡",
      "饺子皮提供碳水化合物，馅料提供优质蛋白质",
      "蔬菜馅料增加了膳食纤维的摄入",
      "建议搭配醋食用，可以帮助消化",
      "控制食量，建议每餐不超过10个饺子"
    ]
  }
};