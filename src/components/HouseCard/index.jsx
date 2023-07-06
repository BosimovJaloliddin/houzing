import React, { useContext } from "react";
import {
  Container,
  CardWrapp,
  CardImg,
  CardItems,
  Icons,
  Footer,
  Price,
} from "./style";
import noImg from "../../assets/img/noimg.png";
import { message } from "antd";
import { PropertiesContext } from "../../context/properties";

const HouseCard = ({ data = {}, onClick }) => {
  const [{ refetch }] = useContext(PropertiesContext);
  const {
    address,
    city,
    country,
    description,
    price,
    salePrice,
    favorite,
    id,
    houseDetails: { bath, beds, area, garage },
  } = data;

  const save = (event) => {
    event.stopPropagation();
    fetch(
      `http://localhost:8081/api/v1/houses/addFavourite/${id}?favourite=${!favorite}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        !favorite
          ? res?.success && message.info("Liked")
          : res?.success && message.warning("Disliked");
        refetch && refetch();
      });
  };

  return (
    <Container onClick={onClick}>
      <CardImg
        src={
          (data.attachments[0]?.imgPath && data.attachments[0].imgPath) || noImg
        }
      />
      <CardWrapp>
        <div className="subTitle">
          {country} {city} {description}
        </div>
        <div className="infoDark">
          {address || "Quincy St, Brooklyn, NY, USA"}
        </div>
        <CardItems>
          <CardItems.Item>
            <Icons.Bad />
            {beds} Bads
          </CardItems.Item>
          <CardItems.Item>
            <Icons.Bath />
            {bath} Baths
          </CardItems.Item>
          <CardItems.Item>
            <Icons.Car />
            {garage} Cars
          </CardItems.Item>
          <CardItems.Item>
            <Icons.Size />
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
            <Icons.Setting />
            <Icons.Love onClick={save} favorite={favorite} />
          </Footer.Item>
        </Footer>
      </CardWrapp>
    </Container>
  );
};

export default HouseCard;
