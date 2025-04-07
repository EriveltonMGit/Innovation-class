/* eslint-disable @next/next/no-img-element */
"use client";
import { useRef } from "react";
import "./cardProdutucsTwo.css";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
function CardProductsTwo() {
  const containerRef = useRef<HTMLDivElement>(null);

  const produtos = [
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
  ];

  // Rola uma quantidade igual à largura de um card + gap (238 + 17 px)
  const CARD_WIDTH = 238;
  const GAP = 17;
  const SCROLL_AMOUNT = (CARD_WIDTH + GAP) * 3;

  const scrollLeft = () => {
    containerRef.current?.scrollBy({
      left: -SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current?.scrollBy({ left: SCROLL_AMOUNT, behavior: "smooth" });
  };

  return (
    <section className="container_cards_two">
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

      <div className="cards_grid" ref={containerRef}>
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
              onClick={() => console.log("Adicionado:", produto)}
            >
              Comprar
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CardProductsTwo;
