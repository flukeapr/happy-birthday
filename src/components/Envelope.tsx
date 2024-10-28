import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WishComponent from "./WishComponent";

export default function Envelope() {
  const [show, setShown] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    if(isOpen){
      const timer = setTimeout(() => {
        (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()
      }, 2000); 
      return () => clearTimeout(timer);
        
    }else{
      (document.getElementById('my_modal_2') as HTMLDialogElement)?.close()

    }
  },[isOpen])
  useEffect(() => {
    if(show){
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1000); 
      return () => clearTimeout(timer); 
    }else{
      setIsOpen(false);
    }
   
  }, [show]);
  const handleShow = () => {
    setShown(!show);
  };
  return (
    <>
      {show ? (
        <motion.div
          className="flex justify-end items-center "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => handleShow()}
        >
          <svg
            width={350}
            height={350}
            viewBox="0 0 1024 1024"
            className="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
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
                d="M 554.211 91.25 c -23.8933 -19.456 -58.2542 -19.456 -82.1475 0 L 40.96 441.571 v 507.79 h 944.353 V 441.571 L 554.211 91.25 Z"
                fill="#ffa9b1"
              ></path>

              <path
               className={`transition-transform duration-700 ${isOpen ? '-translate-y-40' : 'translate-y-0'}`}
                d="M 756.395 359.083 C 733.753 273.067 645.689 221.867 559.672 244.509 c -47.4453 12.5155 -84.4231 44.9422 -104.107 86.016 c -37.4329 -25.9413 -85.4471 -36.0675 -133.006 -23.552 c -86.016 22.6418 -137.216 110.706 -114.574 196.722 c 11.9467 45.1698 42.5529 77.3689 79.9858 101.035 L 570.028 761.629 l 164.637 -272.043 c 20.2525 -36.7502 34.0195 -84.0818 21.7315 -130.503 Z"
                fill="#ffffff"
              ></path>

              <path
              className={`transition-transform duration-700 ${isOpen ? '-translate-y-40' : 'translate-y-0'}`}
                d="M 576.512 785.977 L 247.011 596.878 c -28.672 -25.1449 -47.6729 -54.8409 -56.5475 -88.5191 c -12.1742 -46.3075 -5.68889 -94.5497 18.432 -135.851 c 24.1209 -41.3013 62.8053 -70.8835 109.113 -83.0578 c 44.3733 -11.7191 91.0222 -5.91645 130.845 15.5875 c 24.0071 -38.4569 61.7813 -66.4462 106.155 -78.1653 c 95.5734 -25.2587 193.763 31.9715 218.909 127.545 c 10.5813 40.2773 -3.75467 90.7947 -9.78487 110.137 c -10.5813 33.6782 -187.619 321.422 -187.619 321.422 Z M 297.529 589.255 l 266.013 147.911 l 155.193 -256.455 c 12.8569 -23.2107 32.6542 -69.2907 20.0249 -116.963 c -20.0249 -76.1173 -98.3044 -121.742 -174.421 -101.604 c -40.5049 10.6951 -74.1831 38.4569 -92.2738 76.3449 l -9.216 19.2285 l -17.5218 -12.1742 c -34.4747 -23.8933 -77.4827 -31.5165 -117.987 -20.8213 c -36.864 9.67116 -67.8115 33.2231 -86.9262 66.2187 c -19.2285 32.9955 -24.4622 71.4525 -14.6773 108.317 c 9.44353 35.84 32.9955 65.3085 71.7938 89.9982 Z"
                fill="#ff6b6a"
              ></path>

              <path
              className={`transition-transform duration-700 ${isOpen ? '-translate-y-40' : 'translate-y-0'}`}
                d="M 336.099 456.135 l 13.0845 -2.95822 l 16.8391 75.2071 l 47.5591 -10.6951 l 2.50311 11.264 l -60.6435 13.5395 l -19.3422 -86.3573 Z M 479.459 435.768 c 9.10222 6.48533 15.1325 16.384 18.0907 29.8098 c 2.95822 13.1982 1.70667 24.6898 -3.75467 34.4747 c -5.68889 10.1262 -15.1325 16.7253 -28.2169 19.6835 c -13.1982 2.95822 -24.4622 1.024 -34.0195 -5.91645 c -8.98845 -6.48533 -15.0187 -16.384 -17.8631 -29.5822 c -2.95822 -13.1982 -1.82045 -24.6898 3.64089 -34.4747 c 5.46133 -10.24 14.9049 -16.9529 28.2169 -19.9111 c 13.0845 -2.95822 24.4622 -1.024 33.9058 5.91645 Z m -50.6311 19.7973 c -3.52711 6.94045 -4.096 15.5875 -1.82045 25.7138 c 2.27555 10.0124 6.48533 17.408 12.6293 22.3005 c 6.48533 5.00622 14.336 6.48533 23.4382 4.43733 c 9.216 -2.048 15.5875 -6.59911 19.3422 -13.7671 c 3.64089 -6.94045 4.20978 -15.5875 1.93422 -25.8275 s -6.59911 -17.8631 -12.8569 -22.7555 c -6.25778 -4.89245 -13.9947 -6.25778 -23.3245 -4.20978 c -9.32978 2.048 -15.8151 6.82667 -19.3422 14.1085 Z M 493.341 420.978 l 14.336 -3.18578 l 40.6187 66.1049 l 0.341333 -0.113778 l 8.41955 -77.1413 l 14.336 -3.18578 l -11.6053 93.2978 l -15.9289 3.52711 l -50.5173 -79.3031 Z M 580.381 401.522 l 62.1227 -13.8809 l 2.50311 11.264 l -48.9245 10.9227 l 5.68889 25.1449 l 45.9662 -10.24 l 2.50311 11.264 l -45.9662 10.24 l 6.144 27.4205 l 50.9725 -11.3778 l 2.50311 11.264 l -64.1707 14.336 l -19.3422 -86.3573 Z"
                fill="#ff6b6a"
              ></path>

              <path
                d="M 985.316 441.571 L 513.138 731.25 l -0.910222 109.454 l -1.024 -109.454 L 40.96 441.571 v 507.79 l 470.243 0.796445 H 513.138 l 472.178 -0.796445 Z"
                fill="#ffd2da"
              ></path>
              <path
                d="M 463.189 536.69 L 40.96 949.362 h 944.353 L 563.086 536.69 c -27.7618 -27.0791 -72.1351 -27.0791 -99.8972 0 Z"
                fill="#ffa9b1"
              ></path>
            </g>
          </svg>
        </motion.div>
      ) : (
        <motion.div
          className="flex justify-center items-center "
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={() => handleShow()}
        >
          <svg
            width={350}
            height={350}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40.96 441.571v507.79h944.353V441.571L513.138 731.25 40.96 441.571Z"
              fill="#ffa9b1"
            />

            <path
              d="M554.211 441.571c-23.8933-19.456-58.2542-19.456-82.1475 0L40.96 441.571l472.178 289.679 472.178-289.679L554.211 441.571Z"
              fill="#ffd2da"
            />

            <path
              d="M463.189 736.69L40.96 949.362h944.353L563.086 736.69c-27.7618-27.0791-72.1351-27.0791-99.8972 0Z"
              fill="#ffa9b1"
            />
          </svg>
        </motion.div>
      )}
      <dialog id="my_modal_2" className="modal ">
        <div className="modal-box h-[85%] overflow-x-hidden overflow-y-hidden">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => handleShow()}
            >
              ✕
            </button>
          </form>
          
          <WishComponent />
        
         
        </div>
        
      </dialog>
    </>
  );
}
