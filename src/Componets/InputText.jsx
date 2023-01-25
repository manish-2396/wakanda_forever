import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { postText } from "../Redux/action";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

const InputText = () => {
  const dispatch = useDispatch();
  const textRef = useRef("");

  const handleClick = () => {
    if (textRef.current) {
      const payload = {
        id: uuidv4(),
        text: textRef.current,
      };
      dispatch(postText(payload));
    }
  };

  return (
    <Box>
      <Input
        required
        type="text"
        placeholder="Enter Something..."
        onChange={(e) => (textRef.current = e.target.value)}
      />
      <Button type="submit" onClick={handleClick}>
        Submit
      </Button>
    </Box>
  );
};

const Box = styled.div`
  margin-top: 2rem;
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: 1px solid black;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const Button = styled.button`
  font-size: 18px;
  padding: 10px;
  background: papayawhip;
  border: 1px solid black;
  color: palevioletred;
`;

export default InputText;
