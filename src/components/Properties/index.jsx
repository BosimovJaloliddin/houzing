/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper, Container, PropertiesTitle } from "./style";
import HouseCard from "../HouseCard";
import useRequest from "../../hooks/useRequest";

const Properties = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useRequest();

  const [state, setState] = useState([]);
  useEffect(() => {
    request({ url: `/houses/list${search}` }).then((res) => {
      setState(res?.data || []);
    });
  }, [search]);

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <PropertiesTitle>
        <div className="title">Properties</div>
        <div className="infoDark">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </PropertiesTitle>
      <Wrapper>
        {state?.map((value, index) => (
          <HouseCard
            onClick={() => onSelect(value.id)}
            key={index}
            data={value}
          />
        ))}
      </Wrapper>
    </Container>
  );
};

export default Properties;
