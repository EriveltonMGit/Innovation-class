"use client";
import Link from "next/link";
import "./drop.one.css";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";
import { useState } from "react";
import { departamentosMock } from "../drop-one/categorias";

function One() {
  const [selectedDepIndex, setSelectedDepIndex] = useState<number>(0);

  return (
    <section className="drop_one_container_">
      {/* Menu lateral com os departamentos */}
      <main className="sub_menu_drop_one">
        {departamentosMock.map((dep, index) => (
          <Link
            href={dep.rota}
            key={index}
            className={`dep-item ${selectedDepIndex === index ? "selected" : ""}`}
            onMouseEnter={() => setSelectedDepIndex(index)}
            onClick={(e) => {
              e.preventDefault();
              setSelectedDepIndex(index);
            }}
          >
            {dep.nome}
            <RightOutlined style={{ marginLeft: "8px" }} />
          </Link>
        ))}
      </main>

      {/* Subcategorias em 3 colunas */}
      <div className="sub_categories_wrapper" key={selectedDepIndex}>
        {departamentosMock[selectedDepIndex].categorias &&
          Array.from({ length: 3 }).map((_, colIndex) => (
            <div key={colIndex} className="sub_categories">
              {departamentosMock[selectedDepIndex].categorias
                .slice(colIndex * 9, colIndex * 9 + 9)
                .map((categoria, i) => (
                  <Link href={categoria.rota} key={i} className="categoria-link">
                    {categoria.nome}
                  </Link>
                ))}
            </div>
          ))}
      </div>

      {/* Imagem com chamada para ação */}
      <div className="container_img_categories_">
        <Image
          src="/img/dropdown/img_1.webp"
          alt="Imagem de categoria"
          width={106}
          height={50}
         
        />
        <div className="linear-gradient"></div>
        <div className="content_img_drop">
          <h3>Confira os Produtos Que acabaram de chegar</h3>
          <button>VER TODOS</button>
        </div>
      </div>
    </section>
  );
}

export default One;
