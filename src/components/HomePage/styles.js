import styled from "styled-components";

export const SHomeContainer = styled.div`
  /* width: 100vw; */
`;

export const SListContainer = styled.div`
  box-shadow: 2px 4px 10px 1px ${({ theme }) => theme.bgAlpha};
  padding: 20px;
  margin: 20px;
  background: ${({ theme }) => theme.bg};

  .list-title {
    font-weight: 500;
    margin-bottom: 15px;
    color: ${({ theme }) => theme.text};
  }
`;
