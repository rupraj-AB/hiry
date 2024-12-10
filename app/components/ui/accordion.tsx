import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type AccordionProps = {
  header: React.ReactNode;
  content: React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border rounded-xl overflow-hidden">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-transparent"
        onClick={toggleAccordion}
      >
        <h3 className="text-neutral-black">{header}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6" />
        ) : (
          <ChevronDown className="w-6 h-6" />
        )}
      </div>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: `${height}px`,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div ref={contentRef} className="p-4 pt-0">
          {content}
        </div>
      </div>
    </div>
  );
};

export default Accordion;