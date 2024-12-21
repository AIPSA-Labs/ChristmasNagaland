import { useSearchParams } from "@remix-run/react";
import React, { useEffect } from "react";
import Snowfall from "react-snowfall";
import FormComponent from "~/components/fomrcom";

const ChristmasBackground: React.FC = () => {

    const [search] = useSearchParams();


     useEffect(() => {
        const gift = search.get('g')

        if (!gift) {
            window.location.replace('/')
        }
    }, [])
    
  return (
    <div className="relative w-screen h-screen bg-gradient-to-br from-red-600 to-green-700 overflow-hidden">
      <Snowfall color="white" snowflakeCount={100} />
      <div className="absolute bottom-0 w-full flex justify-center items-center">
        <img
          src="/tree.png"
          alt="Christmas Tree"
          className="h-[70vh] animate-wiggle"
        />
      </div>

      <div className="absolute inset-0 twinkle-lights"></div>
      <div className="absolute top-16 w-full text-center text-white font-bold text-4xl md:text-6xl">
        <p className="animate-glow">🎄 Merry Christmas 🎁</p>
        <p className="text-lg md:text-xl mt-4 animate-fade-in">
          Wishing you a season of joy and cheer!
        </p>
      </div>
      <FormComponent/>

    </div>
  );
};

export default ChristmasBackground;
