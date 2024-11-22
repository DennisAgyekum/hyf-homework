"use client";
import { createContext, useState } from "react";

export const AccordionContext = createContext();

export const AccordionProvider = ({ children }) => {

  const [activeIndex, setActiveIndex] = useState(0);

  const onOpen = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <AccordionContext.Provider value={{ activeIndex, onOpen }}>
      {children}
    </AccordionContext.Provider>
  );
};