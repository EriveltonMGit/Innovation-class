"use client";
import "./header.css";
import Image from "next/image";
import { Input } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import Categories from "../category/categories";
// topo do Header.tsx
import { useCartStore } from "../../zustand/cartStore";

function Header() {
  const [searchValue, setSearchValue] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const inputRef = useRef(null); // Referência para a área de input e mensagem

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      setSearchMessage(`Você buscou por: '${searchValue}'`);
    } else {
      setSearchMessage("");
    }
  };

  // Detectar clique fora do input
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !(inputRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setSearchMessage("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Área de ofertas */}
      <main className="sale_">
        <div className="text-sale_">
          <p>
            Ganhe <span>R$10,00</span> de desconto no seu primeiro pedido.
            Utilize o cupom DESCONTO10
          </p>
        </div>
      </main>

      <section className="container_header">
        {/* Área logo + input pesquisa + cadastro + carrinho */}
        <main className="container_area_register_">
          {/* logo */}
          <div className="logo_">
            <Image
              src="/img/icons/Grupo-21089.webp"
              alt="Logo do site"
              width={200}
              height={100}
              priority
            />
          </div>

          {/* input de pesquisa */}
          <div className="area_input" ref={inputRef}>
            <Input
              placeholder="Digite aqui o que você procura..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              suffix={
                <SearchOutlined
                  onClick={handleSearch}
                  style={{ cursor: "pointer" }}
                />
              }
              allowClear
            />
            {/* Mensagem de busca */}
            {searchMessage && <p className="search-message">{searchMessage}</p>}
          </div>

          {/* Área registro + carrinho */}
          <div className="area_register">
            <div className="primery-group">
              <Image
                src="/img/icons/Grupo-19210.webp"
                alt="Logo do site"
                width={200}
                height={100}
                priority
              />
              <p>Olá, Nome cliente!</p>
            </div>
            <div className="two-group">
              <div style={{ position: "relative" }}>
                <ShoppingCartOutlined style={{ fontSize: "24px" }} />
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    background: "var(--bg-sale)",
                    color: "white",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {useCartStore((state) => state.getItemCount())}
                </span>
                <span className="cart-count">
                  {useCartStore((state) => state.getItemCount())}
                </span>
              </div>
            </div>
          </div>
        </main>

        {/* Área menu de Categorias */}
        <main className="container_area_category">
          <Categories />
        </main>
      </section>
    </>
  );
}

export default Header;
