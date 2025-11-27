import video from "../assets/video.gif";
import ConfettiBackground from "./ConfettiBackground";
import sound from '../assets/My-Heart.mp3'
import { useState, useEffect, useRef } from "react";
import BirthdayCard from "./BirthdayCard";

const Hero = () => {
  const [showCelebration, setShowCelebration] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (showCelebration) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [showCelebration]);

  return (
    <>
      <ConfettiBackground isActive={showCelebration} />
      <BirthdayCard showCard={showCelebration}/>
      
      <audio ref={audioRef} loop>
        <source src={sound} type="audio/mpeg" />
      </audio>
      <div className="flex flex-col justify-center items-center h-[100vh] gap-4 bg-linear-to-tr from-purple-300 to-pink-500">
        <div className="flex justify-center my-6">
          <img
            src={video}
            alt="Loading animation"
            className="w-42 h-42 rounded-full object-cover"
          />
        </div>
        <h1 className="font-bold  text-2xl md:text-4xl bg-gradient-to-r from-purple-600 via-pink-500 to-purple-700 bg-clip-text text-transparent">
          Birthday Princess, shall we?
        </h1>

        <div className="py-4 flex gap-4 ">
          <button
            onClick={() => setShowCelebration(true)}
            className="px-10 py-4 bg-linear-to-r from-pink-400 to-pink-500 text-white text-extrabold text-2xl rounded-4xl"
          >
            {" "}
            Yes{" "}
          </button>
          <button
            onClick={() => setShowCelebration(true)}
            className="px-10 py-4 bg-linear-to-r from-pink-400 to-pink-500 text-white text-extrabold text-2xl rounded-4xl"
          >
            {" "}
            Yes{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
