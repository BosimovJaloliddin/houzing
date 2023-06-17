import React from "react";
import { Container, Blur, CardImg, Content } from "./style";
import noImg from "../../assets/img/noimg.png";
import CatHouse from "../../assets/img/categoty-house.png";

const CategoryCard = ({ onClick, data: { name } }) => {
  return (
    <Container onClick={onClick}>
      <CardImg src={CatHouse || noImg} />
      <Blur />
      <Content>{name}</Content>
    </Container>
  );
};

export default CategoryCard;
