"use client";

import { useState } from "react";
import Link from "next/link";
import "./categories.css";
import One from "./drop-one/drop.one";
import Two from "./drop-two/drop.two";
import { MenuOutlined } from "@ant-design/icons";

type CategoriesProps = {
  onToggleMenu: () => void;
};

function Categories({ onToggleMenu }: CategoriesProps) {
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

            {showDropdownIndex === index && dropdownComponents[index]}
          </li>
        ))}
      </ul>

    
    </section>

    <button className="btn_hamburguer" onClick={onToggleMenu}>
        <MenuOutlined />
      </button>
   
   </>
  );
}

export default Categories;