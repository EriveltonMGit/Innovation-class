

// IMPORTAÇÃO CSS 
import "./home.css"

import CustomCarousel from "../../Components/carousel/customCarousel";

function HomePage() {
    return (
        <>
        <section className="container_carousel">
         <CustomCarousel></CustomCarousel>   
        </section>
        </>
      );
}

export default HomePage;