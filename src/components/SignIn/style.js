import styled from "styled-components";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 2rem auto;
  padding: var(--padding);
`;
const WrapImg = styled.div``;
const Img = styled.img``;
const WrapperLogin = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Input = styled.input`
  width: 300px;
  height: 42px;
  outline: none;
  padding-left: 10px;
  border: none;
  border-bottom: 3px solid rgba(0, 0, 0, 0.5);
`;
const PushLogin = styled.button`
  font-size: 18px;
  font-weight: 500;
  width: 300px;
  height: 38px;
  margin-top: 28px;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    transform: scale(0.98);
  }
`;

export { Container, WrapImg, Img, WrapperLogin, Input, PushLogin };
