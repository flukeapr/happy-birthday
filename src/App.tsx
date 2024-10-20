import { useState, useEffect, useRef } from "react";
import BirthdayBanner from "/images/birthday-banner-top.png";
import "./App.css";
import Wishcomponent from "./components/WishComponent";
import balloon from "/images/balloon.png";
import { ReactFloatingBalloons } from "react-floating-balloons";
import useSound from "use-sound";
import happySong from "/music/happy-birthday.mp3";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { Cake } from "lucide-react";
import Envelope from "./components/Envelope";

function App() {
  const [isBlowing, setIsBlowing] = useState(false);
  const [flameVisible, setFlameVisible] = useState(true);
  const wishComponentRef = useRef<HTMLDivElement>(null);
  const [confetti, setConfetti] = useState(false);
  const [play, { pause }] = useSound(happySong, { volume: 0.25 });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const [showEnvelope, setShowEnvelope] = useState(false);
  useEffect(() => {
    const startMic = async () => {
      try {
        // ขออนุญาตใช้ไมโครโฟน
        const stream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });

        // สร้าง AudioContext
        const AudioContextClass =
          window.AudioContext || (window as any).webkitAudioContext;
        audioContextRef.current = new AudioContextClass();
        const audioContext = audioContextRef.current;

        // สร้าง source จากไมโครโฟน
        const microphone = audioContext.createMediaStreamSource(stream);

        // สร้าง analyzer node สำหรับวิเคราะห์ความดังของเสียง
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;

        // เชื่อมต่อ microphone เข้ากับ analyser
        microphone.connect(analyser);

        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        // ฟังก์ชันตรวจจับความดังของเสียง
        const checkAudioLevel = () => {
          analyser.getByteFrequencyData(dataArray);

          // คำนวณค่าเฉลี่ยความดังของเสียง
          const average = dataArray.reduce((a, b) => a + b) / bufferLength;

          // ถ้าความดังเกินเกณฑ์ที่กำหนด (ปรับค่าตามความเหมาะสม)
          if (average > 50) {
            setIsBlowing(true);
            setFlameVisible(false);
            setConfetti(true);
          } else {
            setIsBlowing(false);
          }

          // ทำการเช็คต่อเนื่อง
          requestAnimationFrame(checkAudioLevel);
        };

        checkAudioLevel();
      } catch (err) {
        console.error("Error accessing microphone:", err);
      }
    };

    startMic();

    // Cleanup function
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);
  useEffect(() => {
    
    if (!flameVisible ) {
      const timer = setTimeout(() => {
        setConfetti(false);
        setShowEnvelope(true);
      }, 10000);
      return  () => clearTimeout(timer);
    }
   

  }, [flameVisible]);

  // useEffect(() => {
  //   if (!flameVisible) {
  //     if (!isPlaying) {
  //       play();
  //       setIsPlaying(true);
  //     }
  //   } else {
  //     if (isPlaying) {
  //       pause();
  //       setIsPlaying(false);
  //     }
  //   }
  // }, [flameVisible]);

  return (
    <>
      <img src={BirthdayBanner} className="absolute -top-10 left-0 z-20" />
      <main className="max-w-7xl mx-auto pt-10 h-screen ">
      {confetti && (
        <>
          <Confetti width={windowSize.width} height={windowSize.height} />
        </>
      )}
        <div className="flex justify-center items-center flex-col relative">
          <motion.h1
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className=" my-4 flex items-center justify-center uppercase text-4xl font-bold  bg-gradient-to-r from-violet-500 to-purple-300 bg-clip-text text-transparent"
          >
            Happy Birthday!
          </motion.h1>
          <h1
            className="text-gray-600 text-center"
           
          >
            20 Year
          </h1>
          <h1 className="text-gray-600 text-center">29/10/2547</h1>
          {!showEnvelope && (
            <p className="text-center my-14 text-gray-600">
            {flameVisible ? "อ้วนลองเป่าเทียน" : "🎉 สุขสันต์วันเกิดนะอ้วน! 🎉"}
          </p>
          )}
          
          {showEnvelope ? (
            <Envelope />
          ) : (
           
            <svg
            width="300px"
            height="300px"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            class="iconify iconify--fxemoji"
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
                fill="#BFBCAF"
                d="M508.985 340.349c0 91.045-113.521 164.852-253.556 164.852S1.874 431.395 1.874 340.349S115.395 175.497 255.43 175.497s253.555 73.807 253.555 164.852z"
              ></path>
              <path
                fill="#E3E8E7"
                d="M508.985 317.404c0 91.045-113.521 164.852-253.556 164.852S1.874 408.45 1.874 317.404S115.395 152.552 255.43 152.552s253.555 73.807 253.555 164.852z"
              ></path>
              <path
                fill="#FF6E83"
                d="M461.982 181.202v141.751h-.395c-6.505 69.956-95.81 125.385-205.043 125.385S58.006 392.908 51.501 322.952h-.395v-141.75h410.876z"
              ></path>
              <path
                fill="#FFA9BA"
                d="M461.867 181.202c0 72.104.115 141.751-31.488 141.751c-31.603 0-19.797-20.364-48.481-13.664c-28.685 6.701-21.701 70.13-62.199 70.13c-40.136 0-26.373-38.367-63.269-39.053c-36.765.686-15.713 39.053-55.849 39.053c-40.498 0-40.937-63.429-69.622-70.13c-28.685-6.701-16.879 13.664-48.481 13.664c-31.603 0-31.488-69.647-31.488-141.751c0-51.405 130.507-2.535 205.438 29.76c74.932-32.295 205.439-81.165 205.439-29.76z"
              ></path>
              <path
                fill="#FFBDCD"
                d="M461.867 181.202c0 73.768-91.978 133.568-205.438 133.568S50.991 254.97 50.991 181.202S142.969 47.634 256.429 47.634s205.438 59.8 205.438 133.568z"
              ></path>
              <path
                fill="#EBF2F2"
                d="M255.067 137.466a4.485 4.485 0 0 1-4.485-4.485V83.646a4.485 4.485 0 1 1 8.97 0v49.335a4.485 4.485 0 0 1-4.485 4.485zM138.715 88.591V58.298a4.485 4.485 0 1 0-8.97 0v30.293a4.485 4.485 0 1 0 8.97 0zm240.212 0V58.298a4.486 4.486 0 0 0-8.97 0v30.293a4.486 4.486 0 0 0 8.97 0z"
              ></path>
              <path
                fill="#D6E5E5"
                d="M255.067 237.202c-6.903 0-12.5-5.596-12.5-12.5V126.57c0-6.904 5.597-12.5 12.5-12.5c6.904 0 12.5 5.596 12.5 12.5v98.132c-.001 6.904-5.596 12.5-12.5 12.5zm-109.034-56.89V89.49c0-6.903-5.597-12.5-12.5-12.5s-12.5 5.597-12.5 12.5v90.821c0 6.903 5.597 12.5 12.5 12.5s12.5-5.596 12.5-12.499zm240.908 0V89.49c0-6.903-5.597-12.5-12.5-12.5s-12.5 5.597-12.5 12.5v90.821c0 6.903 5.597 12.5 12.5 12.5s12.5-5.596 12.5-12.499z"
              ></path>
              {flameVisible && (
                <path
                  fill="#FFBD03"
                  d="M115.415 51.328s-.091-.742-.063-2.027l.019-.507a39.458 39.458 0 0 1 .8-4.561c.131-.543.284-1.169.438-1.682c.144-.422.31-.852.476-1.293c.33-.883.708-1.8 1.13-2.739c.418-.84.895-1.662 1.393-2.521c.248-.413.506-.894.771-1.258l.797-1.101c.269-.371.544-.745.836-1.113l.434-.55l.412-.467c.544-.632 1.146-1.243 1.734-1.873c.536-.531 1.125-1.039 1.701-1.565l.436-.393c.133-.116.269-.222.408-.331l.834-.656l.845-.662l.798-.57l1.588-1.132l2.992-2.07c1.024-.692 1.845-1.369 2.829-2.086l1.291-1.105c.437-.372.919-.736 1.28-1.137l1.185-1.175c.386-.393.813-.773 1.123-1.18l1.958-2.279l1.457-1.955a106.573 106.573 0 0 1 1.386-1.819l.257-.327a3.68 3.68 0 0 1 6.02.327s.48.771 1.207 2.211c.333.72.814 1.612 1.216 2.667c.347 1.057.762 2.286 1.142 3.669c.393 1.382.561 2.909.805 4.584c.202 1.667.184 3.428.181 5.314c-.049.915-.145 1.842-.234 2.801c-.049.477-.091.967-.154 1.448l-.244 1.401c-.175.93-.33 1.932-.557 2.846l-.69 2.739c-.247.93-.501 1.715-.756 2.583l-.385 1.269l-.368 1.142l-.716 2.181c-.214.648-.405 1.301-.636 1.911c-.152.528-.278 1.056-.447 1.54l-.119.364c-.027.108-.035.197-.054.295a5.796 5.796 0 0 1-.115.55l-.129.517c-.036.168-.009.247-.024.365a3.15 3.15 0 0 1-.071.582c.054.098.08.175.075.237c-.001.031.001.062-.013.088c.028-.055.1-.226.131-.334c.083-.245.09-.493.083-.718a1.286 1.286 0 0 0-.048-.309l-.054.504c-.158 1.275-.355 1.996-.355 1.996c-2.689 9.863-12.866 15.679-22.729 12.99c-7.469-2.037-12.617-8.366-13.508-15.601l.001-.025zm240.209.026c.892 7.236 6.04 13.565 13.508 15.601c9.863 2.689 20.04-3.126 22.729-12.99c0 0 .197-.721.355-1.996l.054-.504c.022.07.046.203.048.309c.007.225 0 .474-.083.718a2.783 2.783 0 0 1-.131.334c.014-.025.012-.056.013-.088c.005-.062-.021-.138-.075-.237c.037-.16.065-.369.071-.582c.016-.118-.012-.197.024-.365l.129-.517c.044-.176.086-.357.115-.55c.019-.098.027-.187.054-.295l.119-.364c.169-.484.295-1.012.447-1.54c.231-.61.423-1.262.636-1.911l.716-2.181l.368-1.142l.385-1.269c.256-.868.51-1.654.757-2.583l.69-2.739c.227-.914.382-1.916.557-2.846l.244-1.401c.062-.481.105-.972.154-1.448c.088-.959.185-1.887.234-2.801c.003-1.885.021-3.646-.181-5.314c-.244-1.674-.412-3.201-.805-4.584c-.379-1.383-.795-2.613-1.142-3.669c-.402-1.055-.883-1.947-1.216-2.667c-.727-1.44-1.207-2.211-1.207-2.211a3.68 3.68 0 0 0-6.02-.327l-.257.327s-.545.694-1.386 1.819l-1.457 1.955l-1.958 2.279c-.31.407-.737.788-1.123 1.18l-1.185 1.175c-.361.401-.843.766-1.28 1.137l-1.291 1.105c-.984.717-1.805 1.394-2.829 2.086l-2.992 2.07l-1.588 1.132l-.798.57l-.846.662l-.834.656c-.139.109-.276.215-.408.331l-.436.393c-.576.526-1.165 1.033-1.701 1.565c-.589.63-1.191 1.242-1.734 1.873l-.412.467l-.434.55a31.99 31.99 0 0 0-.836 1.113l-.797 1.101c-.266.365-.523.845-.771 1.258c-.499.859-.975 1.681-1.393 2.521c-.421.939-.8 1.856-1.13 2.739c-.166.441-.332.871-.476 1.293a34.306 34.306 0 0 0-.438 1.682a39.458 39.458 0 0 0-.8 4.561l-.019.507c-.027 1.285.063 2.027.063 2.027l-.001.025z"
                ></path>
              )}
              {flameVisible && (
                <path
                  fill="#FFD366"
                  d="M235.511 85.091s-.075-.919-.037-2.516l.006-.152l.033-.307l.079-.667c.058-.455.117-.933.198-1.428c.16-.991.341-2.065.597-3.193c.067-.325.115-.436.175-.664l.176-.613l.394-1.27c.271-.85.571-1.833.921-2.609a72.61 72.61 0 0 1 1.105-2.559c.383-.89.822-1.619 1.259-2.466c.892-1.712 1.849-3.168 2.893-4.78c1.011-1.461 2.122-3.026 3.227-4.406a73.126 73.126 0 0 1 1.696-2.119l1.69-2.059l3.33-3.969c.53-.646 1.065-1.29 1.618-1.926l1.529-1.879c1.058-1.247 1.95-2.449 2.884-3.629c.484-.59.898-1.164 1.299-1.732l1.217-1.663c.794-1.081 1.432-2.1 2.058-3.037a34.628 34.628 0 0 0 1.545-2.482a114.755 114.755 0 0 1 1.403-2.286l.204-.321a3.49 3.49 0 0 1 6.073.321s.473.955 1.188 2.727c.328.884.815 1.99 1.119 3.256l.532 2.05c.173.727.413 1.518.514 2.31c.247 1.589.567 3.4.688 5.248c.122 1.848.251 3.867.192 5.856a76.066 76.066 0 0 1-.087 3.074a93.08 93.08 0 0 1-.226 3.083c-.158 2.086-.452 4.102-.719 6.139c-.318 1.972-.611 3.984-.965 5.805a135.39 135.39 0 0 1-1.054 5.234c-.291 1.538-.695 3.097-.925 4.314c-.128.615-.301 1.285-.397 1.791c-.093.516-.183 1.01-.3 1.473c-.137.505-.131.803-.209 1.15c-.031.166-.056.33-.095.484l-.058.228c-.01.05-.061.206-.034.157c.052-.035.042-.086.026-.131c-.007-.023-.032-.047-.055-.068l-.039-.032c-.007.001-.015-.025-.021 0l-.015.151c-.181 1.588-.381 2.489-.381 2.489l-.024.109c-2.193 9.901-11.998 16.149-21.899 13.956c-8.051-1.785-13.685-8.63-14.328-16.442z"
                ></path>
              )}
            </g>
          </svg>
          )}
          
          
        </div>
       
      </main>
       
     

      {/* {!flameVisible && (
        <div
          className="w-full h-screen pt-20 flex flex-col "
          ref={wishComponentRef}
        >
          <Wishcomponent />
        </div>
      )} */}
      {/* <Wishcomponent /> */}
      
    </>
  );
}

export default App;