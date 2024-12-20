import React, { useState } from "react";
import Snowfall from "react-snowfall";
import getContact from "~/lib/contact";

const sectionsData = [
  {
    color: "rgb(255, 99, 132)",
    text: "Prize 1",
    prize: "20K Off on Certificate in Early Childhood Care training course",
  },
  {
    color: "rgb(255, 205, 86)",
    text: "Prize 2",
    prize: "Tuition fee and Study Material free",
  },
  {
    color: "rgb(75, 192, 192)",
    text: "Prize 3",
    prize: "10K Off on all courses",
  },
  {
    color: "rgb(153, 102, 255)",
    text: "Prize 4",
    prize: "Better luck Next time",
  },
  {
    color: "rgb(255, 159, 64)",
    text: "Prize 5",
    prize: "25K off on CNTT Course",
  },
  {
    color: "rgb(255, 182, 193)",
    text: "Prize 6",
    prize: "7499Rs for ICCM Course",
  },
  {
    color: "rgb(34, 193, 195)",
    text: "Prize 7",
    prize:
      "Certificate in early childhood care at just Rs 50K with guaranteed job",
  },
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

  const number = getContact()

  return (
    <div>
      <audio src="/merry_christmas.mp3" autoPlay></audio>
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
              transform: `translate(-50%, -50%) rotate(${
                angle * index
              }deg) translateY(-130%)`,
            }}
          >
            <div className="transform -rotate-90 flex justify-center items-center pb-14">
              {section.text}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center text-lg font-bold">
        {prize && (
          <div className="fixed bg-black bg-opacity-60 w-screen h-screen top-0 left-0 flex justify-center items-center z-20">
            <div className="bg-white w-11/12 md:w-1/2 h-auto md:h-auto p-8 text-black rounded-lg shadow-lg relative flex justify-center flex-col items-center">
              <img src="/Logo.png" alt="logo" height={80} width={80} />
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 mb-4">
                🎉 Congratulations! 🎉
              </h2>
              <p className="text-lg md:text-xl text-gray-600 mb-6">
                You have won:{" "}
                <span className="text-rose-500 font-bold">{prize}</span>
              </p>
              <div className="flex justify-around gap-4">
              <a
                href=""
                className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-200"
              >
                Claim Your Prize
              </a>
              <a href={`https://wa.me/${number}?text=Hi! 🎉 \n I’m excited to share that I won a prize from your lucky draw! 🏆 \n Thank you so much for the opportunity. Please let me know how I can claim it. \n Looking forward to hearing from you!`} className="inline-block bg-black hover:bg-rose-600 text-white font-medium px-6 py-3 rounded-lg shadow transition duration-200">Whatsapp Us</a>
              </div>
              <Snowfall color="blue" snowflakeCount={30} />
              <a className="text-blue-500 underline mt-2" href="https://allindiaprivateschools.org">Learn More</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Circle;
