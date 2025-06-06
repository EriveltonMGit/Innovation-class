/* eslint-disable @next/next/no-img-element */
// IMPORTAÇÃO CSS
import "./two-banner.css";
import Image from "next/image";

function BannerViewTwo() {
  return (
    <>
      <section className="two_banner_container_" data-aos="fade-up"
     data-aos-duration="2000">
        <main className="content_baner">
          <div className="content_banner_two">
            <main>
              <h1>LOREM IPSUM</h1>
              <div>
                <Image
                  src="/img/icons/Circulo-e-Icone.webp"
                  alt="Imagem de categoria"
                  width={36}
                  height={98}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <p>
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{" "}
                </p>
              </div>
              <div>
                <Image
                  src="/img/icons/Circulo-e-Icone.webp"
                  alt="Imagem de categoria"
                  width={36}
                  height={98}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <p>
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{" "}
                </p>
              </div>
              <div>
                <Image
                  src="/img/icons/Circulo-e-Icone.webp"
                  alt="Imagem de categoria"
                  width={36}
                  height={98}
                  style={{
                    borderRadius: "10px",
                    objectFit: "cover",
                  }}
                />
                <p>
                Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.{" "}
                </p>
              </div>
            </main>
          </div>
          <main className="img_banner_two">
            <img src="/img/banner-two/img_1.webp" alt="Imagem de categoria" />
          </main>
        </main>
      </section>
    </>
  );
}

export default BannerViewTwo;
