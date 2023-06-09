import React, { useEffect, useState } from "react";
import { Container, Title } from "./style";
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
    localStorage.getItem("token") &&
      fetch(`${url}/categories/list`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => res.json())
        .then((res) => {
          setState(res?.data || []);
        });
  }, []);
  return (
    <Container>
      <Title>
        <div className="title">Category</div>
        <div className="infoDark">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </Title>
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
