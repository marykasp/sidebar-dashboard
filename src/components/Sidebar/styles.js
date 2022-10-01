import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";

export const SSidebar = styled.div`
  width: ${v.sidebarWidth};
  background: ${({ theme }) => theme.bg};
  height: 100vh;
  padding: ${v.lgSpacing};
  position: relative;
`;

export const SLogo = styled.div`
  width: 52px;

  img {
    max-height: 100%;
    height: 100px;
  }

  cursor: pointer;
  margin-bottom: ${v.lgSpacing};
`;

export const SSearch = styled.div`
  background: ${({ theme }) => theme.bgAlpha};
  border: 1px solid ${({ theme }) => theme.bg3};
  border-radius: ${v.borderRadius};
  input {
    padding: ${v.smSpacing} ${v.smSpacing};
    font-family: inherit;
    letter-spacing: inherit;
    font-size: 14px;
    width: 100%;
    outline: none;
    border: none;
    color: inherit;
    background: transparent;
  }
  display: flex;
`;

export const SSearchIcon = styled.button`
  ${btnReset};
  padding: ${v.smSpacing};
  display: flex;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
`;
