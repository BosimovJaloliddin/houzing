import React, { useEffect, useState } from "react";
import { Container, Title } from "./style";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import HouseCard from "../HouseCard";

const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 3,
  speed: 500,
  dots: true,
};

const Recent = () => {
  const navigate = useNavigate();

  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setState(res?.data || []);
      });
  }, []);
  return (
    <Container>
      <Title>
        <div className="title">Recent Properties for Rent</div>
        <div className="infoDark">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Title>
      <Slider {...settings}>
        {state.map((value) => {
          return (
            <HouseCard
              gap={10}
              key={value.id}
              onClick={() => navigate(`/properties?category_id=${value?.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recent;
