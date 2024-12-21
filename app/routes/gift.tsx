import { useSearchParams } from "@remix-run/react";
import Snowfall from "react-snowfall";
import GiftCreation from "~/components/createGift";
import "../styles/gift.css";
import sectionsData from "~/lib/offers";
import client from "~/lib/db";
import { useEffect, useState } from "react";

function Gift() {
  const [searchParams] = useSearchParams();
  const gift = searchParams.get("g") || "";
  const [giftData, setGiftData] = useState<any | null>(null);


  useEffect(() => {
    async function fetchGiftData() {
      try {
        if (gift) {
          const value = await client.collection("gift").getOne(gift);
          setGiftData(value);
        }
      } catch (error) {
        console.error("Error fetching gift data:", error);
        setGiftData(null); 
      }
    }
    fetchGiftData();
  }, [gift]);

  const datanum = giftData?.gift ? parseInt(giftData.gift) : 0;
  const selectedData = datanum >= 0 && datanum < sectionsData.length
    ? sectionsData[datanum]
    : sectionsData[0];

  return (
    <div className="h-screen w-screen bg-[#c60f0f] flex justify-end items-end px-2">
      <a href="/" className="absolute top-5 bg-black px-8 py-3 left-3 rounded-2xl text-white">
        Send a card
      </a>

      <Snowfall />

      <div className="flex justify-end tree items-end">
        <img src="/box.png" alt="Box" className="h-[120px]" />
        <img src="/giftbox.png" alt="Gift Box" className="h-[150px]" />
      </div>

      {!gift ? (
        <GiftCreation />
      ) : (
        <div>
          <div className="container">
            <div className="back">
              <div className="topTriangle"></div>
            </div>
            <div className="card">
              <div className="title1">{selectedData?.title || "Gift Title"}</div>
              <div className="text-lg md:text-2xl">{selectedData?.prize || "Gift description unavailable"}</div>
            </div>


            <div className="front_container">
              <div className="front p-6">
                <p>From</p>
                <p className="text-xl font-bold">{giftData?.name || "Anonymous"}</p>
                <p>(Click the card)</p>
              </div>
            </div>
          </div>

          <div className="fixed right-0 left-0 bottom-28 w-full flex justify-center px-2 md:px-[20%]">
            <a href="/claim" className="goldenButton">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
                <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
              </svg>
              Claim your gift
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gift;

const data = sectionsData;
