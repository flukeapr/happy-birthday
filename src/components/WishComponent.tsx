import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import Card from "./Card";
import "../App.css";
import { Cake } from "lucide-react";


let cards = [
  {
    key: 1,
    content: <Card image="/images/F1.jpg" />,
  },
  {
    key: 2,
    content: <Card image="/images/F2.jpg" />,
  },
  {
    key: 3,
    content: <Card image="/images/F3.jpg" />,
  },
  {
    key: 4,
    content: <Card image="/images/F4.jpg" />,
  },
];
export default function WishComponent() {
  return (
    <>
     
      <div className="flex flex-col justify-end ">
        <div className="border border-gray-400 w-full h-36 rounded-md p-2 mt-2">
        <p>โตขึ้นอีกปีแล้วนะอ้วน ยิ้มเยอะๆ
          กินข้าวให้อร่อย
          รำรวยๆ
          เป็นเด็กดีของพ่อกับแม่
          อยากได้อะไรก็ตั้งใจทำมันให้เต็มที่นะ อยู่ข้างๆอ้วนเสมอ
          รักอ้วนนะ
        </p>
        </div>
      
       
        <Carousel
          cards={cards}
          height="250px"
          width="100%"
          margin="0 auto"
          offset={2}
          showArrows={false}
        />
         <div className="flex justify-around absolute left-0 bottom-0 w-full bg-gradient-to-r from-violet-500 to-purple-300 p-2 ">
        {Array.from({ length: 4 }).map((_, i) => (
              <Cake key={i} size={20} color="white"/>
          
        ))}
        </div>
      </div>
    </>
  );
}
