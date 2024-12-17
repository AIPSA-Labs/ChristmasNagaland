import React, { useState } from "react";

const sectionsData = [
  { color: "rgb(255, 99, 132)", text: "Prize 1" },
  { color: "rgb(54, 162, 235)", text: "Prize 2" },
  { color: "rgb(255, 205, 86)", text: "Prize 3" },
  { color: "rgb(75, 192, 192)", text: "Prize 4" },
  { color: "rgb(153, 102, 255)", text: "Prize 5" },
  { color: "rgb(255, 159, 64)", text: "Prize 6" },
  { color: "rgb(255, 182, 193)", text: "Prize 8" },
  { color: "rgb(34, 193, 195)", text: "Prize 9" },
  { color: "rgb(253, 187, 45)", text: "Prize 10" },
  { color: "rgb(252, 70, 107)", text: "Prize 11" },
  { color: "rgb(55, 148, 179)", text: "Prize 12" },
  { color: "rgb(131, 58, 180)", text: "Prize 13" },
  { color: "rgb(245, 114, 68)", text: "Prize 14" },
  { color: "rgb(13, 94, 131)", text: "Prize 15" },
  { color: "rgb(0, 204, 255)", text: "Prize 16" },
  { color: "rgb(223, 248, 250)", text: "Prize 17" },
  { color: "rgb(101, 67, 33)", text: "Prize 18" },
  { color: "rgb(255, 102, 204)", text: "Prize 19" },
  { color: "rgb(82, 102, 255)", text: "Prize 20" },
  { color: "rgb(105, 204, 205)", text: "Prize 21" },
  { color: "rgb(12, 103, 84)", text: "Prize 22" },
  { color: "rgb(250, 168, 82)", text: "Prize 23" },
  { color: "rgb(56, 164, 56)", text: "Prize 24" },
];

interface CircleProps {
  sections: number;
}

const Circle: React.FC<CircleProps> = ({ sections }) => {
  const sectionCount = Math.min(sections, 24);
  const sectionData = sectionsData.slice(0, sectionCount);
  const angle = 360 / sectionCount;
  const [rotation, setRotation] = useState<number>(0);
  const randomAngle = Math.floor(Math.random() * 360);

  const handleClick = () => {
    setRotation(0)
    document.getElementById('cic')?.classList.add('animate-spin')
    document.getElementById('arrow')?.classList.add('shake-icon')
    setTimeout(() => {
    document.getElementById('arrow')?.classList.remove('shake-icon')
    document.getElementById('cic')?.classList.remove('animate-spin')
      setRotation(randomAngle)
    }, 3000); 
  };

  return (
    <div
    id="cic"
      className="relative w-[80dvh] h-[80dvh] rounded-full border-2 overflow-hidden cursor-pointer"
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
            transform: `translate(-50%, -50%) rotate(${angle * index}deg) translateY(-130%)`, // Move the text to the outer layer
          }}
        >
          <div className="transform -rotate-90 flex justify-center items-center pb-14">
            {section.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Circle;
