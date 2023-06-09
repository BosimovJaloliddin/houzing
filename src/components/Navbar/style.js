import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
const Link = styled(NavLink)`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  padding: 0 32px;
  text-decoration: none;
`;

export { Container, Main, Wrapper, Contents, Logo, Link };
