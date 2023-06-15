import React from "react";
import "./style";
import { Carousel } from "antd";
import {
  Arrow,
  CarouselImg,
  Container,
  Blur,
  Content,
  HouseInfo,
  Bad,
  Car,
  Size,
  Bath,
} from "./style";
import { useRef } from "react";
import houseImg1 from "../../assets/img/home1.svg";
import houseImg2 from "../../assets/img/home2.svg";

const GenCarousel = ({ bad, bath, car, size }) => {
  const slider = useRef();
  const onChange = (currentSlide) => {
    // console.log(currentSlide);
  };

  const onMove = ({
    target: {
      dataset: { name },
    },
  }) => {
    if (name === "left") slider.current.prev();
    if (name === "right") slider.current.next();
  };

  return (
    <Container>
      <Arrow data-name="left" onClick={onMove} left="left" />
      <Carousel ref={slider} afterChange={onChange}>
        <CarouselImg src={houseImg1} />
        <CarouselImg src={houseImg2} />
      </Carousel>
      <Blur />
      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Desc className="infoWhite">
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Desc>
        <HouseInfo>
          <HouseInfo.Item>
            <Bad />
            <div className="infoWhite">{bad} bads</div>
          </HouseInfo.Item>
          <HouseInfo.Item>
            <Bath />
            <div className="infoWhite">{bath} baths</div>
          </HouseInfo.Item>
          <HouseInfo.Item>
            <Car />
            <div className="infoWhite">{car} cars</div>
          </HouseInfo.Item>
          <HouseInfo.Item>
            <Size />
            <div className="infoWhite"> {size} Sq Ft</div>
          </HouseInfo.Item>
        </HouseInfo>
        <Content.Price>$5,250/mo</Content.Price>
      </Content>
      <Arrow data-name="right" onClick={onMove} />
    </Container>
  );
};

export default GenCarousel;
