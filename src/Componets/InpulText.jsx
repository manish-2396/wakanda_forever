import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postText } from "../Redux/action";

const InpulText = () => {
  const dispatch = useDispatch();
  const textRef = useRef('');
  const data = useSelector(state => state)
  console.log(data)

  const handleClick = () => {
    dispatch(postText(textRef.current));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Something..."
        onChange={(e) => (textRef.current = e.target.value)}
      />
      <button type="submit" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
};

export default InpulText;
