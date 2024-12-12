import Snowfall from "react-snowfall";
import GiftCreation from "~/components/createGift";

function Gift() {
  return (
    <div className="h-screen w-screen bg-[#c60f0f] flex justify-end items-end px-2 ">
      <Snowfall />
      <div className="flex justify-end tree items-end">
        <img src="/box.png" alt="box" className="h-[120px]" />
        <img src="/giftbox.png" alt="giftbox" className="h-[150px]" />
      </div>
      <GiftCreation />
    </div>
  );
}

export default Gift;
