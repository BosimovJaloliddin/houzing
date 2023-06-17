import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CategoryCard from "../CategoryCard";

const { REACT_APP_BASE_URL: url } = process.env;
const settings = {
  className: "center",
  infinite: true,
  centerPadding: "20px",
  slidesToShow: 4,
  speed: 500,
  dots: true,

  appendDots: (dots) => <h1>{dots}</h1>,
};

const Category = () => {
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
      <Slider {...settings}>
        {state.map((value) => {
          return (
            <CategoryCard
              onClick={() => navigate(`/properties?category=${value?.name}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Category;
