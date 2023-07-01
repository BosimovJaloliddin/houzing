import styled from "styled-components";

const getType = ({ type }) => {
  switch (type) {
    case "light":
      return {
        background: "#ffff",
        border: "1px solid #E6E9EC",
        color: "#0D263B",
      };
    case "dark":
      return {
        background: "#0D263B",
        border: "1px solid #ffff",
        color: "#ffff",
      };
    case "primary":
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffff",
      };
    default:
      return {
        background: "#0061DF",
        border: "none",
        color: "#ffff",
      };
  }
};

const getWidth = ({ width }) => {
  if (!width) return `130px`;
  else if (`${width}`.includes("%")) return `100%`;
  else return `${width}px`;
};

const Container = styled.button`
  font-family: "Montserrat", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  cursor: pointer;

  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${getWidth};
  ${getType}

  &:active {
    opacity: 0.7;
  }
`;

export { Container };
