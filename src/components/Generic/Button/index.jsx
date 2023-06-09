import React from "react";
import { Container } from "./style";

const Button = ({ onClick, type, width, height, fontSize, children }) => {
  return (
    <Container
      onClick={onClick}
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
    >
      {children || "Generic button"}
    </Container>
  );
};

export default Button;
