'use client'
import React from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="accordion">
      <div className="accordion-header" onClick={onToggle}>
        <h4>{title}</h4>
        <span
          className="accordion-icon"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          ˅
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}
