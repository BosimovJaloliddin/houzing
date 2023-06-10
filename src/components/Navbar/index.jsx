import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Container, Wrapper, Contents, Logo, Link, Main } from "./style";
import { navbar } from "../../utils/navbar";
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
            <h3>Houzing</h3>
          </Contents>
          <Contents>
            {navbar.map(({ path, title }, index) => {
              return (
                <Link
                  className={({ isActive }) => isActive && "active"}
                  key={index}
                  to={path}
                >
                  {title}
                </Link>
              );
            })}
          </Contents>
          <Contents>
            <Button
              onClick={() => navigate("sinup")}
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
      <Outlet />
    </Container>
  );
};

export default Navbar;