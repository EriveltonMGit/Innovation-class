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
        <div className="carousel-slide slide_one " >
        <div>
          <div><img src="/img/carousel/Rectangle 10.png" alt="" /></div>
          <div><img src="/img/carousel/Grupo-4806.webp" alt="" /></div>
        </div>
        </div>
        <div className="carousel-slide slide_one " >
        <div>
          <div><img src="/img/carousel/Rectangle 10.png" alt="" /></div>
          <div><img src="/img/carousel/Grupo-4806.webp" alt="" /></div>
        </div>
        </div>
        <div className="carousel-slide slide_one " >
        <div>
          <div><img src="/img/carousel/Rectangle 10.png" alt="" /></div>
          <div><img src="/img/carousel/Grupo-4806.webp" alt="" /></div>
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
