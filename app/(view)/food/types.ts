/** Food analysis result type */
export interface FoodAnalysis {
  name: string;
  totalWeight: number;
  ingredients: {
    name: string;
    weight: number;
    percentage: number;
  }[];
  nutritionTips: string[];
} 