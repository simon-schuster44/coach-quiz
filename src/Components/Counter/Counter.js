import { useState, useEffect } from "react";
import styled from "styled-components";

export default function Counter({ startCounter }) {
  const [counter, setCounter] = useState(60);

  useEffect(() => {
    if (startCounter) {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  return (
    <div>
      <CounterDiv>{counter}</CounterDiv>
    </div>
  );
}

const CounterDiv = styled.div`
  color: #e4fde1;
  font-weight: bold;
  font-size: 40px;
  ${(props) => (props.children < 11 ? "color: #f45b69" : "")}
`;
