import styled from "styled-components";
import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  /* padding: 20px calc(${v.smSpacing} * 4); */
  margin: 0 auto;
  flex: 5;
  padding: 20px;

  h1 {
    margin-top: ${v.xxlSpacing};
    font-size: 16px;
  }
`;
