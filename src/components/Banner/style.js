import styled from "styled-components";

const Container = styled.div`
  position: relative;
  max-height: fit-content;
  margin-top: 96px;
`;

const CarouselImg = styled.img`
  width: 100%;
  background-image: center;
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
`;
Content.Title = styled.h1`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
  margin-bottom: 48px;
`;

export { Container, CarouselImg, Blur, Content };
