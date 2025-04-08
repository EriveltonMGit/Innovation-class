/* eslint-disable @next/next/no-img-element */

"use client";

import React, { useRef } from "react";
import { Carousel } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import type { CarouselRef } from "antd/es/carousel";
import "./customCarousel.css";

const CustomCarousel: React.FC = () => {
  const carouselRef = useRef<CarouselRef | null>(null);

  const next = () => {
    carouselRef.current?.next();
  };

  const prev = () => {
    carouselRef.current?.prev();
  };

  return (
    <div className="carousel-container">
      <Carousel
        ref={carouselRef}
        dots={true}
        autoplay
        autoplaySpeed={3000}
        effect="scrollx"
      >
        <div className="carousel-slide slide_one ">
          <div>
            <div className="container_img_carousel">
              <img src="/img/carousel/Rectangle 10.png" alt="" />
            </div>
            <div className="container_text_sale_carousel">
              <div>
                <h1 className="titulo-box">SUPERSALE</h1>
                <h3>ITENS SELECIONADOS COM ATÉ</h3>
                <h2>50%OFF</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-slide slide_one ">
          <div>
            <div className="container_img_carousel">
              <img src="/img/carousel/Rectangle 10.png" alt="" />
            </div>
            <div className="container_text_sale_carousel">
              <div>
                <h1 className="titulo-box">SUPERSALE</h1>
                <h3>ITENS SELECIONADOS COM ATÉ</h3>
                <h2>50%OFF</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-slide slide_one ">
          <div>
            <div className="container_img_carousel">
              <img src="/img/carousel/Rectangle 10.png" alt="" />
            </div>
            <div className="container_text_sale_carousel">
              <div>
                <h1 className="titulo-box">SUPERSALE</h1>
                <h3>ITENS SELECIONADOS COM ATÉ</h3>
                <h2>50%OFF</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-slide slide_one ">
          <div>
            <div className="container_img_carousel">
              <img src="/img/carousel/Rectangle 10.png" alt="" />
            </div>
            <div className="container_text_sale_carousel">
              <div>
                <h1 className="titulo-box">SUPERSALE</h1>
                <h3>ITENS SELECIONADOS COM ATÉ</h3>
                <h2>50%OFF</h2>
              </div>
            </div>
          </div>
        </div>
      </Carousel>

      <button className="carousel-button prev-button" onClick={prev}>
        <LeftOutlined />
      </button>

      <button className="carousel-button next-button" onClick={next}>
        <RightOutlined />
      </button>
    </div>
  );
};

export default CustomCarousel;
