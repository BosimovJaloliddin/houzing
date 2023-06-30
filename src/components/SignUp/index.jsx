import React, { useRef } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Container, WrapperLogin } from "./style";
import Input from "../Generic/Input";
import Button from "../Generic/Button";

const SignUp = () => {
  const navigate = useNavigate();

  const info = () => {
    message.info("Siz ro'yhatdan o'tdingiz!");
  };
  const warning = () => {
    message.warning("Siz oldin ro'yxatdan o'tkansiz yoki xatolik bor");
  };

  const onClick = () => {
    fetch(`http://localhost:8081/api/public/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginRef.current.value,
        firstname: firRef.current.value,
        lastname: lasRef.current.value,
        password: pwRef.current.value,
      }),
    }).then((res) => {
      if (res.ok) {
        navigate("/signin");
        info();
      } else warning();
    });
  };

  const loginRef = useRef("");
  const pwRef = useRef("");
  const firRef = useRef("");
  const lasRef = useRef("");

  return (
    <Container>
      <WrapperLogin>
        <h3>
          <b>Sign Up</b>
        </h3>
        <Input width={520} ref={loginRef} type="email" placeholder="Email" />
        <Input width={520} ref={firRef} type="text" placeholder="Firstname" />
        <Input width={520} ref={lasRef} type="text" placeholder="Lastname" />
        <Input width={520} ref={pwRef} type="password" placeholder="Password" />
        <Button onClick={onClick} width={"100%"}>
          Register
        </Button>
      </WrapperLogin>
    </Container>
  );
};
export default SignUp;
