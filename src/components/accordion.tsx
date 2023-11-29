import React, { useState } from "react";

type clickEvent = (event: React.MouseEvent) => void;
type itemClickEvent = (itemIndex: number) => void;

interface AccordionItemProps {
  label: string;
  isCollapsed: boolean;
  handleClick: clickEvent;
  children: React.ReactNode;
}

interface AccordionProps {
  defaultIndex: number;
  onItemClick: itemClickEvent;
  children: React.ReactNode;
}

/**
 * @dev TS函数传参方式： 
 * 1、const AccordionItem = ({label, isCollapsed, handleClick, children} : AccordionItemProps)
 * 2、const AccordionItem: React.FC<AccordionItemProps> = ({label, isCollapsed, handleClick, children})
 */
export const AccordionItem = ({label, isCollapsed, handleClick, children} : AccordionItemProps) => {
  return (
    <>
      <button className="accordion-button" onClick={handleClick}>
        {label}
      </button>
      <div
        className={`accordion-item ${isCollapsed ? 'collapsed' : 'expanded'}`}
        aria-expanded={isCollapsed}
      >
        {children}
      </div>
    </>
  )
}

export const Accordion = ({ defaultIndex, onItemClick, children }: AccordionProps) => {
  const [bindIndex, setBindIndex] = useState(defaultIndex);

  const changeItem = (itemIndex: number) => {
    if (typeof onItemClick === 'function') {
      onItemClick(itemIndex);
    }
    if (itemIndex !== bindIndex) {
      setBindIndex(itemIndex);
    }
  }

  const items = Array.isArray(children) ? children.filter(item => item.type.name === 'AccordionItem') : '';

  return (
    <>
    </>
  )
}