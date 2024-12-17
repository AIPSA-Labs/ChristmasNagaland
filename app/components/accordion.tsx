import React, { useState } from "react";

interface AccordionProps {
  title: string;
  content: string[];
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const [link , setLink ] = useState<String>()


  function getFirstLetter(word: string): string {
    if (word.length === 0) return "";
    return word.charAt(0); 
  }

  const handleClick =  (title : string , index : number) =>{
    const letter = getFirstLetter(title);
    const origin = window.location.origin;
    const link = `${origin}/card?c=${letter}${index}&n=`;
    const input = document.getElementById('share-link') as HTMLInputElement
    input.value = link.toLowerCase()
    setIsActive(false)
  }

  return (
    <div className="accordion-item">
      <div
        className="flex justify-between bg-gray-800 p-2 mb-2 rounded-2xl"
        onClick={() => setIsActive(!isActive)}
      >
        <div className="text-xl font-bold">{title}</div>
        <div className="text-xl font-bold">{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className="accordion-content">
          {content.map((item, index) => (
            <p onClick={() => handleClick(title,index + 1)} className="m-2 rounded-2xl cursor-pointer text-black p-2  backdrop-blur-2xl">
              ✩ {item} 
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
