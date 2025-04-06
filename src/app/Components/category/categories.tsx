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

  const dropdownComponents = [
    <One key="one" />,
    <Two key="two-1" />,
    <Two key="two-2" />,
    <Two key="two-3" />,
    <Two key="two-4" />,
    <Two key="two-5" />,
    <Two key="two-6" />,
    <Two key="two-7" />,
    <Two key="two-8" />,
  ];

  return (
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
  );
}

export default Categories;
