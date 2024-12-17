import React, { useState } from "react";
import Snowfall from "react-snowfall";

const sectionsData = [
  { color: "rgb(255, 99, 132)", text: "Prize 1" , prize : 'hello'},
  { color: "rgb(54, 162, 235)", text: "Prize 2", prize : 'geeg' },
  { color: "rgb(255, 205, 86)", text: "Prize 3", prize : 'fdfafda' },
  { color: "rgb(75, 192, 192)", text: "Prize 4", prize : 'afsasa' },
  { color: "rgb(153, 102, 255)", text: "Prize 5", prize : 'fdafa' },
  { color: "rgb(255, 159, 64)", text: "Prize 6", prize : 'fafas' },
  { color: "rgb(255, 182, 193)", text: "Prize 7", prize : 'fassa' },
  { color: "rgb(34, 193, 195)", text: "Prize 8" , prize : 'fasfsaf'},
];

interface CircleProps {
  sections: number;
}

const Circle: React.FC<CircleProps> = ({ sections }) => {
  const sectionCount = Math.min(sections, 24);
  const sectionData = sectionsData.slice(0, sectionCount);
  const angle = 360 / sectionCount;
  const [rotation, setRotation] = useState<number>(0);
  const [prize, setPrize] = useState<string>("");

  const handleClick = () => {
    const spins = 5;
    const randomAngle = Math.floor(Math.random() * 360) + spins * 360;
    const finalAngle = randomAngle % 360;
    const sectionIndex = Math.floor(finalAngle / angle) % sectionCount;
    const prize = sectionData[sectionIndex].prize;
    document.getElementById("cic")?.classList.add("animate-spin");
    document.getElementById("arrow")?.classList.add("shake-icon");
    setTimeout(() => {
      document.getElementById("arrow")?.classList.remove("shake-icon");
      document.getElementById("cic")?.classList.remove("animate-spin");    
      setRotation(randomAngle);
      setPrize(prize); 
    }, 3000);
  };

  return (
    <div>
      <div
        id="cic"
        className="relative w-[80vw] h-[80vw] md:h-[80dvh] md:w-[80dvh] rounded-full border-2 overflow-hidden cursor-pointer"
        onClick={handleClick}
        style={{
          transform: `rotate(${rotation}deg)`,
          background: `conic-gradient(${sectionData
            .map(
              (section, index) =>
                `${section.color} ${angle * index}deg ${angle * (index + 1)}deg`
            )
            .join(", ")}`,
        }}
      >
        <div className="absolute inset-0 m-auto w-16 h-16 bg-white rounded-full"></div>

        {sectionData.map((section, index) => (
          <div
            key={index}
            className="absolute text-white text-center"
            style={{
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) rotate(${angle * index}deg) translateY(-130%)`,
            }}
          >
            <div className="transform -rotate-90 flex justify-center items-center pb-14">
              {section.text}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 text-center text-lg font-bold">
        {prize && <div className="fixed bg-black bg-opacity-45 w-screen h-screen top-0 left-0 flex justify-center items-center align-middle z-20">
            <div className=" bg-white w-full md:w-1/2 h-screen md:h-1/2 text-black rounded"
            > 
            Congratulations you have won <br />
            {prize} <br />
            <a href="">Claim</a>
                <Snowfall color="black"/>
            </div>
        </div> }
      </div>
    </div>
  );
};

export default Circle;
