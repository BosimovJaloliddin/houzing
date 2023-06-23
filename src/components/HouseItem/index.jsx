/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CardItems,
  Container,
  Content,
  ContentItem,
  Description,
  Icons,
  Price,
  Title,
} from "./style";
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
  return (
    <Container>
      <Content>
        <ContentItem cl="true">
          <Title>Luxury Family Loft by Victoria Park</Title>
          <div className="infoDark">Quincy St, Brooklyn, NY, USA</div>
        </ContentItem>
        <Content>
          <ContentItem align="center">
            <Icons.Share />
            <div>Share</div>
          </ContentItem>
          <ContentItem align="center">
            <Icons.Love />
            <div>Love</div>
          </ContentItem>
        </Content>
      </Content>
      <Content align="flex-end" top="25px">
        <ContentItem gap={24}>
          <ContentItem align="center" gap={8}>
            <Icons.Bad />
            {state.houseDetails?.beds} Bads
          </ContentItem>
          <ContentItem align="center" gap={8}>
            <Icons.Bath />
            {state.houseDetails?.bath} Baths
          </ContentItem>
          <ContentItem align="center" gap={8}>
            <Icons.Car />
            {state.houseDetails?.garae} Cars
          </ContentItem>
          <ContentItem align="center" gap={8}>
            <Icons.Size />
            {state.houseDetails?.area} Sq Ft
          </ContentItem>
          <ContentItem align="center" gap={8}>
            <Icons.Calendar />
            Year Built: 1800
          </ContentItem>
        </ContentItem>
        <ContentItem cl="true" gap={4} align="flex-end">
          <ContentItem gap={8} align="center">
            <div className="infoDark">
              <del>${state.price}/mo</del>
            </div>
            <Price>${state.salePrice}/mo</Price>
          </ContentItem>
          <div className="infoDark">Est. Mortgage</div>
        </ContentItem>
      </Content>
      <Content.Title>Description</Content.Title>
      <Description>{state.description}</Description>
    </Container>
  );
};

export default HouseItem;
