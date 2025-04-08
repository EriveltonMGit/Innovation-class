/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from "react";
import "./footer.css";

function Footer() {
  return (
    <section className="footer_">
      <main className="content_footer_one">
        {/* DESKTOP (versão padrão) */}
        <div className="contet_links">
          <div>
            <img src="/img/icons/Grupo-21089.webp" alt="" />
            <span className="icons_social">
              <a href=""><img src="/img/icons/instagram.png" alt="" /></a>
              <a href=""><img src="/img/icons/facebook.png" alt="" /></a>
              <a href=""><img src="/img/icons/Union 632.png" alt="" /></a>
              <a href=""><img src="/img/icons/logo-tiktok-svgrepo-com.png" alt="" /></a>
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
          <Accordion title="Institucional">
            <a href="">Sobre Nós</a>
            <a href="">Nossas Lojas</a>
            <a href="">Privacidade e Segurança</a>
            <a href="">Termos e Condições</a>
          </Accordion>

          <Accordion title="Central de Ajuda">
            <a href="">Fale Conosco</a>
            <a href="">Frete e Entrega</a>
            <a href="">Trocas e Devoluções</a>
            <a href="">Formas de Pagamento</a>
            <a href="">FAQ</a>
          </Accordion>

          <Accordion title="Atendimento">
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
          <img src="/img/icons/amex.png" alt="" />
          <img src="/img/icons/uniao.png" alt="" />
          <img src="/img/icons/visa.png" alt="" />
          <img src="/img/icons/hipercard.png" alt="" />
          <img src="/img/icons/b.png" alt="" />
          <img src="/img/icons/c@2x.jpg" alt="" />
          <img src="/img/icons/União 38.png" alt="" />
          <img src="/img/icons/União 39.png" alt="" />
          <img src="/img/icons/icon-boleto___ffe2ba684569d29f8e546b10457c48f8.png" alt="" />
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

function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        <h4>{title}</h4>
        <span className="accordion-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
        ˅
        </span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Footer;
