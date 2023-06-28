/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Checkbox } from "antd";
import useRequest from "../../hooks/useRequest";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import Yandex from "../Generic/Yandex";
import userImg from "../../assets/img/user-img.png";
import Recent from "../Recent";

import {
  Container,
  Wrapper,
  Content,
  ContentItem,
  Description,
  Price,
  Title,
  UserInfo,
  Message,
  MessageInfo,
  Icons,
} from "./style";

const HouseItem = () => {
  const params = useParams();
  const request = useRequest();
  const [state, setState] = useState({});

  useEffect(() => {
    request({ url: `/houses/id/${params.id}` }).then((res) => {
      params.id && setState(res?.data);
      window.scrollTo(0, 0);
    });
  }, [params.id]);

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <>
      <Wrapper gap={20}>
        <Container flx={3}>
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
        <Container flx={1}>
          <UserInfo>
            <ContentItem gap={10}>
              <img src={userImg} alt="userImage" />
              <ContentItem cl="true">
                <div className="subTitle">Darrel Steward</div>
                <div className="infoDark">(123)456-7890</div>
              </ContentItem>
            </ContentItem>
            <ContentItem cl="true" gap={24} mt={24}>
              <Input placeholder="Name" />
              <Input placeholder="Phone" />
              <Input placeholder="Email" />
            </ContentItem>
            <ContentItem cl="true" gap={8} mt={24}>
              <Message>Message</Message>
              <MessageInfo>(123)456-7890</MessageInfo>
              <hr />
            </ContentItem>
            <ContentItem mt={24} mb={24} gap={8}>
              <Checkbox onChange={onChange}></Checkbox>
              <div className="infoDark">
                By submitting this form I agree to Terms of Use
              </div>
            </ContentItem>
            <Button width={"100%"} />
          </UserInfo>
        </Container>
      </Wrapper>
      <Yandex center={state.location} />
      <Wrapper cl="true">
        <Content.Title>Features</Content.Title>
      </Wrapper>
      <Wrapper gap={90}>
        <ContentItem cl="true" gap={38} mt={32}>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
        </ContentItem>

        <ContentItem cl="true" gap={38} mt={32}>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
        </ContentItem>

        <ContentItem cl="true" gap={38} mt={32}>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
        </ContentItem>

        <ContentItem cl="true" gap={38} mt={32}>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dryer />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
          <ContentItem align={"center"}>
            <Icons.Dumbbell />
            <div className="infoDark">Air Conditioning</div>
          </ContentItem>
        </ContentItem>
      </Wrapper>
      <Recent title={"Similar listings"} />
    </>
  );
};

export default HouseItem;
