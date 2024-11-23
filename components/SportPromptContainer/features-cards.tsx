import React from "react";
import {Icon} from "@iconify/react";

import FeatureCard from "./feature-card";
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ActivityDate from "../ActivityDate";

const featuresCategories = [
  {
    key: "examples",
    title: "示例",
    icon: <Icon icon="solar:mask-happly-linear" width={40} />,
    descriptions: [
      "有哪些提高睡眠质量的建议？",
      "如何创建一个睡前例行程序？",
      "压力如何影响睡眠？",
      "有哪些治疗失眠的天然方法？"
    ],
  },
  {
key: "capabilities",
title: "睡眠 App 功能",
icon: <Icon icon="solar:magic-stick-3-linear" width={40} />,
descriptions: [
"提供个性化的睡眠建议，设定最佳入睡时间。",
"记录和分析用户的打鼾、梦话等行为，提供改善建议。",
"配备放松音乐和冥想指导，帮助用户更容易入睡。",
"生成详细的睡眠报告，帮助用户了解自己的睡眠质量和趋势。"
],
}
];

export default function Component() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    <Card  className="bg-content2" shadow="none" >
        <CardHeader className="flex flex-col gap-2 px-4 pb-4 pt-6">
        <Icon icon="icon-park-outline:sport" width={40} />
          <p className="text-medium text-content2-foreground">运动日历</p>
        </CardHeader>
        <CardBody className="flex flex-col items-center gap-2 pt-0">
        <ActivityDate/>
        </CardBody>
      </Card>
      {featuresCategories.map((category) => (
        <FeatureCard
          key={category.key}
          descriptions={category.descriptions}
          icon={category.icon}
          title={category.title}
        />
      ))}
    </div>
  );
}
