"use client";

import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import faqs from "./faqs";


export default function Component() {
  return (
    <section className="mx-auto w-full max-w-6xl px-0   md:px-6  py-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <h2 className="px-2 text-3xl leading-7">
          <span className="inline-block md:hidden">FAQs</span>
          <span className="hidden md:inline-block">为了更好的提升您的健康状况，请选择一个短期健康目标          </span>
        </h2>
        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: "px-6 !bg-default-100 !shadow-none hover:!bg-default-200/50",
            title: "font-medium",
            trigger: "py-6",
            content: "pt-0 pb-6 p-base p-default-500",
          }}
          items={faqs}
          selectionMode="multiple"
          variant="splitted"
        >
          {faqs.map((item, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={item.title}
            >
                     <h4>Body Health Summary and Suggestions</h4>
        <p>
          Based on the information you provided, here's a summary of your body health and some suggestions for reaching your weight loss and fat loss goals:
        </p>
        <h5 className="leading-5 text-3xl">Analysis:</h5>
        <p>
          Body Mass Index (BMI): Your BMI is approximately 24.2, which falls within the normal weight range. However, your body fat percentage is higher than the recommended range for women (21-24%). This indicates that while your weight might be healthy for your height, you could benefit from reducing your body fat and increasing muscle mass.
        </p>
        <p>
          Apple Body Shape: This means you tend to store more fat around your midsection, which can increase your risk of certain health problems like heart disease and type 2 diabetes.
        </p>
        <p>
          Resting Heart Rate: Your resting heart rate is within the normal range.
        </p>
        <p>
          Postural Issues: Round shoulders and anterior pelvic tilt can lead to muscle imbalances, back pain, and reduced mobility.
        </p>
        <h5  className="leading-5 text-xl2">Suggestions:</h5>
        <h6  className="leading-6 text-xl">1. Nutrition:</h6>
        <p>
          Focus on a balanced diet: Include plenty of fruits, vegetables, lean protein, and whole grains.
        </p>
        <p>
          Reduce processed foods: Limit sugary drinks, refined carbohydrates, and unhealthy fats.
        </p>
        <p>
          Control portion sizes: Be mindful of how much you're eating, even healthy foods.
        </p>
        <p>
          Stay hydrated: Drink plenty of water throughout the day.
        </p>
        <p>
          Consider consulting a nutritionist: A registered dietitian can help you create a personalized meal plan tailored to your needs and goals.
        </p>
        <h6 className="leading-6 text-xl">2. Exercise:</h6>
        <p>
          Combine cardio and strength training: Cardio exercises like running, swimming, or cycling help burn calories, while strength training builds muscle and boosts metabolism. Aim for at least 150 minutes of moderate-intensity cardio or 75 minutes of vigorous-intensity cardio per week, along with two to three strength training sessions.
        </p>
        <p>
          Incorporate core strengthening exercises: This can help improve your posture and address your round shoulders and anterior pelvic tilt. Exercises like planks, bridges, and bird-dog can be beneficial.
        </p>
        <p>
          Increase daily activity: Look for opportunities to move more throughout the day, like taking the stairs instead of the elevator or going for a walk during your lunch break.
        </p>
        <h6 className="leading-6 text-xl">3. Lifestyle:</h6>
        <p>
          Manage stress: High stress levels can contribute to weight gain. Find healthy ways to manage stress, such as yoga, meditation, or spending time in nature.
        </p>
        <p>
          Prioritize sleep: Aim for 7-9 hours of quality sleep each night.
        </p>
        <p>
          Stay consistent: Making sustainable changes to your diet and exercise habits takes time and effort. Don't get discouraged if you don't see results immediately.
        </p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
