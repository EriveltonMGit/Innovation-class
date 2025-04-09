"use client";

import "./header.css";
import Image from "next/image";
import { Input } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import Categories from "../category/categories";
import { useCartStore } from "../../zustand/cartStore";
import Cart from "../cart/cart";

type HeaderProps = {
  onToggleMenu: () => void;
};

function Header({ onToggleMenu }: HeaderProps) {
  const [searchValue, setSearchValue] = useState("");
  const [searchMessage, setSearchMessage] = useState("");
  const inputRef = useRef(null);

  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);

  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible((prev) => !prev);
  };

  const handleSearch = () => {
    if (searchValue.trim() !== "") {
      setSearchMessage(`Você buscou por: '${searchValue}'`);
    } else {
      setSearchMessage("");
    }
  };

  // Ocultar mensagem ao clicar fora do input
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

  // Carregar produtos do carrinho ao iniciar
  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((err) => console.error("Erro ao carregar o carrinho:", err));
  }, [setCartItems]);

  return (
    <>
      <main className="sale_">
        <div className="text-sale_">
          <p>
            Ganhe <span>R$10,00</span> de desconto no seu primeiro pedido.
            Utilize o cupom DESCONTO10
          </p>
        </div>
      </main>

      <section className="container_header">
        <main className="container_area_register_">
          <div className="logo_">
            <Image
              src="/img/icons/Grupo-21089.webp"
              alt="Logo do site"
              width={200}
              height={100}
              priority
            />
          </div>

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
            {searchMessage && (
              <p className="search-message">{searchMessage}</p>
            )}
          </div>

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

            <div className="two-group" style={{ position: "relative" }}>
              <ShoppingCartOutlined
                style={{ fontSize: "24px", cursor: "pointer" }}
                onClick={toggleCart}
              />
              {cartItems.length > 0 && (
                <span
                  style={{
                    position: "absolute",
                    top: "-8px",
                    right: "-10px",
                    background: "var(--bg-sale)",
                    color: "white",
                    borderRadius: "50%",
                    padding: "2px 6px",
                    fontSize: "12px",
                  }}
                >
                  {cartItems.length}
                </span>
              )}

              {isCartVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "0",
                    zIndex: 2000,
                  }}
                >
                  <Cart onClose={() => setIsCartVisible(false)} />
                </div>
              )}
            </div>
          </div>
        </main>

        <main className="container_area_category">
          <Categories onToggleMenu={onToggleMenu} />
        </main>
      </section>
    </>
  );
}

export default Header;
