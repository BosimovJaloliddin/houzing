import React from "react";
import Slider from "react-slick";
import {
  Container,
  Wrapper,
  Title,
  Item,
  ItemInfo,
  ItemTitle,
  ItemSubtitle,
} from "./style";

const settings = {
  // className: "center",
  infinite: true,
  centerPadding: "15px",
  slidesToShow: 3,
  centerMode: true,
  speed: 500,
};

const Testimonials = () => {
  return (
    <Container>
      <Wrapper>
        <Title>
          <div className="title">Testimonials</div>
          <div className="infoDark">
            Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
          </div>
        </Title>
        <Slider {...settings}>
          <Item>
            <ItemInfo>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </ItemInfo>
            <ItemTitle>Marvin McKinney</ItemTitle>
            <ItemSubtitle>Designer</ItemSubtitle>
          </Item>
          <Item>
            {" "}
            <ItemInfo>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </ItemInfo>
            <ItemTitle>Marvin McKinney</ItemTitle>
            <ItemSubtitle>Designer</ItemSubtitle>
          </Item>
          <Item>
            <ItemInfo>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </ItemInfo>
            <ItemTitle>Marvin McKinney</ItemTitle>
            <ItemSubtitle>Designer</ItemSubtitle>
          </Item>
          <Item>
            <ItemInfo>
              “ I believe in lifelong learning and Skola is a great place to
              learn from experts. I've learned a lot and recommend it to all my
              friends “
            </ItemInfo>
            <ItemTitle>Marvin McKinney</ItemTitle>
            <ItemSubtitle>Designer</ItemSubtitle>
          </Item>
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default Testimonials;
