import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: center; */
`;
const Main = styled.div`
  display: flex;
  justify-content: center;
  background: var(--colorPrimary);
`;
const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #ffff;
  padding: var(--padding);
  height: 64px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo && "pointer"};

  .active {
    color: #97e94f;
  }
`;
const Logo = styled.img`
  padding-right: 12px;
`;
const LogoName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
`;
const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  padding: 0 32px;
  text-decoration: none;
`;

const Register = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 177px;
  padding: 16px;
  background: #fff;
  box-shadow: 0px 8px 15px 0px rgba(0, 0, 0, 0.06),
    0px 7px 46px 0px rgba(0, 0, 0, 0.06), 0px 20px 38px 0px rgba(0, 0, 0, 0.06);
`;
Register.Item = styled.div`
  color: #000;
  font-size: 14px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  cursor: pointer;
`;

export { Container, Main, Wrapper, Contents, Logo, LogoName, Link, Register };
