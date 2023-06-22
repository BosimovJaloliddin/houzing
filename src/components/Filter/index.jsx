import React, { useEffect, useRef, useState } from "react";
import { Container, Icons, Section, MenuWrapper, SelectAnt } from "./style";
import { Input, Button } from "../Generic";
import { Dropdown } from "antd";
import uzeReplace from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const { REACT_APP_BASE_URL: url } = process.env;

const Filter = () => {
  const [state, setState] = useState([]);
  const [value, setValue] = useState("Select Category");

  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();

  const minPriceRef = useRef();
  const maxPricetRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    uzeReplace(name, value);
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    localStorage.getItem("token") &&
      fetch(`${url}/categories/list`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => res.json())
        .then((res) => {
          setState(res.data || []);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let [dt] = state?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    dt?.name && setValue(dt.name);
    !query.get("category_id") && setValue("Select category");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.search, state]);

  const onChangeCategory = (value, { name }) => {
    navigate(`/properties/${uzeReplace(name, value)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("country")}
          name="country"
          ref={countryRef}
          placeholder="Country"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("region")}
          name="region"
          ref={regionRef}
          placeholder="Region"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("city")}
          name="address"
          ref={cityRef}
          placeholder="City"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("zip_code")}
          name="zip_code"
          ref={zipRef}
          placeholder="Zip code"
        />
      </Section>
      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("room")}
          name="room"
          ref={roomsRef}
          placeholder="Rooms"
        />
        <SelectAnt
          defaultValue={query.get("sort") || "Select sort"}
          onChange={onChangeCategory}
        >
          <SelectAnt.Option name="sort" value={"asc"}>
            O'suvchi
          </SelectAnt.Option>
          <SelectAnt.Option name="sort" value={"desc"}>
            Kamayuvchi
          </SelectAnt.Option>
        </SelectAnt>

        <SelectAnt
          defaultValue={value}
          onChange={onChangeCategory}
          placeholder="Select"
        >
          {state.map((value) => (
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
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          onChange={onChange}
          defaultValue={query.get("min_price")}
          name="min_price"
          ref={minPriceRef}
          placeholder="Min price"
        />
        <Input
          onChange={onChange}
          defaultValue={query.get("max_price")}
          name="max_price"
          ref={maxPricetRef}
          placeholder="Max price"
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icons.House />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />
      <Dropdown
        trigger={["click"]}
        dropdownRender={() => menu}
        placement="bottomRight"
        arrow={{
          pointAtCenter: true,
        }}
      >
        <div>
          <Button width={131} type={"light"}>
            <Icons.Filter /> Advenced
          </Button>
        </div>
      </Dropdown>
      <Button width={180} type={"primaary"}>
        <Icons.Search /> Search
      </Button>
    </Container>
  );
};

export default Filter;
