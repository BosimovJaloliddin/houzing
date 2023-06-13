import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  Container,
  Wrapper,
  Contents,
  Logo,
  LogoName,
  Link,
  Main,
} from "./style";
import { navbar } from "../../utils/navbar";
import Filter from "../Filter";
import Button from "../../components/Generic/Button";
import logoImage from "../../assets/logo/logo.svg";

const Navbar = () => {
  const navigate = useNavigate();
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
            <Button
              onClick={() => navigate("/sinup")}
              type={"dark"}
              height={44}
              width={120}
              fontSize={14}
            >
              Sign In
            </Button>
          </Contents>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
    </Container>
  );
};

export default Navbar;
