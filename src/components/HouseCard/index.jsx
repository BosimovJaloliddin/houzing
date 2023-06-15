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

const HouseCard = ({ data }) => {
  const {
    address,
    city,
    country,
    description,
    price,
    salePrice,
    houseDetails: { bath, beds, area, garage },
  } = data;
  return (
    <Container>
      <CardImg src={data.attachments[0].imgPath || noImg} />
      <CardWrapp>
        <div className="subTitle">
          {country} {city} {description}
        </div>
        <div className="infoDark">
          {address || "Quincy St, Brooklyn, NY, USA"}
        </div>
        <CardItems>
          <CardItems.Item>
            <Bad />
            {beds} Bads
          </CardItems.Item>
          <CardItems.Item>
            <Bath />
            {bath} Baths
          </CardItems.Item>
          <CardItems.Item>
            <Car />
            {garage} Cars
          </CardItems.Item>
          <CardItems.Item>
            <Size />
            {area} Sq Ft
          </CardItems.Item>
        </CardItems>
      </CardWrapp>
      <hr />
      <CardWrapp>
        <Footer>
          <Footer.Item>
            <Price>${salePrice}/mo</Price>
            <div className="subTitle">${price}/mo</div>
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
