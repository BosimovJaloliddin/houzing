import React from "react";
import "./style";
import { CarouselImg, Container, Blur, Content } from "./style";
import houseImg2 from "../../assets/img/home2.svg";
import Button from "../Generic/Button";

const Banner = () => {
  return (
    <Container>
      <CarouselImg src={houseImg2} />
      <Blur />
      <Content>
        <Content.Title>
          Vermont Farmhouse With Antique Jail Is <br /> the Week's Most Popular
          Home
        </Content.Title>
        <Button width={180} />
      </Content>
    </Container>
  );
};

export default Banner;
