"use client";
import Link from "next/link";
import "./drop.two.css";
import Image from "next/image";
import { useState } from "react";
import { departamentosMockTwo } from "../drop-two/categoriasTwo";

function Two() {
  const [selectedDepIndex] = useState<number>(0); // seleciona o primeiro departamento fixamente

  return (
    <section className="drop_two_container">
      {/* Subcategorias em 3 colunas */}
      <div className="container_sub-two">
      <h3>Departamento</h3>
      <div className="sub_categories_wrapper_two" key={selectedDepIndex}>
       
        {departamentosMockTwo[selectedDepIndex].categorias &&
          Array.from({ length: 3 }).map((_, colIndex) => (
            <div key={colIndex} className="sub_categories_two">
              {departamentosMockTwo[selectedDepIndex].categorias
                .slice(colIndex * 9, colIndex * 9 + 9)
                .map((categoria, i) => (
                  <Link href={categoria.rota} key={i} className="categoria-link-two">
                    {categoria.nome}
                  </Link>
                ))}
            </div>
          ))}
      </div>
      </div>

      {/* Imagem com chamada para ação */}
      <div className="container_img_categories_two">
        <Image
          src="/img/dropdown/img_1.webp"
          alt="Imagem de categoria"
          width={236}
          height={298}
          style={{
            borderRadius: "10px",
            objectFit: "cover",
          }}
        />
        <div className="linear-gradient-two"></div>
        <div className="content_img_drop_two">
          <h3>Confira os Produtos Que acabaram de chegar</h3>
          <button>VER TODOS</button>
        </div>
      </div>
    </section>
  );
}

export default Two;
