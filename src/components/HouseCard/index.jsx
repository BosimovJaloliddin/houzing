import React from "react";
import {
  Container,
  CardWrapp,
  CardImg,
  CardItems,
  Bad,
  Car,
  Size,
  Bath,
  Footer,
  Price,
  Love,
  Setting,
} from "./style";
import noImg from "../../assets/img/noimg.png";

const HouseCard = ({ url, title, location, bad, bath, car, size }) => {
  return (
    <Container>
      <CardImg src={url || noImg} />
      <CardWrapp>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="infoDark">
          {location || "Quincy St, Brooklyn, NY, USA"}
        </div>
        <CardItems>
          <CardItems.Item>
            <Bad />
            {bad} Bads
          </CardItems.Item>
          <CardItems.Item>
            <Bath />
            {bath} Baths
          </CardItems.Item>
          <CardItems.Item>
            <Car />
            {car} Cars
          </CardItems.Item>
          <CardItems.Item>
            <Size />
            {size} Sq Ft
          </CardItems.Item>
        </CardItems>
      </CardWrapp>
      <hr />
      <CardWrapp>
        <Footer>
          <Footer.Item>
            <Price>$2,800/mo</Price>
            <div className="subTitle">$7,500/mo</div>
          </Footer.Item>
          <Footer.Item row="row">
            <Setting />
            <Love />
          </Footer.Item>
        </Footer>
      </CardWrapp>
    </Container>
  );
};

export default HouseCard;
