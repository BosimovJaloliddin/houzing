import styled, { css } from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bad } from "../../assets/icons/bad.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as size } from "../../assets/icons/size.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as dumbbell } from "../../assets/icons/dumbbell.svg";
import { ReactComponent as dryer } from "../../assets/icons/dryer.svg";
import { ReactComponent as barbecue } from "../../assets/icons/barbecue.svg";

const Wrapper = styled.div`
  display: flex;
  gap: ${({ gap }) => gap && `${gap}px`};
  max-width: 1440px;
  padding: var(--padding);
  margin: auto;
`;
const Container = styled.div`
  width: 100%;
  flex: ${({ flx }) => flx && flx};
`;
const Content = styled.div`
  display: flex;
  justify-content: ${({ jc }) => (jc ? jc : "space-between")};
  align-items: ${({ align }) => align && align};
  margin-top: ${({ top }) => top && `${top}px`};
`;
Content.Title = styled.div`
  color: #0d263b;
  font-size: 18px;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 28px;
  margin-top: 48px;
`;
const ContentItem = styled.div`
  display: flex;
  flex-direction: ${({ cl }) => cl && "column"};
  align-items: ${({ align }) => align && align};
  gap: ${({ gap }) => gap && `${gap}px`};
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;
const Title = styled.div`
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;
  color: #0d263b;
`;

const Price = styled.div`
  color: #0d263b;
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
const Description = styled.div`
  max-width: 880px;
  height: 224px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  margin-top: 16px;
`;
const UserInfo = styled.div`
  border-radius: 3px;
  border: 1px solid var(--border, #e6e9ec);
  background: #fff;
  padding: 24px;
`;
const Message = styled.div`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 20px;
  color: #0d263b;
`;
const MessageInfo = styled.div`
  font-size: 14px;
  font-family: Montserrat;
  line-height: 20px;
  color: #696969;
`;

// Imgs
const WrapImg = styled.div`
  display: flex;
  max-width: 1440px;
  padding: var(--padding);
  margin: 24px auto;
  gap: 20px;
`;
const ItemsImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const ItemImg = styled.div`
  position: relative;
`;
const HouseImg = styled.img`
  max-width: ${({ width }) => width && `${width}px`};
  max-height: ${({ height }) => height && `${height}px`};
`;
const Blur = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 44px;
  letter-spacing: -0.72px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
`;

const Icons = styled.div``;

const styleSvg = css`
  width: 19px;
  height: 19px;
  margin-bottom: 7px;
  path {
    fill: #696969;
  }
`;
const IconStyle = css`
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 13px;
  background: var(--bg-1, #f6f8f9);
  &:active {
    transform: scale(0.89);
  }
`;

Icons.Share = styled(share)`
  ${IconStyle}
  margin:0 10px 0 26px
`;
Icons.Love = styled(love)`
  ${IconStyle}
  margin:0 10px 0 26px
`;
Icons.Bad = styled(bad)`
  ${styleSvg}
`;
Icons.Car = styled(car)`
  ${styleSvg}
`;
Icons.Size = styled(size)`
  ${styleSvg}
`;
Icons.Bath = styled(bath)`
  ${styleSvg}
`;
Icons.Calendar = styled(calendar)`
  ${styleSvg}
`;

Icons.Calendar = styled(calendar)`
  ${styleSvg}
  margin-right: 10px;
`;
Icons.Dumbbell = styled(dumbbell)`
  ${IconStyle}
  margin-right: 10px;
`;
Icons.Dryer = styled(dryer)`
  ${IconStyle}
  margin-right: 10px;
`;
Icons.Dryer = styled(barbecue)`
  ${IconStyle}
  margin-right: 10px;
`;

export {
  Container,
  Wrapper,
  Content,
  ContentItem,
  Title,
  Price,
  Description,
  UserInfo,
  Message,
  MessageInfo,
  Icons,
  WrapImg,
  ItemImg,
  ItemsImg,
  HouseImg,
  Blur,
};
