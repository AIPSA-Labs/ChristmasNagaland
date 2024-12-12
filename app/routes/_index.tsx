import type { MetaFunction } from "@remix-run/node";
import { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    const audio = document.getElementById("audio") as HTMLAudioElement;
    audio.play();
    setIsPlaying(true);
  };
  
  return (
    <div className="w-screen h-screen bg overflow-hidden" onMouseEnter={playAudio}>
      <Snowfall />
      <img src="/santa.png" alt="santa" className="moving md:w-1/2"/>
      <div className="flex justify-center items-center mt-10 flex-col">
      <img src="/Logo.png" alt="logo" className="h-36 w-36"/>
      <p className="text-8xl font-bold text-white text-center font-script">Merry Christmas</p>
      <p className="text-center text-white font-bold stroke-black stroke-2 p-4">Wishing educators, students, and supporters a joyous Christmas filled with peace, love, and happiness. <br/> Let’s continue spreading the light of education and the spirit of togetherness.</p>
      <a href="https://allindiaprivateschools.org" className="text-white px-6 pt-2 pb-3 active:text-black active:bg-blue-200 bg-black rounded-full">Learn More</a>
      <div className="text-white m-4 flex justify-evenly w-full p-4 md:w-1/2">
        <a href="/gift" className="px-6 bg-black pb-3 pt-2 rounded-full">
        Send Gift</a>
        <a href="/card" className="px-6 bg-black pb-3 pt-2 rounded-full">Send wish</a>
      </div>
      </div>
      <audio src="/merry_christmas.mp3" autoPlay loop ></audio> 
    </div>
  );
}
