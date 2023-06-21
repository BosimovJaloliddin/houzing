import styled, { css } from "styled-components";
import { ReactComponent as email } from "../../assets/icons/footer-email.svg";
import { ReactComponent as location } from "../../assets/icons/footer-location.svg";
import { ReactComponent as phone } from "../../assets/icons/footer-phone.svg";
import { ReactComponent as instagram } from "../../assets/icons/footer-instagram.svg";
import { ReactComponent as facebook } from "../../assets/icons/footer-facebook.svg";
import { ReactComponent as linkedin } from "../../assets/icons/footer-linkedin.svg";
import { ReactComponent as twitter } from "../../assets/icons/footer-twitter.svg";

const Container = styled.div`
  background: #0d263b;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  padding: 0 130px;
`;
const Border = styled.div`
  max-width: 1440px;
  height: 1px;
  background: #fff;
  margin: auto;
`;
const Items = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  gap: 40px;
  padding-top: 48px;
  padding-bottom: 24px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  text-align: center;
  padding: 7px;
`;
const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
`;
const SubTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 21px;
  margin-bottom: 20px;
`;
const WrappInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
const Info = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
`;
const Iternet = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 22px;
`;

const IconHover = css`
  width: 36px;
  height: 36px;
  margin-right: 37px;
  padding: 7px 4px;
  cursor: pointer;
  transition: all 2s;
  &:hover {
    path {
      fill: #0061df;
    }
    box-shadow: 0 0 4px #fff;
  }
`;
const Contents = styled.div`
  display: flex;
  align-items: center;
  height: 68px;
  cursor: ${({ logo }) => logo && "pointer"};
  .active {
    color: #97e94f;
  }
`;
const Logo = styled.img`
  padding-right: 12px;
`;
const LogoName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: white;
`;

const Icons = styled.div``;
Icons.Email = styled(email)``;
Icons.Location = styled(location)``;
Icons.Phone = styled(phone)``;
Icons.Instagram = styled(instagram)`
  ${IconHover}
`;
Icons.Facebook = styled(facebook)`
  ${IconHover}
`;
Icons.Linkedin = styled(linkedin)`
  ${IconHover}
`;
Icons.Twitter = styled(twitter)`
  ${IconHover}
`;

export {
  Container,
  Wrapper,
  Border,
  Items,
  Item,
  Icons,
  Title,
  SubTitle,
  WrappInfo,
  Info,
  Iternet,
  Contents,
  Logo,
  LogoName,
};
