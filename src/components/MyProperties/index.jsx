/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Container,
  Section,
  Icons,
  HouseImg,
  TableAnt,
} from "./style";
import useRequest from "../../hooks/useRequest";
import Button from "../Generic/Button";
import noImg from "../../assets/img/noimg.png";
import { useQuery } from "react-query";
import { message } from "antd";

const MyProperties = () => {
  const navigate = useNavigate();
  const request = useRequest();

  const info = () => {
    message.info("Uy e'loni o'chirildi");
  };

  const { data, refetch } = useQuery([], () => {
    return request({
      url: `/houses/me`,
      token: true,
    });
  });

  //delete
  const onClick = (id) => {
    request({
      method: "DELETE",
      url: `/houses/${id}`,
      token: true,
    }).then((res) => {
      if (res.success) {
        info();
        refetch();
      }
    });
  };

  const columns = [
    {
      title: "Light Title",
      render: (state) => {
        return (
          <Wrapper>
            <Section>
              <HouseImg
                src={
                  (state.attachments[0]?.imgPath &&
                    state.attachments[0].imgPath) ||
                  noImg
                }
              />
            </Section>
            <Section cl="true">
              <Section cl="true">
                <div className="subTitle">
                  {state.country},{state.region}
                </div>
                <div className="infoDark">
                  {state.address},{state.city}
                </div>
              </Section>
              <Section cl="true">
                <div className="infoDark">
                  <del>$ {state.salePrice}/mo</del>
                </div>
                <div className="subTitle">$ {state.price}/mo</div>
              </Section>
            </Section>
            <Section style={{ marginLeft: "auto" }}>
              <Button
                height={32}
                type={"dark"}
                onClick={() => navigate(`/properties/${state.id}`)}
              >
                FOR SALE
              </Button>
            </Section>
          </Wrapper>
        );
      },
      key: "name",
    },

    {
      title: "Price",
      render: (state) => <span>$ {state.price || "no price"}/mo</span>,
      key: "price",
      width: 150,
      align: "center",
    },
    {
      title: "View",
      render: (state) => (
        <span>{state.houseDetails.yearBuilt || "no "} year</span>
      ),
      key: "age",
      width: 150,
      align: "center",
    },
    {
      title: "Email",
      key: "email",
      render: (state) => <span>{state.user.email || "nouser"}</span>,
      width: 200,
      align: "center",
    },
    {
      title: "Action",
      render: (state) => (
        <Section>
          <Icons.Edit
            onClick={() => navigate(`/myproperties/edithouse/${state.id}`)}
          />
          <Icons.Del onClick={() => onClick(state.id)} />
        </Section>
      ),
      key: "edit",
      width: 120,
    },
  ];
  return (
    <Container>
      <Section mt={34} mb={32}>
        <div className="title">My Properties</div>
        <div>
          <Button onClick={() => navigate("/myproperties/newhouse")}>
            Add House
          </Button>
        </div>
      </Section>
      <TableAnt columns={columns} dataSource={data?.data} />
    </Container>
  );
};

export default MyProperties;
