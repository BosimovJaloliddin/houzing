import styled from "styled-components";
import { ReactComponent as del } from "../../assets/icons/garbage.svg";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: var(--padding);
  margin: 34px auto;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ cl }) => (cl ? "column" : "row")};
  gap: 24px;
  border-radius: 3px;
  border: 1px solid #e6e9ec;
  background: #fff;
  box-shadow: 0px 10px 30px 0px rgba(13, 38, 59, 0.05);
  padding: 24px 30px 48px 30px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ cl }) => (cl ? "column" : "row")};
  align-items: ${({ al }) => al && `center`};
  gap: ${({ gap }) => gap && `${gap}px`};
  /* justify-content: space-between; */
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

const Icons = styled.div``;

Icons.Del = styled(del)`
  width: 13px;
  height: 13px;
  &:active {
    & path {
      fill: red;
    }
  }
`;

export { Wrapper, Container, Section, Icons };
