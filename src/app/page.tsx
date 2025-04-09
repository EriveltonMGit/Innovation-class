"use client";

import { useState } from "react";
import CardProductsTwo from "./Components/cardsProductsTwo/cardProdutucsTwo";
import Header from "./Components/header/header";
import HomePage from "./Pages/home/home";
import BannerViewONe from "./Pages/one-banner/banner-view";
import BannerViewThree from "./Pages/three-banner/three-banner";
import BannerViewTwo from "./Pages/two-banner/two-banner";
import BannerViewFour from "./Pages/four-banner/four-banner";
import AreaRegister from "./Pages/register/area-register";
import Footer from "./Pages/footer/footer";
import CardProducts from "./Components/cardsProducts/cardProdutucs";
import MenuDevice from "./Components/menuDevice/menudevice";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <section className="container_page">
        <Header onToggleMenu={handleToggleMenu} />
        <HomePage />
        <CardProducts />
        <BannerViewONe />
        <BannerViewTwo />
        <BannerViewThree />
        <CardProductsTwo />
        <BannerViewFour />
        <AreaRegister />
        <Footer />
        
        {menuOpen && (
          <MenuDevice onClose={handleCloseMenu} />
        )}
      </section>
      
      {/* Overlay para quando o menu estiver aberto */}
      {menuOpen && (
        <div 
          className="menu-overlay"
          onClick={handleCloseMenu}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 9999,
          }}
        />
      )}
    </>
  );
}