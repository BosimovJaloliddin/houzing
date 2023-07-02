/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Section, Wrapper } from "./style";
import useRequest from "../../hooks/useRequest";
import { useFormik } from "formik";
import { Checkbox, Select, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import Yandex from "../Generic/Yandex";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Icons } from "../MyProperties/style";

// const { REACT_APP_BASE_URL: url } = process.env;

const AddHouse = () => {
  // const { search } = useLocation();
  const request = useRequest();
  const navigation = useNavigate();

  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [state, setState] = useState([]);
  const [category, setCategory] = useState([]);

  const info = () => {
    message.info("Yangi uy qo'shildi!");
  };

  useEffect(() => {
    request({
      url: `/houses/list`,
    }).then((res) => {
      setState(res?.data || []);
    });
  }, []);

  //category
  useEffect(() => {
    localStorage.getItem("token") &&
      request({
        url: `/categories/list`,
        token: true,
      }).then((res) => {
        setCategory(res.data || []);
      });
  }, []);
  const formik = useFormik({
    initialValues: {
      componentsDto: {},
      homeAmenitiesDto: {},
      houseDetails: {},
    },
    onSubmit: (values) => {
      console.log({ ...values, attachments: imgs });
      request({
        method: "POST",
        url: `/houses`,
        token: true,
        body: { ...values, attachments: imgs },
      }).then((res) => {
        console.log(res);
        if (res.success) {
          navigation("/myproperties");
          info();
        }
      });
    },
  });

  const onChange = ({ target: { value } }) => {
    // console.log(`checked = ${e.target.checked}`);
    // formik.values[name] = checked;
    setImg(value);
  };

  const addImg = () => {
    if (img.length && imgs.length < 4) {
      setImgs([...imgs, { id: img.length * Math.random(), imgPath: img }]);
      setImg("");
    }
  };
  const onDelImg = (id) => {
    let res = imgs.filter((val) => val.id !== id);
    setImgs(res);
  };
  // const handleChange = (value) => {
  //   console.log(`selected ${value}`);
  // };
  // console.log(category);

  return (
    <Container>
      <div style={{ marginRight: "auto" }} className="title">
        Add New House
      </div>
      <form onSubmit={formik.handleSubmit}>
        <Wrapper cl="true" gap={32}>
          <Wrapper cl="true">
            <div className="subTitle">Address</div>
            <Section cl="true" gap={30}>
              <Section gap={20}>
                <Input
                  id="address"
                  name="address"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.address || ""}
                  placeholder="address"
                />
                <Input
                  id="city"
                  name="city"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.city || ""}
                  placeholder="city"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="country"
                  name="country"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.country || ""}
                  placeholder="country"
                />
                <Input
                  id="region"
                  name="region"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.region || ""}
                  placeholder="region"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="name"
                  name="name"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.name || ""}
                  placeholder="name"
                />
                <Input
                  id="zipCode"
                  name="zipCode"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.zipCode || ""}
                  placeholder="zipCode"
                />
                <Select
                  defaultValue={"Select Category"}
                  // onChange={formik.handleChange}
                  value={formik.values.category}
                >
                  {category.map((value) => (
                    <Select.Option
                      onChange={formik.handleChange}
                      value={value.id}
                      key={value.id}
                    >
                      {value.name}
                    </Select.Option>
                  ))}
                </Select>
              </Section>
            </Section>
          </Wrapper>

          <Wrapper cl="true">
            <div className="subTitle">Additional</div>
            <Section cl="true" gap={30}>
              <Section gap={20}>
                <Input
                  id="area"
                  name="houseDetails.area"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.area}
                  placeholder="area"
                />
                <Input
                  id="bath"
                  name="houseDetails.bath"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.bath}
                  placeholder="bath"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="beds"
                  name="houseDetails.beds"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.beds}
                  placeholder="beds"
                />
                <Input
                  id="garage"
                  name="houseDetails.garage"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.garage}
                  placeholder="garage"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="room"
                  name="houseDetails.room"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.room}
                  placeholder="room"
                />
                <Input
                  id="yearBuilt"
                  name="houseDetails.yearBuilt"
                  type="number"
                  onChange={formik.handleChange}
                  value={formik.values.yearBuilt}
                  placeholder="yearBuilt"
                />
              </Section>
            </Section>
          </Wrapper>

          <Wrapper cl="true" gap={30}>
            <div className="subTitle">Price</div>
            <Section gap={20}>
              <Input
                id="price"
                name="price"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.price || ""}
                placeholder="$ price"
              />
              <Input
                id="salePrice"
                name="salePrice"
                type="number"
                onChange={formik.handleChange}
                value={formik.values.salePrice || ""}
                placeholder="$ salePrice"
              />
            </Section>
          </Wrapper>

          <Wrapper cl="true">
            <div className="subTitle">Location</div>
            <Section>
              <Yandex center={state.location} />
            </Section>
          </Wrapper>

          <Wrapper cl="true">
            <div className="subTitle">Add House Image</div>
            <Section cl="true">
              <Section gap={20}>
                <Input value={img} onChange={onChange} />
                <Button type={"button"} onClick={addImg}>
                  Add Image
                </Button>
              </Section>
              <Section cl="true">
                {imgs.map((v, idx) => {
                  return (
                    <Section al="true" gap={24} key={idx}>
                      {v.imgPath} <Icons.Del onClick={() => onDelImg(v.id)} />
                    </Section>
                  );
                })}
              </Section>
            </Section>
          </Wrapper>

          <Wrapper cl="true">
            <div className="subTitle">Amenities</div>
            <Section gap={120}>
              <Section cl="true" gap={20}>
                <Checkbox
                  id="airCondition"
                  name="componentsDto.airCondition"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Air Condition
                </Checkbox>
                <Checkbox
                  id="courtyard"
                  name="componentsDto.courtyard"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Courtyard
                </Checkbox>
                <Checkbox
                  id="furniture"
                  name="componentsDto.furniture"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Furniture
                </Checkbox>
                <Checkbox
                  id="gasStove"
                  name="componentsDto.gasStove"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Gas Stove
                </Checkbox>
                <Checkbox
                  id="internet"
                  name="componentsDto.internet"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Internet
                </Checkbox>
              </Section>

              <Section cl="true" gap={20}>
                <Checkbox
                  id="tv"
                  name="componentsDto.tv"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  TV
                </Checkbox>
                <Checkbox
                  id="busStop"
                  name="homeAmenitiesDto.busStop"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Bus Stop
                </Checkbox>
                <Checkbox
                  id="garden"
                  name="homeAmenitiesDto.garden"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Garden
                </Checkbox>
                <Checkbox
                  id="market"
                  name="homeAmenitiesDto.market"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Market
                </Checkbox>
                <Checkbox
                  id="park"
                  name="homeAmenitiesDto.park"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Park
                </Checkbox>
              </Section>

              <Section cl="true" gap={20}>
                <Checkbox
                  id="parking"
                  name="homeAmenitiesDto.parking"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Parking
                </Checkbox>
                <Checkbox
                  id="school"
                  name="homeAmenitiesDto.school"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  School
                </Checkbox>
                <Checkbox
                  id="stadium"
                  name="homeAmenitiesDto.stadium"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Stadium
                </Checkbox>
                <Checkbox
                  id="subway"
                  name="homeAmenitiesDto.subway"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Subway
                </Checkbox>
                <Checkbox
                  id="superMarket"
                  name="homeAmenitiesDto.superMarket"
                  type="checkbox"
                  onChange={formik.handleChange}
                >
                  Super Market
                </Checkbox>
              </Section>
            </Section>
          </Wrapper>

          <Wrapper>
            <TextArea
              onChange={formik.handleChange}
              value={formik.values.description}
              rows={7}
              name="description"
              placeholder="Description"
            />
          </Wrapper>

          <Button type="submit">Submit</Button>
        </Wrapper>
      </form>
    </Container>
  );
};

export default AddHouse;
