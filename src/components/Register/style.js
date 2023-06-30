import styled from "styled-components";
import { Tabs } from "antd";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  gap: 40px;
  margin: 3rem auto;
  padding: var(--padding);
`;
const WrapTabs = styled(Tabs)``;

export { Container, WrapTabs };
