"use client";

import clsx from "clsx";
import { useContext } from "react";
import { AccordionContext } from "./AccordionContex";

function Panel({ title, children, index }) {

  const { activeIndex, onOpen } = useContext(AccordionContext);
  const toggle = () => onOpen(index);

  let isOpen = activeIndex === index;

  return (
    <div
      className={
        "p-4 border-t border-t-gray-300 flex flex-col justify-center items-start"
      }
    >
      <h2 className={"text-2xl font-semibold mb-2"}>{title}</h2>
      <div
        className={clsx({
          hidden: !isOpen,
          "mt-2": isOpen,
        })}
      >
        {children}
      </div>
      {!isOpen && (
        <button
          className={"mt-2 border border-blue-500 rounded px-4 py-2 text-blue-500 hover:bg-blue-500 hover:text-white transition-colors"}
          onClick={() => toggle()}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default function Accordion() {

  return (
    <div className={"flex flex-col border border-black rounded"}>
      <Panel title={"Section 1"} index={1}>
        Hello
      </Panel>
      <Panel title={"Section 2"} index={2}>
        My name is
      </Panel>
      <Panel title={"Section 3"} index={3}>
        Dennis
      </Panel>
    </div>
  );
}
