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
`;
const Items = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 40px;
`;
const Item = styled.div`
  max-width: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  text-align: center;
  padding: 7px;
`;
const Icons = styled.div``;
Icons.Message = styled(message)`
  margin-bottom: 16px;
`;
Icons.Location = styled(location)`
  margin-bottom: 16px;
`;
Icons.Home = styled(home)`
  margin-bottom: 16px;
`;
Icons.Phone = styled(phone)`
  margin-bottom: 16px;
`;
export { Container, Wrapper, Title, Items, Item, Icons };
