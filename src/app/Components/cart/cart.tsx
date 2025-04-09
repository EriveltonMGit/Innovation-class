"use client";

import { useEffect, useRef } from "react";
import { useCartStore } from "@/app/zustand/cartStore";
import { Produto } from "../../types/produto";
import "./cart.css";
import Image from "next/image";
import toast from "react-hot-toast";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  const cartItems = useCartStore((state) => state.cartItems);
  const setCartItems = useCartStore((state) => state.setCartItems);
  const cartRef = useRef<HTMLDivElement>(null);

  // Buscar produtos ao abrir o carrinho
  useEffect(() => {
    fetch("http://localhost:3001/produtos")
      .then((res) => res.json())
      .then((data: Produto[]) => {
        setCartItems(data);
      })
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, [setCartItems]);

  // Fechar carrinho ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const handleGoToBag = () => {
    toast.success("🛠️ Funcionalidade em desenvolvimento.", {
      style: {
        fontSize: "14px",
        maxWidth: "400px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    });
  };

  const handleRemove = async (id: number) => {
    try {
      const response = await fetch(`http://localhost:3001/produtos/${id}`, {
        method: "DELETE",
      });
      toast.error("🛠️ Produto removido com sucesso!", {
        style: {
          fontSize: "14px",
          maxWidth: "400px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      });
      if (!response.ok) {
        throw new Error("Erro na resposta da API");
      }

      const updatedResponse = await fetch("http://localhost:3001/produtos");
      const updatedItems: Produto[] = await updatedResponse.json();
      setCartItems(updatedItems);
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  return (
    <div ref={cartRef} className="cart-container">
      <h4 className="cart-title">🛍️ Carrinho de Compras</h4>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item: Produto) => (
              <li key={item.id} className="cart-item">
                <Image
                  src={item.img}
                  alt={item.descricao}
                  width={60}
                  height={60}
                  className="cart-image"
                />
                <div className="cart-details">
                  <strong>{item.descricao}</strong>
                  <span>R$ {item.precoAtual.toFixed(2)}</span>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => handleRemove(item.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
          <button className="go-to-bag-button" onClick={handleGoToBag}>
            Ir para sacola
          </button>
        </>
      )}
    </div>
  );
}
