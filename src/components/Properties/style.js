import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const PropertiesTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 44px;
  margin-bottom: 64px;
`;
const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 19px;
  margin: auto;
  padding: var(--padding);
`;

export { Wrapper, Container, PropertiesTitle };
