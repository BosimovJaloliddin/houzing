import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

const Input = forwardRef(
  (
    {
      onChange,
      width,
      height,
      placeholder,
      paddingLeft,
      value,
      defaultValue,
      name,
      icon,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{icon}</Icon>
        <Container
          ref={ref}
          onChange={onChange}
          name={name}
          value={value}
          defaultValue={defaultValue}
          width={width}
          height={height}
          placeholder={placeholder}
          paddingLeft={paddingLeft}
          icon={icon}
        />
      </Wrapper>
    );
  }
);

export default Input;
