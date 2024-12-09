import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionProps = {
  header: React.ReactNode;
  content: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-xl">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-transparent "
        onClick={toggleAccordion}
      >
        <h3 className="fs-550-16 text-neutral-black">{header}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <ChevronDown className="w-6 h-6" />
        )}
      </div>
      {isOpen && <div className="p-4 pt-0">{content}</div>}
    </div>
  );
};

export default Accordion;
