import Circle from "./circle";

function LuckyDraw() {
  return ( <div className="w-screen h-screen flex justify-center items-center align-middle">
          <img
        src="/arrow.svg"
        alt="Arrow"
        id="arrow"
        height={80}
        width={80}
        className="fixed top-3 left-1/2 transform -translate-x-1/2 z-40 -rotate-45 "
      />
    <Circle sections={8}/>
  </div> );
}

export default LuckyDraw;