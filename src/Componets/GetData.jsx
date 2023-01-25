import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const GetData = () => {
  const {data} = useSelector((state) => state);
  return (
    <div>
      {data &&
        data.map((e) => {
          return (
            <Flex key={e.id}>
              <Text>{e.text}</Text>
            </Flex>
          );
        })}
    </div>
  );
};

const Text = styled.h2`
  color: black;
  border: 1px solid black;
  width: 20rem;
  padding: 3px;
  color: palevioletred;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
`;

export default GetData;
