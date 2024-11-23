import SummaryRatingCard from "@/components/RatingCard";
import UserProfile from "@/components/UserProfile";
import { Card, Image, CardBody, Button } from "@nextui-org/react";
import Faq from "@/components/FAQ";
import CheckListCard from "@/components/CheckListCard";
import { Icon } from "@iconify/react";

const ratings: {
  rating: number;
  count: number;
  color?: "warning" | "secondary" | "success" | "danger";
}[] = [
  {
    rating: 120,
    count: 120,
    color: "warning",
  },
  {
    rating: 50,
    count: 50,
    color: "secondary",
  },
  {
    rating: 25,
    count: 25,
    color: "success",
  },
  {
    rating: 33,
    count: 33,
    color: "danger",
  },
];

export default function Report() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex  justify-between items-center">
        <h1 className="flex-1 font-bold">Body Measurements</h1>
        <div className="flex  flex-col gap-4">
          <Button fullWidth radius="full" variant="light">
            Share Report
          </Button>
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex flex-col w-[30%] gap-4">
          <UserProfile />
          <CheckListCard />
        </div>
        <div className="flex flex-col">
          <Image src="/women.webp" alt="Women" width={370} />
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <SummaryRatingCard
            averageRating={64}
            ratings={ratings}
            totalRatingCount={139}
          />
          <Card className="w-full max-w-[520px]">
            <Button
              isIconOnly
              className="absolute right-2 top-2 z-20"
              radius="full"
              size="sm"
              variant="light"
            >
              <Icon
                className="text-default-400"
                icon="iconamoon:close-thin"
                width={24}
              />
            </Button>
            <CardBody className="flex flex-row flex-wrap p-0 sm:flex-nowrap">
              <Image
                removeWrapper
                alt="Acme Creators"
                className="h-auto w-full flex-none object-cover object-top md:w-48"
                src="./heart.jpeg"
              />
              <div className="px-4 py-5">
                <h3 className="text-large font-medium">静息心率 70 次/分钟</h3>
                <div className="flex flex-col gap-3 pt-2 text-small text-default-400">
                  <p>
                    70次/分钟的静息心率处于正常范围内，通常表明心脏功能良好。
                  </p>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <p>体脂率: 30%</p>
              <p>体态: 圆肩、轻微骨盆前倾、颈椎前倾</p>
            </CardBody>
          </Card>
        </div>
      </div>
      <Faq></Faq>
    </div>
  );
}
