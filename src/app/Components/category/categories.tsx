"use client";

import { useState } from "react";
import Link from "next/link";
import "./categories.css";
import One from "./drop-one/drop.one";
import { MenuOutlined } from "@ant-design/icons"; // ÍCONE DE MENU

function Categories() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = (index: number) => {
    if (index === 0) setShowDropdown(true);
  };

  const handleMouseLeave = (index: number) => {
    if (index === 0) setShowDropdown(false);
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

  return (
    <>
      <section className="container_categories_">
        <ul>
          {categorias.map((categoria, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link href="">
                {index === 0 && (
                  <MenuOutlined />
                )}
                {categoria}
              </Link>

              {/* Exibe apenas se for o primeiro e o mouse estiver sobre ele */}
              {index === 0 && showDropdown && <One />}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Categories;
