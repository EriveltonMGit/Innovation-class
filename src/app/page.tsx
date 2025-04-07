// AQUI FICA AS IMPORAÇÕES DOS COMPONENTS
import CardProducts from "./Components/cardsProducts/cardProdutucs";
import Header from "./Components/header/header";
import HomePage from "./Pages/home/home";
import BannerViewONe from "./Pages/one-banner/banner-view";

export default function Home() {
  return (
    <>
      {/* Header */}
      <Header></Header>
      {/* Home */}
      <HomePage></HomePage>
      {/* carrosel de produtos */}
      <CardProducts></CardProducts>
      {/* BannerViewONe */}
      <BannerViewONe></BannerViewONe>
    </>
  );
}
