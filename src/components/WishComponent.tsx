import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';
import { Cake ,Heart } from "lucide-react";
import { motion } from "framer-motion";



const Cards = [
  {
    key: 1,
    content: "/images/F1.jpg",
  },
  {
    key: 2,
    content: "/images/F2.jpg" ,
  },
  {
    key: 3,
    content: "/images/F3.jpg" ,
  },
  {
    key: 4,
    content: "/images/F4.jpg" ,
  },
];
export default function WishComponent() {
  return (
    <>
     
      <div className="flex flex-col ">
      <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="Concert  flex items-center  uppercase text-2xl font-bold  bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent "
          >
            สุขสันต์วันเกิดนะอ้วน <Cake color="#d8b4fe "  size={26} className="ml-2" />
          </motion.h1>
        <div className="border border-gray-400 w-full h-32 rounded-md p-2 mt-2">
        <p className='Concert'>
          วันเกิดปีนี้อายุ 20 โตขึ้นอีกปีแล้วนะอ้วน ยิ้มเยอะๆ
          กินข้าวให้อร่อย
          รำรวยๆ
          เป็นเด็กดีของพ่อกับแม่
          อยากได้อะไรก็ตั้งใจทำมันให้เต็มที่นะ อยู่ข้างๆอ้วนเสมอ{" "}
          <span className='inline-flex  justify-center items-center'> รักอ้วนนะ <Heart color="#d8b4fe " fill="#d8b4fe " size={12} />
          </span>
        </p>
        </div>
        <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-[240px] h-[300px] my-4"
      >
        {Cards.map((card) => (
           <SwiperSlide key={card.key} className="flex items-center justify-center rounded-lg ">
            <img src={card.content} />
           </SwiperSlide>
        ))}
        
      </Swiper>
      <svg
            className=" animate-reversBounceY absolute left-0 top-36 z-30"
          width="48px"
          height="48px"
          viewBox="-10.8 -10.8 57.60 57.60"
          xmlns="http://www.w3.org/2000/svg"
          
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#ebb2e3"
              d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
            ></path>
          </g>
        </svg>
        <svg
            className=" animate-bounceY absolute right-0 bottom-36 z-30"
          width="64px"
          height="64px"
          viewBox="-10.8 -10.8 57.60 57.60"
          xmlns="http://www.w3.org/2000/svg"
          
          aria-hidden="true"
          role="img"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              fill="#ebb2e3"
              d="M27.287 34.627c-.404 0-.806-.124-1.152-.371L18 28.422l-8.135 5.834a1.97 1.97 0 0 1-2.312-.008a1.971 1.971 0 0 1-.721-2.194l3.034-9.792l-8.062-5.681a1.98 1.98 0 0 1-.708-2.203a1.978 1.978 0 0 1 1.866-1.363L12.947 13l3.179-9.549a1.976 1.976 0 0 1 3.749 0L23 13l10.036.015a1.975 1.975 0 0 1 1.159 3.566l-8.062 5.681l3.034 9.792a1.97 1.97 0 0 1-.72 2.194a1.957 1.957 0 0 1-1.16.379z"
            ></path>
          </g>
        </svg>

         <div className="flex justify-around absolute left-0 bottom-0 w-full bg-gradient-to-r from-violet-500 to-purple-300 p-2 ">
        {Array.from({ length: 4 }).map((_, i) => (
              <Cake key={i} size={20} color="white"/>
          
        ))}
        </div>
      </div>
    </>
  );
}
