import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: var(--padding);
  gap: 19px;
`;

export { Container, Wrapper };
