// IMPORTAÇÃO CSS
import Link from "next/link";
import "./drop.one.css";
import Image from "next/image";
import { RightOutlined } from "@ant-design/icons";

function One() {
  const departamentos = [
    "Departamentos",
    "Departamentos",
    "Departamentos",
    "Departamentos",
    "Departamentos",
    "Departamentos",
    "Departamentos",
    "Departamentos",
    "Departamentos",
  ];

  return (
    <>
      <section className="drop_onde_container_">
        {/* Área sub menu de departamentos */}
        <main className="sub_menu_drop_one">
          {departamentos.map((dep, index) => (
            <Link href="" key={index} className="dep-item">
              {dep}
              <RightOutlined style={{ marginLeft: "8px" }} />
            </Link>
          ))}
        </main>
        {/* Categorias 1  */}
        <div className="sub_categories">
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
        </div>
        {/* Categorias 2  */}
        <div className="sub_categories">
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
        </div>
        {/* Categorias 3  */}
        <div className="sub_categories">
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
          <Link href={""}>Categoria</Link>
        </div>
        {/* Área imagem produtods categorias */}
        <div className="container_img_categories_">
          <Image
            src="/img/dropdown/img_1.webp"
            alt="Imagem de categoria"
            width={236}
            height={298}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div>
      </section>
    </>
  );
}

export default One;
