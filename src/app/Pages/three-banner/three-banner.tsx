// ;IMPORTAÇÃO CSS
import "./three-banner.css";
import Image from "next/image";

function BannerViewThree() {
  return (
    <>
      <section className="container_banner_three">
        <div className="are_img_banner_three">
          <Image
            src="/img/banner-one/Free_Mug_Mockup_2.webp"
            alt="Imagem de categoria"
            width={236}
            height={298}
            style={{
              borderRadius: "10px",
              objectFit: "cover",
            }}
          />
        </div >
        <div className="area_content_banner_three">
          <div >
          <h1>Lorem Ipsum</h1>
            <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.         </p>
            <p>Duis consectetur metus nec lacus auctor dignissim. Mauris vitae finibus dui. Mauris laoreet lacus ut eleifend viverra. Cras efficitur volutpat dui, in lobortis metus lacinia sit amet. Sed lacinia pharetra magna, vel pulvinar ligula hendrerit a. Maecenas fringilla porttitor tortor eget lacinia. Donec sollicitudin euismod orci, auctor fringilla magna consequat interdum. Fusce sagittis elit a libero commodo egestas efficitur id augue.         </p>

          </div>
        </div>
      </section>
    </>
  );
}

export default BannerViewThree;
