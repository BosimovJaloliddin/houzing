/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "./style";
import useRequest from "../../hooks/useRequest";

const HouseItem = () => {
  const params = useParams();
  const request = useRequest();
  const [state, setState] = useState({});

  useEffect(() => {
    request({ url: `/houses/id/${params.id}` }).then((res) => {
      params.id && setState(res?.data);
    });
  }, [params.id]);
  console.log(state);
  return (
    <Container>
      <h1>{state.name}</h1>
    </Container>
  );
};

export default HouseItem;
