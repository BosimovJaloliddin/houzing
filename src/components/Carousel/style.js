import styled from "styled-components";
import { ReactComponent as arrow } from "../../assets/icons/arrow.svg";
import { ReactComponent as bad } from "../../assets/icons/bad.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as size } from "../../assets/icons/size.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";

const Container = styled.div`
  position: relative;
  max-height: fit-content;
  margin-top: 10px;
`;

const Arrow = styled(arrow)`
  position: absolute;
  width: 45px;
  height: 45px;
  top: 50%;
  padding: 16px;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 50%;
  z-index: 2;
  color: white;
  cursor: pointer;
  transition: all 0.7s;
  box-shadow: 0, 0, 5px, #888;
  left: ${({ left }) => left && "20px"};
  right: ${({ left }) => !left && "20px"};
  transform: ${({ left }) => left && "rotate(180deg)"};
  &:hover {
    background: rgba(0, 0, 0, 0.4);
    box-shadow: 0 0 4px #888;
  }
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
  background: rgba(0, 0, 0, 0.4);
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
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  letter-spacing: -0.02em;
  color: #ffffff;
  margin-bottom: 8px;
`;
Content.Desc = styled.div``;
Content.Price = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 36px;
  letter-spacing: -0.02em;
  color: #ffffff;
`;
const HouseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin: 24px;
`;
HouseInfo.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;
const Icons = styled.div``;

Icons.Bad = styled(bad)``;
Icons.Car = styled(car)``;
Icons.Size = styled(size)``;
Icons.Bath = styled(bath)``;

export { Container, Arrow, CarouselImg, Blur, Content, HouseInfo, Icons };
