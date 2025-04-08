/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import "./cardProdutucs.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import { message } from "antd";
// importação zustand
import { useCartStore } from "../../zustand/cartStore";

function CardProducts() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const addToCart = useCartStore((state) => state.addItem);

  const CARD_WIDTH = 438;
  const GAP = 17;
  const CARDS_PER_VIEW = 3;
  const SCROLL_AMOUNT = (CARD_WIDTH + GAP) * CARDS_PER_VIEW;
  const produtos = useMemo(
    () => [
      {
        id: 1,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "Ou em até 10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 2,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 3,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 4,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 5,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 6,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 7,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 8,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 9,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 10,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 11,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 12,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 13,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 14,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
      {
        id: 15,
        estado: "Novo",
        img: "/img/cards/img.png",
        descricao: "Lorem ipsum...",
        precoAnterior: 100,
        precoAtual: 79.9,
        qtdVezes: "10x de R$ 7,90",
        desconto: "10% OFF",
      },
    ],
    []
  );

  // Rola uma quantidade igual à largura de um card + gap (438 + 17 px)
  useEffect(() => {
    const total = Math.ceil(produtos.length / CARDS_PER_VIEW);
    setTotalSlides(total);
  }, [produtos]);

  const scrollLeft = () => {
    if (currentSlide > 0) {
      const newSlide = currentSlide - 1;
      containerRef.current?.scrollTo({
        left: newSlide * SCROLL_AMOUNT,
        behavior: "smooth",
      });
      setCurrentSlide(newSlide);
    }
  };
  const scrollRight = () => {
    if (currentSlide < totalSlides - 1) {
      const newSlide = currentSlide + 1;
      containerRef.current?.scrollTo({
        left: newSlide * SCROLL_AMOUNT,
        behavior: "smooth",
      });
      setCurrentSlide(newSlide);
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollLeft = containerRef.current.scrollLeft;
    const index = Math.round(scrollLeft / SCROLL_AMOUNT);
    setCurrentSlide(index);
  };

  return (
    <section className="container_cards">
      <div className="cards_title_area">
        <h2>Lançamentos</h2>
        <span>Ver mais</span>
      </div>

      <div className="scroll-buttons">
        <button onClick={scrollLeft} className="scroll-btn">
          <ArrowLeftOutlined />
        </button>
        <button onClick={scrollRight} className="scroll-btn">
          <ArrowRightOutlined />
        </button>
      </div>

      <div className="cards_grid" ref={containerRef} onScroll={handleScroll}>
        {produtos.map((produto) => (
          <div key={produto.id} className="card_products">
            <div className="card_image">
              <div className="estado">
                <p>{produto.estado}</p>
              </div>
              <img src={produto.img} alt="Imagem do produto" />
            </div>

            <div className="precos">
              <h3 className="descricao">{produto.descricao}</h3>
              <div className="area_price">
                <div className="desconto">
                  <p>R$ {produto.precoAnterior}</p>
                  <span>{produto.desconto}</span>
                </div>
                <h3>R$ {produto.precoAtual.toFixed(2)}</h3>
                <h4>{produto.qtdVezes}</h4>
              </div>
            </div>

            <button
              className="btn_add_carrinho"
              onClick={() => {
                addToCart({
                  id: produto.id,
                  nome: produto.descricao,
                  preco: produto.precoAtual,
                });
                message.success({
                  content: "Produto adicionado ao carrinho!",
                  style: {
                    marginTop: '20vh', 
                  },
                  duration: 2,
                });
              }}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>

      {/* Indicadores de slide */}
      <div className="slide-indicators">
        {Array.from({ length: Math.min(totalSlides, 3) }).map((_, i) => (
          <span
            key={i}
            className={`indicator-dot ${i === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
}

export default CardProducts;
