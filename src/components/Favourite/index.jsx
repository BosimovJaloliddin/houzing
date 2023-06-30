/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Wrapper, Container, PropertiesTitle } from "./style";
import HouseCard from "../HouseCard";
import { useQuery } from "react-query";
import { useContext } from "react";
import { PropertiesContext } from "../../context/properties";
// import useRequest from "../../hooks/useRequest";

const Favourite = () => {
  const [, dispatch] = useContext(PropertiesContext);

  const { search } = useLocation();
  const navigate = useNavigate();
  // const request = useRequest();

  const { refetch, data } = useQuery(
    [search],
    async () => {
      const res = fetch(
        `http://localhost:8081/api/v1/houses/getAll/favouriteList
`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      return (await res).json();
    },
    {
      onSuccess: (res) => {
        dispatch({ type: "refetch", payload: refetch });
      },
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <Container>
      <PropertiesTitle>
        <div className="title">Favourites</div>
        <div className="infoDark">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </div>
      </PropertiesTitle>
      <Wrapper>
        {data?.data.length ? (
          data?.data.map((value, index, favourite) => (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={index}
              data={value}
              favourite={favourite}
            />
          ))
        ) : (
          <h1>No Data</h1>
        )}
      </Wrapper>
    </Container>
  );
};

export default Favourite;
