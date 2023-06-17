import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  /* grid-auto-flow: row; */
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 19px;
  margin: auto;
  padding: var(--padding);
`;

export { Container };
