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
     "如何制定一个有效的健身计划？",
    "哪些运动有助于减脂增肌？",
    "如何在家中进行全身锻炼？",
    "有哪些适合初学者的运动技巧？"
    ],
  },
  {
key: "capabilities",
title: "功能",
icon: <Icon icon="solar:magic-stick-3-linear" width={40} />,
descriptions: [
  "提供个性化的运动计划，帮助用户达到健身目标。",
  "记录和分析用户的运动数据，提供改进建议。",
  "配备专业的运动视频和指导，帮助用户正确锻炼。",
  "生成详细的运动报告，帮助用户了解自己的运动表现和进步。"
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
