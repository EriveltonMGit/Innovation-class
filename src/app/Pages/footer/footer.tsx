/* eslint-disable @next/next/no-img-element */
// IMPORT CSS
import "./footer.css";

function Footer() {
  return (
    <>
      <section className="footer_">
        <main className="content_footer_one">
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
          <div >
            <h4>Institucional</h4>
            <a href="">Sobre Nós</a>
            <a href="">Nossas Lojas</a>
            <a href="">Privacidade e Segurança</a>
            <a href="">Termos e Condiçoes</a>
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
            <p>Segunda a Sábado: 07h00 às 23h00
            Domingos e Feriados:  07h00 às 21h00</p>
            
          </div>

          </div>
          <div className="content_icons">
            <img src="/img/icons/União 34.png" alt="" />
            <img src="/img/icons/União 32.png" alt="" />
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
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
          </div>
          <div></div>
        </main>
      </section>
    </>
  );
}

export default Footer;
