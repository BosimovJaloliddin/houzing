import React, { useRef } from "react";
import { Container, Icons, Section, MenuWrapper } from "./style";
import { Input, Button } from "../Generic";
import { Dropdown } from "antd";
import uzeReplace from "../../hooks/useReplace";
import { useLocation, useNavigate } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

const Filter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomsRef = useRef();
  const sizeRef = useRef();
  const sortRef = useRef();

  const minPriceRef = useRef();
  const maxPricetRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    uzeReplace(name, value);
    navigate(`${location.pathname}${uzeReplace(name, value)}`);
  };

  // console.log(uzeReplace("adress", "Tashkent"));

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
          name="city"
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
        <Input ref={roomsRef} placeholder="Rooms" />
        <Input ref={sizeRef} placeholder="Size" />
        <Input ref={sortRef} placeholder="Sort" />
      </Section>
      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={minPriceRef} placeholder="Min price" />
        <Input ref={maxPricetRef} placeholder="Max price" />
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
