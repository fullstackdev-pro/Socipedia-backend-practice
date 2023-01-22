import React from "react";
import slider from "../../images/Sliders.png";
import slider2 from "../../images/Sliders (2).png";
import slider3 from "../../images/Sliders (3).png";
import DiscountGoodsPage from "../Goods/DiscountGoodsPage";
import NewGoodsPage from "../Goods/NewGoodsPage";
import BoughtBeforePage from "../Goods/BoughtBeforePage";
import SpecialOffers from "./SpecialOffers/SpecialOffers";
import OurMarkets from "./OurMarkets/OurMarkets";
import ArticlesPage from "./Articles/ArticlesPage";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

function HomePage(props) {
  return (
    <div className="bg-[#FBF8EC]">
      <Header />
      <Navbar />
      <img
        src={
          window.innerWidth < 361
            ? slider
            : window.innerWidth < 769
            ? slider2
            : slider3
        }
        alt="slider"
        className="w-full"
      />
      <DiscountGoodsPage home="home" />
      <NewGoodsPage home="home" />
      <BoughtBeforePage home="home" />
      <SpecialOffers />
      <OurMarkets />
      <ArticlesPage />
      <Footer />
    </div>
  );
}

export default HomePage;
