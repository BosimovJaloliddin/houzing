/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import { Wrapper, Container, Section, Icons, HouseImg } from "./style";
import useRequest from "../../hooks/useRequest";
import Button from "../Generic/Button";

const MyProperties = () => {
  const navigate = useNavigate();
  const request = useRequest();

  const [state, setState] = useState([]);
  useEffect(() => {
    request({
      url: `/houses/list`,
    }).then((res) => {
      setState(res?.data || []);
    });
  }, []);

  const onClick = (id) => {
    let res = state.filter((vl) => vl.id !== id);
    setState(res);
  };

  const columns = [
    {
      title: "Light Title",
      render: (state) => {
        return (
          <Wrapper>
            <Section>
              <HouseImg
                src={state.attachments && state.attachments[0].imgPath}
              />
            </Section>
            <Section cl>
              <Section cl>
                <div className="subTitle">
                  {state.country},{state.region}
                </div>
                <div className="infoDark">
                  {state.address},{state.city}
                </div>
              </Section>
              <Section cl>
                <div className="infoDark">
                  <del>$ {state.salePrice}/mo</del>
                </div>
                <div className="subTitle">$ {state.price}/mo</div>
              </Section>
            </Section>
            <Section style={{ marginLeft: "auto" }}>
              <Button height={32} type={"dark"}>
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
          <Icons.Edit />
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
      <Table columns={columns} dataSource={state} />
    </Container>
  );
};

export default MyProperties;
