"use client";

// IMPORTAÇÃO CSS
import "./area-register.css";
import { Input } from "antd";
import toast from "react-hot-toast";
function AreaRegister() {

  const handleClick = () => {
    toast.success("Funcionalidade em desenvolvimento");
  };
  return (
    <section className="container_areaa_register" data-aos="fade-up"
    data-aos-duration="2000">
      <div className="title_register">
        <h1>Cadastre-se na nossa</h1>
        <span>newsletter</span>
      </div>

      <main>
        <div className="form_area_register">
          <div className="area_input_register">
          <Input placeholder="Digite seu nome" />
          <Input type="email" placeholder="Digite seu e-mail" />
          </div>

          <div className="checkbox_area">
            <input type="checkbox" name="" id="check" />
            <p> Estou de acordo com a política de privacidade</p>
          </div>
          <button onClick={handleClick}>Cadastrar</button>
        </div>
      </main>
    </section>
  );
}

export default AreaRegister;
