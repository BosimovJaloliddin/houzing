import {
  Container,
  Wrapper,
  Items,
  Item,
  Title,
  SubTitle,
  Icons,
  WrappInfo,
  Info,
  Iternet,
  Contents,
  Logo,
  LogoName,
  Border,
} from "./style";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/logo/logo.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Wrapper>
        <Items>
          <Item>
            <Title>Contact Us</Title>
            <SubTitle>
              <Icons.Location />
              <Info>
                329 Queensberry Street, North Melbourne VIC 3051, Australia.
              </Info>
            </SubTitle>
            <SubTitle>
              <Icons.Phone />
              <Info>123 456 7890</Info>
            </SubTitle>
            <SubTitle>
              <Icons.Email />
              <Info>support@houzing.com</Info>
            </SubTitle>
            <Iternet>
              <Icons.Facebook />
              <Icons.Twitter />
              <Icons.Instagram />
              <Icons.Linkedin />
            </Iternet>
          </Item>
          <Item>
            <Title>Discover</Title>
            <WrappInfo>
              <Info>Chicago</Info>
              <Info>Los Angeles</Info>
              <Info>Miami</Info>
              <Info>New York</Info>
            </WrappInfo>
          </Item>
          <Item>
            <Title>Lists by Category</Title>
            <WrappInfo>
              <Info>Apartments</Info>
              <Info>Condos</Info>
              <Info>Houses</Info>
              <Info>Office</Info>
              <Info>Retail</Info>
              <Info>Villas</Info>
            </WrappInfo>
          </Item>
          <Item>
            <Title>Lists by Category</Title>
            <WrappInfo>
              <Info>About Us</Info>
              <Info>Terms & Conditions</Info>
              <Info>Support Center</Info>
              <Info>Contact Us</Info>
            </WrappInfo>
          </Item>
        </Items>
      </Wrapper>
      <Border />
      <Wrapper>
        <Contents onClick={() => navigate("/")} logo="true">
          <Logo src={logoImage} />
          <LogoName>Houzing</LogoName>
        </Contents>
        <Info>Copyright © 2021 CreativeLayers. All Right Reserved.</Info>
      </Wrapper>
    </Container>
  );
};

export default Footer;
