import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";
import HouseCard from "../HouseCard";

const { REACT_APP_BASE_URL: url } = process.env;

const Properties = () => {
  const { search } = useLocation();

  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`${url}/houses/list${search}`)
      .then((res) => res.json())
      .then((res) => {
        setState(res?.data || []);
      });
  }, [search]);

  return (
    <Container>
      {state?.map((value, index) => (
        <HouseCard key={index} data={value} />
      ))}
    </Container>
  );
};

export default Properties;
