import React, { useState } from 'react';


interface AccordionProps {
    title: string;
    content: string[];
  }

  const Accordion: React.FC<AccordionProps> = ({ title, content })  => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="flex justify-between bg-gray-800 p-2 mb-2 rounded-2xl" onClick={() => setIsActive(!isActive)}>
        <div className='text-xl font-bold'>{title}</div>
        <div className='text-xl font-bold'>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content.map((item) => (
        <p className='m-2 rounded-2xl cursor-pointer text-black p-2  backdrop-blur-2xl'>✩ {item}</p>
      ))}</div>}
    </div>
  );
};

export default Accordion;