// IMPORTAÇÃO CSS
import "./area-register.css";
import { Input } from "antd";

function AreaRegister() {
  return (
    <section className="container_areaa_register">
      <div className="title_register">
        <h1>Cadastre-se na nossa</h1>
        <span>newsletter</span>
      </div>

      <main>
        <div className="form_area_register">
          <Input placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu e-mail" />

          <div className="checkbox_area">
            <input type="checkbox" name="" id="check" />
            <p> Estou de acordo com a política de privacidade</p>
          </div>
          <button type="submit">Cadastrar</button>
        </div>
      </main>
    </section>
  );
}

export default AreaRegister;
