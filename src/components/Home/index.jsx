import React from "react";
import { Container } from "./style";
import GenCarousel from "../Carousel";
import Category from "../Category";
import Recomended from "../Recomended";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";
import Testimonials from "../Testimonials";

const Home = () => {
  return (
    <Container>
      <GenCarousel />
      <Recomended />
      <Why />
      <Category />
      <Banner />
      <Recent />
      <Testimonials />
    </Container>
  );
};

export default Home;
