import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 280px;
  height: 350px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  cursor: pointer;
`;

const CardImg = styled.img`
  max-width: 280px;
  min-width: 250px;
  max-height: 350px;
  min-height: 320px;
`;
const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
`;
const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

export { Container, CardImg, Blur, Content };
