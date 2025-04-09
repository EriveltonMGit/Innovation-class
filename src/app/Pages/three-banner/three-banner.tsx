// ;IMPORTAÇÃO CSS
import "./three-banner.css";
import Image from "next/image";

function BannerViewThree() {
  return (
    <>
      <section className="container_banner_three" data-aos="fade-up"
     data-aos-duration="2000">
        <div className="are_img_banner_three">
          <Image
            src="/img/banner-one/Free_Mug_Mockup_2.webp"
            alt="Imagem de categoria"
            width={236}
            height={298}
           
          />
        </div >
        <div className="area_content_banner_three">
          <div >
          <h1>Lorem Ipsum</h1>
            <p>Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim </p>
            <p>Cras dignissim est et pellentesque tincidunt. Praesent bibendum quis velit a aliquam. Ut vestibulum turpis eget mi iaculis ullamcorper. Curabitur nec metus sed tortor sollicitudin porta nec eu enim. Ut fermentum scelerisque tortor mollis volutpat. Mauris iaculis magna nisl, vel porttitor augue placerat et. </p>

          </div>
        </div>
      </section>
    </>
  );
}

export default BannerViewThree;
