"use client";

import type {TextAreaProps} from "@nextui-org/react";

import React from "react";
import {Textarea} from "@nextui-org/react";
import {cn} from "@nextui-org/react";

const PromptInput = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({classNames = {}, ...props}, ref) => {
    return (
      <Textarea
        ref={ref}
        aria-label="Prompt"
        className="min-h-[40px]"
        classNames={{
          ...classNames,
          label: cn("hidden", classNames?.label),
          input: cn("py-0", classNames?.input),
        }}
        minRows={1}
        placeholder="如何制定一个有效的健身计划？"
        radius="lg"
        variant="bordered"
        {...props}
      />
    );
  },
);

export default PromptInput;

PromptInput.displayName = "PromptInput";
