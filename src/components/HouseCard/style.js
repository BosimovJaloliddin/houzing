import styled, { css } from "styled-components";
import { ReactComponent as bad } from "../../assets/icons/bad.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as size } from "../../assets/icons/size.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as setting } from "../../assets/icons/card-arrow.svg";

const Container = styled.div`
  width: 100%;
  max-width: 380px;
  min-width: 330px;
  height: 429px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  transition: all 0.6s;
  box-shadow: 0 0 5px #e6e9ec;
  &:hover {
    box-shadow: 0 0 17px #e6e9ec;
  }
  cursor: pointer;
`;

const CardWrapp = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

const CardImg = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 200px;
  margin-bottom: 24px;
`;
const CardItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 18px;
  margin-bottom: 16px;
`;
CardItems.Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const styleSvg = css`
  width: 19px;
  height: 14px;
  margin-bottom: 7px;
  path {
    fill: #696969;
  }
`;
const Bad = styled(bad)`
  ${styleSvg}
`;
const Car = styled(car)`
  ${styleSvg}
`;
const Size = styled(size)`
  ${styleSvg}
`;
const Bath = styled(bath)`
  ${styleSvg}
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
`;
Footer.Item = styled.div`
  display: flex;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  cursor: pointer;
`;

const Price = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;
const Love = styled(love)`
  width: 35px;
  height: 35px;
  padding: 10px;
  background: #f6f8f9;
  border-radius: 60px;
  &:hover {
    transform: scale(0.9);
  }
`;
const Setting = styled(setting)`
  width: 35px;
  height: 35px;
  padding: 10px;
`;

export {
  Container,
  CardWrapp,
  CardImg,
  CardItems,
  Bad,
  Car,
  Size,
  Bath,
  Footer,
  Price,
  Love,
  Setting,
};
