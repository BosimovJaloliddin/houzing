import React, { useRef } from "react";
import {
  Container,
  WrapperLogin,
  Input,
  PushLogin,
  WrapImg,
  Img,
} from "./style";
import HouseImg from "../../assets/img/sin-house.png";

const SignIn = () => {
  const pushLogin = () => {
    fetch("http://localhost:8081/api/public/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginRef.current.value,
        password: pwRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!localStorage.getItem("token")) {
          localStorage.setItem("token", res.authenticationToken);
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
        <Input ref={loginRef} type="text" placeholder="Email" />
        <Input ref={pwRef} type="password" placeholder="Password" />
        <PushLogin onClick={pushLogin}>Login</PushLogin>
      </WrapperLogin>
    </Container>
  );
};
export default SignIn;
