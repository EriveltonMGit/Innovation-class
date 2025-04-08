// AQUI FICA AS IMPORAÇÕES DOS COMPONENTS
import CardProductsTwo from "./Components/cardsProductsTwo/cardProdutucsTwo";
import Header from "./Components/header/header";
// import ProductsCard from "./Pages/carouselPage/productsCards";
import HomePage from "./Pages/home/home";

import BannerViewONe from "./Pages/one-banner/banner-view";
import BannerViewThree from "./Pages/three-banner/three-banner";
import BannerViewTwo from "./Pages/two-banner/two-banner";
import BannerViewFour from "./Pages/four-banner/four-banner";
import AreaRegister from "./Pages/register/area-register";
import Footer from "./Pages/footer/footer";
import CardProducts from "./Components/cardsProducts/cardProdutucs";

export default function Home() {
  return (
    <>
     <section className="container_page">
       {/* Header */}
       <Header></Header>
      {/* Home */}
      <HomePage></HomePage>
      {/* ProdutcsCard */}
      {/* <ProductsCard></ProductsCard> */}
      <CardProducts></CardProducts>
      {/* BannerViewONe */}
      <BannerViewONe></BannerViewONe>
      {/* BannerViewTwo */}
      <BannerViewTwo></BannerViewTwo>
      {/* BannerViewThree */}
      <BannerViewThree></BannerViewThree>
      {/* CardProductsTwo */}
      <CardProductsTwo></CardProductsTwo>
      {/*  BannerViewFour */}
      < BannerViewFour></BannerViewFour>
      {/* AreaRegister */}
      <AreaRegister></AreaRegister>
      {/*  Footer */}
      < Footer></Footer>
     </section>
    </>
  );
}
