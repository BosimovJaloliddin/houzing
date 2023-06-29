import React from "react";
import { Dropdown } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Contents,
  Logo,
  LogoName,
  Link,
  Main,
  Register,
} from "./style";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import Button from "../../components/Generic/Button";
import logoImage from "../../assets/logo/logo.svg";
import Footer from "../Footer";

const Navbar = () => {
  let token = localStorage.getItem("token");

  const navigate = useNavigate();

  const menu = (
    <Register>
      <h1>My profile</h1>
      <h1>My Properties</h1>
      <h1>Favourites</h1>
    </Register>
  );
  return (
    <Container>
      <Main>
        <Wrapper>
          <Contents onClick={() => navigate("/")} logo="true">
            <Logo src={logoImage} />
            <LogoName>Houzing</LogoName>
          </Contents>
          <Contents>
            {navbar.map(({ path, title, hidden }, index) => {
              return (
                !hidden && (
                  <Link
                    className={({ isActive }) => isActive && "active"}
                    key={index}
                    to={path}
                  >
                    {title}
                  </Link>
                )
              );
            })}
          </Contents>
          <Contents>
            {token ? (
              <Dropdown
                trigger={["click"]}
                dropdownRender={() => menu}
                placement="bottomRight"
                arrow={{
                  pointAtCenter: true,
                }}
              >
                <Button type={"dark"}>Profile</Button>
              </Dropdown>
            ) : (
              <Button
                onClick={() => navigate("/signup")}
                type={"dark"}
                height={44}
                width={120}
                fontSize={14}
              >
                Sign In
              </Button>
            )}
          </Contents>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};

export default Navbar;
