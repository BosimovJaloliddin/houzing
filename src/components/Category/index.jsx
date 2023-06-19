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
  centerMode: true,
  speed: 500,
  dots: true,
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

export default Category;
