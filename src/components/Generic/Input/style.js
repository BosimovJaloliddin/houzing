import styled from "styled-components";

const Container = styled.input`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: "14px";
  border-radius: 2px;
  min-width: 120px;
  outline: none;
  border: 1px solid #e6e9ec;

  padding-left: ${({ icon }) => (icon ? `44px` : "20px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : `100%`)};

  &:focus {
    border: 1px solid #0061df;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  position: absolute;
  left: 10px;
`;

export { Container, Wrapper, Icon };
