
import SummaryRatingCard from '@/components/RatingCard';
import UserProfile from '@/components/UserProfile';
import {Card, CardHeader, CardBody, Button, Avatar, Tabs, Tab, Chip} from "@nextui-org/react";
import Image from 'next/image';

const ratings = [
  {
    rating: '运动指数',
    count: 120,
    color:'warning'
  },
  {
    rating: '睡眠指数',
    count: 50,
    color:'secondary'
  },
  {
    rating: '饮食指数',
    count: 25,
    color:'success'
  },
  {
    rating: '体检指数',
    count: 33,
    color:'danger'
  },
];

export default function Report() {
  return <div className='flex flex-col gap-4'>
    <div className='flex  justify-between'>
      <h1 className='flex-1 font-bold'>Body Measurements</h1>
    <div className="flex  flex-col gap-4">
        <Button
          fullWidth
          radius="full"
          variant="light"
        >
          Share Report
        </Button>
      </div>
    </div>
    <div  className='flex gap-4'>
    <div className='flex flex-col w-[30%] gap-4'> 
   <UserProfile/>
   <Card >
            <CardBody>
              <p>身高: 170 厘米</p>
              <p>性别: 女</p>
              <p>体重: 70 公斤</p>
              <p>体脂率: 30%</p>
              <p>体型分类: 苹果型</p>
              <p>心率: 静息心率 70 次/分钟</p>
              <p>体态: 圆肩、轻微骨盆前倾、颈椎前倾</p>
              
            </CardBody>
            
          </Card>
       
   </div>
    <div className='flex flex-col'>
      <Image src="/women.webp" alt="Women" width={300} height={300} />
    </div>
    <div className='flex-1'>
   <SummaryRatingCard averageRating={64} ratings={ratings} totalRatingCount={139} />
      </div>
    </div>
      </div>;
}





