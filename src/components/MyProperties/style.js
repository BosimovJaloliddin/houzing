import styled, { css } from "styled-components";
import { Table } from "antd";
import { ReactComponent as garbage } from "../../assets/icons/garbage.svg";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";

const Container = styled.div`
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  padding: var(--padding);
  margin: auto;
`;
const Wrapper = styled.div`
  display: flex;
  gap: 16px;
`;
const Section = styled.div`
  display: flex;
  flex-direction: ${({ cl }) => (cl ? "column" : "row")};
  justify-content: space-between;
  margin-top: ${({ mt }) => mt && `${mt}px`};
  margin-bottom: ${({ mb }) => mb && `${mb}px`};
`;

const HouseImg = styled.img`
  width: 113px;
  height: 100px;
  flex-shrink: 0;
`;
const TableAnt = styled(Table)``;

const Icons = styled.div``;

const iconStyle = css`
  width: 35px;
  height: 35px;
  padding: 8px;
  border-radius: 15px;
  background: #f6f8f9;
  cursor: pointer;
  &:active {
    & path {
      fill: red;
      transform: scale(0.9);
    }
  }
`;

Icons.Del = styled(garbage)`
  ${iconStyle}
`;
Icons.Edit = styled(edit)`
  ${iconStyle}
`;

export { Wrapper, Container, Section, HouseImg, TableAnt, Icons };
