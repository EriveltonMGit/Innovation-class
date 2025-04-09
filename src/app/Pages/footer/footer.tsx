/* eslint-disable @next/next/no-img-element */
'use client'
import React, { useState } from "react";
import { Accordion } from "./Accordion";
import "./footer.css";

function Footer() {
  // Estado para controlar qual accordion está aberto. Pode ser um id ou nome.
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  // Função que alterna o accordion clicado
  const toggleAccordion = (id: string) => {
    if (openAccordion === id) {
      // Se o accordion clicado já estiver aberto, fecha-o
      setOpenAccordion(null);
    } else {
      // Abre o accordion clicado e fecha os demais
      setOpenAccordion(id);
    }
  };

  return (
    <section className="footer_" data-aos="fade-up"
    data-aos-duration="2000">
      {/* DESKTOP (versão padrão) */}
      <main className="content_footer_one">
        <div className="contet_links">
          <div>
            <img src="/img/icons/Grupo-21089.webp" alt="Logo" />
            <span className="icons_social">
              <a href=""><img src="/img/icons/instagram.png" alt="Instagram" /></a>
              <a href=""><img src="/img/icons/facebook.png" alt="Facebook" /></a>
              <a href=""><img src="/img/icons/Union 632.png" alt="Icon" /></a>
              <a href=""><img src="/img/icons/logo-tiktok-svgrepo-com.png" alt="TikTok" /></a>
            </span>
          </div>
          <div>
            <h4>Institucional</h4>
            <a href="">Sobre Nós</a>
            <a href="">Nossas Lojas</a>
            <a href="">Privacidade e Segurança</a>
            <a href="">Termos e Condições</a>
          </div>
          <div>
            <h4>Central de Ajuda</h4>
            <a href="">Fale Conosco</a>
            <a href="">Frete e Entrega</a>
            <a href="">Trocas e Devoluções</a>
            <a href="">Formas de Pagamento</a>
            <a href="">FAQ</a>
          </div>
          <div>
            <h4>Atendimento</h4>
            <p>Telefone (00) 1234-5678</p>
            <p>E-mail: exemplo@exemplo.com.br</p>
            <h4>Horário de Atendimento:</h4>
            <p>
              Segunda a Sábado: 07h00 às 23h00 <br />
              Domingos e Feriados: 07h00 às 21h00
            </p>
          </div>
        </div>

        {/* MOBILE (versão Accordion) */}
        <div className="content_links_mobile">
          <Accordion 
            title="Institucional" 
            isOpen={openAccordion === 'institucional'} 
            onToggle={() => toggleAccordion('institucional')}
          >
            <a href="">Sobre Nós</a>
            <a href="">Nossas Lojas</a>
            <a href="">Privacidade e Segurança</a>
            <a href="">Termos e Condições</a>
          </Accordion>

          <Accordion 
            title="Central de Ajuda"
            isOpen={openAccordion === 'ajuda'}
            onToggle={() => toggleAccordion('ajuda')}
          >
            <a href="">Fale Conosco</a>
            <a href="">Frete e Entrega</a>
            <a href="">Trocas e Devoluções</a>
            <a href="">Formas de Pagamento</a>
            <a href="">FAQ</a>
          </Accordion>

          <Accordion 
            title="Atendimento"
            isOpen={openAccordion === 'atendimento'}
            onToggle={() => toggleAccordion('atendimento')}
          >
            <p>Telefone (00) 1234-5678</p>
            <p>E-mail: exemplo@exemplo.com.br</p>
            <h4>Horário de Atendimento:</h4>
            <p>
              Segunda a Sábado: 07h00 às 23h00 <br />
              Domingos e Feriados: 07h00 às 21h00
            </p>
          </Accordion>
        </div>

        <div className="content_icons">
          <img src="/img/icons/amex.png" alt="Amex" />
          <img src="/img/icons/uniao.png" alt="União" />
          <img src="/img/icons/visa.png" alt="Visa" />
          <img src="/img/icons/hipercard.png" alt="Hipercard" />
          <img src="/img/icons/b.png" alt="B" />
          <img src="/img/icons/c@2x.jpg" alt="C" />
          <img src="/img/icons/União 38.png" alt="União 38" />
          <img src="/img/icons/União 39.png" alt="União 39" />
          <img src="/img/icons/icon-boleto___ffe2ba684569d29f8e546b10457c48f8.png" alt="Boleto" />
        </div>
      </main>

      <main className="content_footer_two">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
            erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci.
          </p>
        </div>
        <div></div>
      </main>
    </section>
  );
}

export default Footer;
