import React from "react";
import Table from "../table/Table";
import { SHomeContainer, SListContainer } from "./styles";

const HomePage = () => {
  return (
    <SHomeContainer>
      <SListContainer>
        <h2 className="list-title">Latest Experiments</h2>
        <Table />
      </SListContainer>
    </SHomeContainer>
  );
};

export default HomePage;
