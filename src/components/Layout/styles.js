import styled from "styled-components";
import { v } from "../../styles/variables";

export const SLayout = styled.div`
  display: flex;
`;

export const SMain = styled.main`
  padding: calc(${v.smSpacing} * 10);

  h1 {
    font-size: 16px;
  }
`;
