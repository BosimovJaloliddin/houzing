import React, { useRef } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Container, WrapperLogin, WrapImg, Img } from "./style";
import HouseImg from "../../assets/img/sin-house.png";
import Input from "../Generic/Input";
import Button from "../Generic/Button";
import useRequest from "../../hooks/useRequest";

const SignIn = () => {
  const navigate = useNavigate();
  const request = useRequest();

  const info = () => {
    message.info("Login va Parol to'g'ri");
  };
  const warning = () => {
    message.warning("Login yoki Parol xato");
  };

  const onClick = () => {
    request({
      url: "/public/auth/login",
      method: "POST",
      body: {
        email: loginRef.current.value,
        password: pwRef.current.value,
      },
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        localStorage.setItem("token", res?.authenticationToken);
        navigate("/home");
        info();
      } else {
        warning();
      }
    });
  };

  const loginRef = useRef("");
  const pwRef = useRef("");

  return (
    <Container>
      <WrapImg>
        <Img src={HouseImg} />
      </WrapImg>
      <WrapperLogin>
        <h3>
          <b>Sign In</b>
        </h3>
        <Input ref={loginRef} type="email" placeholder="Email" />
        <Input ref={pwRef} type="password" placeholder="Password" />
        <Button onClick={onClick} width={"100%"}>
          Login
        </Button>
      </WrapperLogin>
    </Container>
  );
};
export default SignIn;
