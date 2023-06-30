import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 40px;
  margin: 3rem auto;
  padding: var(--padding);
`;
const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 2;
  width: 100%;
`;

export { Container, WrapperLogin };
