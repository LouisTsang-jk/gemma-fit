"use client";

import type { CardProps } from "@nextui-org/react";

import React from "react";
import { Card, CardBody, Listbox, ListboxItem } from "@nextui-org/react";
import { Icon } from "@iconify/react";

/** Defines the structure for checklist items */
type ChecklistItem = {
  key: string;
  icon: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

const items: ChecklistItem[] = [
  {
    key: "apple-body-type",
    icon: "solar:heart-linear",
    title: "身材特点",
    description: "通常具有以下三个显著特点：宽肩、圆腹和大胸。",
    isCompleted: false,
  },
  {
    key: "fat-distribution",
    icon: "solar:heart-linear",
    title: "脂肪分布",
    description: "主要集中在腹部，导致上半身显得较为丰满，而四肢通常较为纤细。",
    isCompleted: false,
  },
  {
    key: "health-risks",
    icon: "solar:heart-linear",
    title: "健康风险",
    description:
      "这种身材类型易患高血压、糖尿病等健康问题，因其中心型肥胖特征对内脏健康的影响较大。",
    isCompleted: false,
  },
];

export default function Component(props: CardProps) {
  return (
    <Card className="w-full max-w-[520px]" {...props}>
      <CardBody className="flex p-4 flex-wrap sm:flex-nowrap">
        <h3 className="text-large font-medium">苹果型</h3>
        <Listbox
          hideSelectedIcon
          aria-label="Onboarding checklist"
          items={items}
          variant="flat"
          onAction={(selectedKey) => alert(selectedKey)}
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              classNames={{
                base: "w-full  min-h-[70px] gap-3",
                title: "text-medium font-medium",
                description: "text-small",
              }}
              description={item.description}
              endContent={
                <div className="flex flex-none">
                  {item.isCompleted ? (
                    <Icon
                      className="text-secondary"
                      icon="solar:check-circle-bold"
                      width={30}
                    />
                  ) : (
                    <Icon
                      className="text-default-400"
                      icon="solar:round-alt-arrow-right-bold"
                      width={30}
                    />
                  )}
                </div>
              }
              startContent={
                <div className="item-center flex rounded-medium border border-divider p-2">
                  <Icon
                    className="text-secondary"
                    icon={item.icon}
                    width={24}
                  />
                </div>
              }
              title={item.title}
            />
          )}
        </Listbox>
      </CardBody>
    </Card>
  );
}
