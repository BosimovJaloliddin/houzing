import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ cl }) => (cl ? "column" : "row")};
  justify-content: space-between;
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

export { Wrapper, Container, Section };
