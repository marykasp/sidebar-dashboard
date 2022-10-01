import { Link } from "react-router-dom";
import styled from "styled-components";
import { btnReset, v } from "../../styles/variables";
// import { Link } from "react-router-dom";

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

export const SDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.bg3};
  margin: ${v.mdSpacing} 0;
`;

export const SLinkContainer = styled.div`
  background: transparent;
  border-radius: ${v.borderRadius};
  margin: 8px 0;

  :hover {
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
  }
`;

export const SLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  font-size: 16px;
  padding: calc(${v.smSpacing} - 2px) 0;
`;

export const SLinkIcon = styled.div`
  padding: ${v.smSpacing} ${v.mdSpacing};
  display: flex;
  svg {
    font-size: 20px;
  }
`;

export const SLinkLabel = styled.span`
  display: block;
  flex: 1;
  margin-left: ${v.smSpacing};
`;

export const SLinkNotification = styled.div`
  font-size: 14px;
  padding: calc(${v.smSpacing} / 2) ${v.smSpacing};
  border-radius: calc(${v.borderRadius} / 2);
  background: ${({ theme }) => theme.primary};
  color: white;
  margin-right: ${v.mdSpacing};
`;

export const STheme = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  position: absolute;
  bottom: 40px;
  width: calc(${v.sidebarWidth} - 50px);
`;

export const SThemeLabel = styled.span`
  display: block;
  flex: 1;
`;

export const SThemeToggler = styled.button`
  ${btnReset}
  margin: 0 auto;
  cursor: pointer;
  width: 36px;
  height: 20px;
  border-radius: 10px;
  background: ${({ theme }) => theme.bg3};
  position: relative;
`;

export const SToggleThumb = styled.div`
  height: 18px;
  width: 18px;
  position: absolute;
  top: 1px;
  bottom: 1px;
  transition: 0.2s ease right;
  right: calc(100% - 18px - 1px);
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.bg3};
  background: ${({ theme }) => theme.bg};
`;
