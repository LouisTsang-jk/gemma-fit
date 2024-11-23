"use client";

import React from "react";
import {Icon} from "@iconify/react";
import {Button, Progress} from "@nextui-org/react";
import {cn} from "@nextui-org/react";

export type SummaryRatingCardProps = React.HTMLAttributes<HTMLDivElement> & {
  ratings: {
    rating: number;
    count: number;
  }[];
  totalRatingCount: number;
  averageRating: number;
  onWriteReview?: () => void;
};

const SummaryRatingCard = React.forwardRef<HTMLDivElement, SummaryRatingCardProps>(
  ({className, ratings, totalRatingCount, averageRating, onWriteReview, ...props}, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 rounded-medium bg-content1 p-6 shadow-small", className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <Icon className="text-warning-500" icon="solar:star-bold" width={20} />
        <span className="text-large font-semibold">{averageRating}</span>
      </div>
      <div className="flex flex-col gap-2">
        {ratings.map(({rating, count,color}, index) => {
          const percentage = (count / totalRatingCount) * 100;

          return (
            <div key={index} className="flex items-center gap-1">
              <Progress
                showValueLabel
                color={color||'warning'}
                label={
                  <span className="text-small">{`${rating}`}</span>
                }
                value={percentage}
              />
            </div>
          );
        })}
      </div>
    </div>
  ),
);

SummaryRatingCard.displayName = "SummaryRatingCard";

export default SummaryRatingCard;
