import React from "react";
import { Container } from "./style";
import GenCarousel from "../Carousel";
import Category from "../Category";
// import HouseCard from "../HouseCard";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Category />
      {/* <HouseCard /> */}
    </Container>
  );
};

export default Home;
