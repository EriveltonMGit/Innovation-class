// IMPORTAÇÃO DO CSS
import "./header.css";
// IMPORTAÇÃO IMG DO NEXT
import Image from "next/image";
// IMPORTAÇÃO DOS COMPOENTES DO ANTDESING
import { Input } from 'antd';
import { SearchOutlined,ShoppingCartOutlined} from '@ant-design/icons';
// IMPORTAÇÃO COMPONETES 

import Categories from "../category/categories";
function Header() {
  return (
    <>
      {/* Área de ofertas */}
      <main className="sale_">
        <div className="text-sale_">
          <p>
            Ganhe <span>R$10,00</span> de desconto no seu primeiro pedido.
            Utilize o cupom DESCONTO10
          </p>
        </div>
      </main>
      <section className="container_header">
        {/* Área logo + input pesquisa + cadastro + carrinho */}
        <main className="container_area_register_">
            {/* logo */}
          <div className="logo_">
          <Image src="/img/icons/Grupo-21089.webp" alt="Logo do site" width={200} height={100} priority />
          </div>
          {/* input de pesquisa */}
          <div className="area_input">
          <Input placeholder="Digite aqui o que você procura..." suffix={<SearchOutlined />}  allowClear />
          </div>
          {/* Área registro + carrinho */}
          <div className="area_register">
             <div className="primery-group">
             <Image src="/img/icons/Grupo-19210.webp" alt="Logo do site" width={200} height={100} priority /> 
             <p>Olá, Nome cliente!</p>
              
             </div>
             <div className="two-group">
             <ShoppingCartOutlined />
             </div>
          </div>
        </main>
        {/* Área menu de Categorias */}
        <main className="container_area_category">
             <Categories></Categories>
        </main>
      </section>
    </>
  );
}

export default Header;
