'use client';
import './accordion.css'
import React, { useRef, useEffect, useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export function Accordion({ title, children, isOpen, onToggle }: AccordionProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [maxHeight, setMaxHeight] = useState('0px');

  useEffect(() => {
    if (contentRef.current) {
      setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px');
    }
  }, [isOpen]);

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
      <div
        ref={contentRef}
        className={`accordion-content-wrapper ${isOpen ? 'open' : ''}`}
        style={{ maxHeight }}
      >
        <div className="accordion-content">
          {children}
        </div>
      </div>
    </div>
  );
}
