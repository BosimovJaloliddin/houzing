/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Container, Section, SelectAnt, Wrapper } from "./style";
import useRequest from "../../hooks/useRequest";
import { useFormik } from "formik";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
import Yandex from "../Generic/Yandex";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import { Icons } from "../MyProperties/style";

const { REACT_APP_BASE_URL: url } = process.env;

const AddHouse = () => {
  const { search } = useLocation();
  const request = useRequest();

  const [img, setImg] = useState("");
  const [imgs, setImgs] = useState([]);
  const [state, setState] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    request({
      url: `/houses/list`,
    }).then((res) => {
      setState(res?.data || []);
    });
  }, [search]);

  useEffect(() => {
    localStorage.getItem("token") &&
      fetch(`${url}/categories/list`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => res.json())
        .then((res) => {
          setCategory(res.data || []);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const formik = useFormik({
    initialValues: {
      address: "",
      city: "",
      country: "",
      region: "",
      name: "",
      zipCode: "",
      area: "",
      bath: "",
      beds: "",
      garage: "",
      room: "",
      yearBuilt: "",
      price: "",
      salePrice: "",
      latitude: "",
      longitude: "",
      airCondition: false,
      courtyard: false,
      furniture: false,
      gasStove: false,
      internet: false,
      busStop: false,
      garden: false,
      market: false,
      park: false,
      parking: false,
      school: false,
      stadium: false,
      subway: false,
      superMarket: false,
    },
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  const onChange = ({ target: { checked, name, value } }) => {
    // console.log(`checked = ${e.target.checked}`);
    formik.values[name] = checked;
    setImg(value);
  };

  const addImg = () => {
    if (img.length && imgs.length < 4) {
      setImgs([...imgs, { id: img.length * Math.random(), url: img }]);
      setImg("");
    }
  };
  const onDelImg = (id) => {
    let res = imgs.filter((val) => val.id !== id);
    setImgs(res);
  };

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
                  type="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  placeholder="address"
                />
                <Input
                  id="city"
                  name="city"
                  type="city"
                  onChange={formik.handleChange}
                  value={formik.values.city}
                  placeholder="city"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="country"
                  name="country"
                  type="country"
                  onChange={formik.handleChange}
                  value={formik.values.country}
                  placeholder="country"
                />
                <Input
                  id="region"
                  name="region"
                  type="region"
                  onChange={formik.handleChange}
                  value={formik.values.region}
                  placeholder="region"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="name"
                  name="name"
                  type="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  placeholder="name"
                />
                <Input
                  id="zipCode"
                  name="zipCode"
                  type="zipCode"
                  onChange={formik.handleChange}
                  value={formik.values.zipCode}
                  placeholder="zipCode"
                />
                <SelectAnt
                  defaultValue={"Select Category"}
                  onChange={formik.handleChange}
                  placeholder="Select"
                >
                  {category.map((value) => (
                    <SelectAnt.Option
                      name="category_id"
                      key={value.id}
                      value={value.id}
                    >
                      {value.name}
                    </SelectAnt.Option>
                  ))}
                </SelectAnt>
              </Section>
            </Section>
          </Wrapper>

          <Wrapper cl="true">
            <div className="subTitle">Additional</div>
            <Section cl="true" gap={30}>
              <Section gap={20}>
                <Input
                  id="area"
                  name="area"
                  type="area"
                  onChange={formik.handleChange}
                  value={formik.values.area}
                  placeholder="area"
                />
                <Input
                  id="bath"
                  name="bath"
                  type="bath"
                  onChange={formik.handleChange}
                  value={formik.values.bath}
                  placeholder="bath"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="beds"
                  name="beds"
                  type="beds"
                  onChange={formik.handleChange}
                  value={formik.values.beds}
                  placeholder="beds"
                />
                <Input
                  id="garage"
                  name="garage"
                  type="garage"
                  onChange={formik.handleChange}
                  value={formik.values.garage}
                  placeholder="garage"
                />
              </Section>
              <Section gap={20}>
                {" "}
                <Input
                  id="room"
                  name="room"
                  type="room"
                  onChange={formik.handleChange}
                  value={formik.values.room}
                  placeholder="room"
                />
                <Input
                  id="yearBuilt"
                  name="yearBuilt"
                  type="yearBuilt"
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
                type="price"
                onChange={formik.handleChange}
                value={formik.values.price}
                placeholder="$ price"
              />
              <Input
                id="salePrice"
                name="salePrice"
                type="salePrice"
                onChange={formik.handleChange}
                value={formik.values.salePrice}
                placeholder="$ salePrice"
              />
            </Section>
          </Wrapper>

          <Wrapper cl="true">
            <div className="subTitle">Location</div>
            <Section cl="true" gap={30}>
              <Section gap={20}>
                <Input
                  id="latitude"
                  name="latitude"
                  type="latitude"
                  onChange={formik.handleChange}
                  value={formik.values.latitude}
                  placeholder="latitude"
                />
                <Input
                  id="longitude"
                  name="longitude"
                  type="longitude"
                  onChange={formik.handleChange}
                  value={formik.values.longitude}
                  placeholder="longitude"
                />
              </Section>
              <Section>
                <Yandex center={state.location} />
              </Section>
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
                      {v.url} <Icons.Del onClick={() => onDelImg(v.id)} />
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
                  name="airCondition"
                  type="checkbox"
                  onChange={onChange}
                >
                  Air Condition
                </Checkbox>
                <Checkbox
                  id="courtyard"
                  name="courtyard"
                  type="checkbox"
                  onChange={onChange}
                >
                  Courtyard
                </Checkbox>
                <Checkbox
                  id="furniture"
                  name="furniture"
                  type="checkbox"
                  onChange={onChange}
                >
                  Furniture
                </Checkbox>
                <Checkbox
                  id="gasStove"
                  name="gasStove"
                  type="checkbox"
                  onChange={onChange}
                >
                  Gas Stove
                </Checkbox>
                <Checkbox
                  id="internet"
                  name="internet"
                  type="checkbox"
                  onChange={onChange}
                >
                  Internet
                </Checkbox>
              </Section>

              <Section cl="true" gap={20}>
                <Checkbox id="tv" name="tv" type="checkbox" onChange={onChange}>
                  TV
                </Checkbox>
                <Checkbox
                  id="busStop"
                  name="busStop"
                  type="checkbox"
                  onChange={onChange}
                >
                  Bus Stop
                </Checkbox>
                <Checkbox
                  id="garden"
                  name="garden"
                  type="checkbox"
                  onChange={onChange}
                >
                  Garden
                </Checkbox>
                <Checkbox
                  id="market"
                  name="market"
                  type="checkbox"
                  onChange={onChange}
                >
                  Market
                </Checkbox>
                <Checkbox
                  id="park"
                  name="park"
                  type="checkbox"
                  onChange={onChange}
                >
                  Park
                </Checkbox>
              </Section>

              <Section cl="true" gap={20}>
                <Checkbox
                  id="parking"
                  name="parking"
                  type="checkbox"
                  onChange={onChange}
                >
                  Parking
                </Checkbox>
                <Checkbox
                  id="school"
                  name="school"
                  type="checkbox"
                  onChange={onChange}
                >
                  School
                </Checkbox>
                <Checkbox
                  id="stadium"
                  name="stadium"
                  type="checkbox"
                  onChange={onChange}
                >
                  Stadium
                </Checkbox>
                <Checkbox
                  id="subway"
                  name="subway"
                  type="checkbox"
                  onChange={onChange}
                >
                  Subway
                </Checkbox>
                <Checkbox
                  id="superMarket"
                  name="superMarket"
                  type="checkbox"
                  onChange={onChange}
                >
                  Super Market
                </Checkbox>
              </Section>
            </Section>
          </Wrapper>

          <Wrapper>
            <TextArea rows={7} name="description" placeholder="Description" />
          </Wrapper>
          <Button type="submit">Submit</Button>
        </Wrapper>
      </form>
    </Container>
  );
};

export default AddHouse;
