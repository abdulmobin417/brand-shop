import Hero from "../Hero/Hero";
import Info from "../Info/Info";
import Offer from "../Offer/Offer";
import Sponsor from "../../Sponsor/Sponsor";
// import { useLoaderData } from "react-router-dom";
import Brands from "../Brands/Brands";

const Home = () => {
  // const cars = useLoaderData();

  return (
    <div>
      <Hero></Hero>
      <Info></Info>
      <Brands></Brands>
      <Offer></Offer>
      <Sponsor></Sponsor>
    </div>
  );
};

export default Home;
