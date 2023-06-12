import styled from "styled-components";
import { ReactComponent as house } from "../../assets/img/house.svg";
import { ReactComponent as filter } from "../../assets/img/setting.svg";
import { ReactComponent as search } from "../../assets/img/search.svg";

const Container = styled.div`
  display: flex;
  gap: 20px;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
`;

const Icons = styled.div``;
Icons.Search = styled(search)`
  margin-right: 10px;
`;
Icons.House = styled(house)`
  margin-right: 10px;
`;
Icons.Filter = styled(filter)`
  margin-right: 10px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: white;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  margin-bottom: 10px;
`;
const Section = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  margin-bottom: 20px;
`;

export { Container, Icons, MenuWrapper, Section };
