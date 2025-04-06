"use client";

import { useState } from "react";
import Link from "next/link";
import "./categories.css";
import One from "./drop-one/drop.one";
import Two from "./drop-two/drop.two";
import { MenuOutlined } from "@ant-design/icons";

function Categories() {
  const [showDropdownIndex, setShowDropdownIndex] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setShowDropdownIndex(index);
  };

  const handleMouseLeave = () => {
    setShowDropdownIndex(null);
  };

  const categorias = [
    "Todas Categorias",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
    "Departamento",
  ];

  // Array de componentes de dropdown correspondentes
  const dropdownComponents = [
    <One key="one" />,
    <Two key="two" />,
    <Two key="two" />,
    <Two key="two" />,
    <Two key="two" />,
    <Two key="two" />,
    <Two key="two" />,
    <Two key="two" />,
    <Two key="two" />,
   
    
  ];

  return (
    <>
      <section className="container_categories_">
        <ul>
          {categorias.map((categoria, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="">
                {index === 0 && <MenuOutlined />}
                {categoria}
              </Link>

              {/* Exibe o dropdown correspondente ao índice */}
              {showDropdownIndex === index && dropdownComponents[index]}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Categories;
