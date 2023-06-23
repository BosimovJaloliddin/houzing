import styled, { css } from "styled-components";
import { ReactComponent as share } from "../../assets/icons/share.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as bad } from "../../assets/icons/bad.svg";
import { ReactComponent as car } from "../../assets/icons/car.svg";
import { ReactComponent as size } from "../../assets/icons/size.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

const Container = styled.div`
  max-width: 1440px;
  padding: var(--padding);
  margin: auto;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${({ align }) => align && align};
  margin-top: ${({ top }) => top && top};
`;
Content.Title = styled.div`
  color: var(--color-2, #0d263b);
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
`;
const Title = styled.div`
  color: var(--text-1, #0d263b);
  font-size: 24px;
  font-family: Montserrat;
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;
`;

const Price = styled.div`
  color: var(--color-2, #0d263b);
  font-size: 24px;
  font-family: "Montserrat";
  font-weight: 600;
  line-height: 32px;
  letter-spacing: -0.48px;
`;
const Description = styled.div`
  width: 880px;
  height: 224px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%);
  margin-top: 16px;
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

export { Container, Content, ContentItem, Title, Price, Description, Icons };
