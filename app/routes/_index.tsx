import type { MetaFunction } from "@remix-run/cloudflare";
import Snowfall from "react-snowfall";

export const meta: MetaFunction = () => {
  return [
    { title: "Gift for you" },
    {
      name: "description",
      content:
        "All India Private Schools Association brings you exciting gifts",
    },
  ];
};

export default function Index() {
  return (
    <div className="w-screen h-screen bg overflow-hidden">
      <Snowfall />
      <img src="/santa.png" alt="santa" className="moving md:w-1/2" />
      <div className="flex justify-center items-center mt-10 flex-col">
        <img src="/Logo.png" alt="logo" className="h-36 w-36" />
        <p className="text-6xl font-bold text-white text-center font-script">
          Merry Christmas
        </p>
        <p className="text-center text-white font-bold stroke-black stroke-2 p-4">
          Wishing educators, students, and supporters a joyous Christmas filled
          with peace, love, and happiness. <br /> Let’s continue spreading the
          light of education and the spirit of togetherness.
        </p>
        <a href="/luckydraw" className="btn px-8 py-2">
          <strong>Grab Your Offer</strong>
          <div id="container-stars">
            <div id="stars"></div>
          </div>

          <div id="glow">
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </a>
       
        <div className="text-white m-4 flex justify-evenly w-full p-4 md:w-1/2">
          <a href="/gift" className="px-6 bg-black pb-3 pt-2 rounded-full">
            Send Gift
          </a>
          <a href="/card" className="px-6 bg-black pb-3 pt-2 rounded-full">
            Send wish
          </a>
        </div>
      </div>
      <iframe
        src="/merry_christmas.mp3"
        allow="autoPlay"
        className="hidden"
        id="iframeAudio"
      ></iframe>
      <div className="flex justify-center">
      <a
          href="https://allindiaprivateschools.org"
          className="text-white px-6 pt-2 pb-3 active:text-black active:bg-blue-200 bg-black rounded-full"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
