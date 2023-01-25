import React from "react";
import GetData from "./GetData";
import InputText from "./InputText";
import styled from "styled-components";

const Home = () => {
  return (
    <Box>
      <InputText />
      <GetData />
    </Box>
  );
};

const Box = styled.div`
  margin-top: 2rem;
`;

export default Home;
