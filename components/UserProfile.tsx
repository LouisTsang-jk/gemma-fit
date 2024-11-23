"use client";

import React from "react";
import {Card, CardHeader, CardBody, Button, Avatar, Tabs, Tab, Chip} from "@nextui-org/react";

export default function Component() {
  return (
    <div className="flex w-full items-start justify-center">
      <Card className=" w-[400px]">
        <CardBody>
            <p className="text-large font-medium">Demo Qin</p>
            <p className="max-w-[90%] text-small text-default-400">@demo.qin</p>
            <div className="flex gap-2 pb-1 pt-2">
              <Chip variant="flat">轻微偏重</Chip>
              <Chip variant="flat">中等苹果型</Chip>
              <Chip variant="flat">减脂增肌</Chip>
            </div>
            <p className="py-2 text-small text-foreground">
            您的 BMI 为24，体重处于轻微偏重。体型属于中等苹果型，体脂率略微偏高，建议适当减脂增肌。您的静息心率为 70 次/分钟，处于正常范围，说明您的心脏功能良好。体态方面，您有轻微的圆肩，建议加强背部肌肉锻炼，改善体态。
            </p>
        </CardBody>
      </Card>
    </div>
  );
}
