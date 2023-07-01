/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container } from "./style";
import useRequest from "../../hooks/useRequest";
// import Button from "../Generic/Button";

const AddHouse = () => {
  const { search } = useLocation();
  const request = useRequest();

  const [, setState] = useState([]);
  useEffect(() => {
    request({
      url: `/houses/me`,
    }).then((res) => {
      setState(res?.data || []);
    });
  }, [search]);

  return <Container></Container>;
};

export default AddHouse;
