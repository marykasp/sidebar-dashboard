import styled from "styled-components";
import { v } from "../../styles/variables";

export const SNavbar = styled.div`
  background: ${({ theme }) => theme.bg};
  /* width: ${({ isOpen }) => (!isOpen ? "90vw" : "80vw")}; */
  height: 50px;
  border-radius: 8px;
  margin-top: ${v.mdSpacing};
`;

export const SNavbarList = styled.ul`
  list-style: none;
`;

export const SNavbarItem = styled.li``;
