/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import "./menuDevice.css";

type MenuDeviceProps = {
  onClose: () => void;
};

export default function MenuDevice({ onClose }: MenuDeviceProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que o componente está montado
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10);
    
    document.body.style.overflow = 'hidden';
    
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setIsVisible(false);
    
    // Delay para permitir a animação terminar antes de remover o componente
    setTimeout(() => {
      onClose();
    }, 300);
  };

  return (
    <>
      <div 
        className={`container_menu_device ${isClosing ? 'closing' : 'open'}`}
      >
        <div className="menu-header">
          <button className="close-btn" onClick={handleClose}>
            ×
          </button>
        </div>
        
        <div className="menu-content">
          {/* Conteúdo do menu */}
          <img src="/img/icons/Grupo-21089.webp" alt="" />
          <ul>
            <div>
            <h3>Departamaneto</h3>
            <li>Categorias</li>
            <li>Categorias</li>
            <li>Categorias</li>
            <li>Categorias</li>
            <li>Categorias</li>
          
            </div>
            <div>
            <h3>Departamaneto</h3>
            <li>Categorias</li>
            <li>Categorias</li>
            <li>Categorias</li>
            <li>Categorias</li>
            <li>Categorias</li>
            
            </div>
          </ul>
        </div>
      </div>
      
      <div 
        className={`menu-overlay ${isVisible && !isClosing ? 'active' : ''}`}
        onClick={handleClose}
      />
    </>
  );
}