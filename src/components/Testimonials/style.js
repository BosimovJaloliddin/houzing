import styled from "styled-components";
import { ReactComponent as message } from "../../assets/icons/why-message.svg";
import { ReactComponent as location } from "../../assets/icons/why-location.svg";
import { ReactComponent as home } from "../../assets/icons/why-home.svg";
import { ReactComponent as phone } from "../../assets/icons/why-phone.svg";

const Container = styled.div`
  background: #f5f7fc;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  padding: 48px 130px;
`;
const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
const ItemInfo = styled.div`
  max-width: 380px;
  height: 197px;
  padding: 40px 48px 61px 48px;
  border-radius: 3px;
  background: var(--color-5, #fff);
  box-shadow: 0px 10px 50px 0px rgba(13, 38, 59, 0.1);

  color: var(--text-color, #696969);
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`;
const ItemTitle = styled.div`
  font-family: "Montserrat";
  color: var(--color-2, #0d263b);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  margin-top: 32px;
`;
const ItemSubtitle = styled.div`
  font-family: "Montserrat";
  color: var(--text-color, #696969);
  text-align: center;
  font-size: 16px;
  line-height: 24px;
`;

export { Container, Wrapper, Title, Item, ItemInfo, ItemTitle, ItemSubtitle };
