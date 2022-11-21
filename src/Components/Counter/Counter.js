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
    <div className="App">
      <CounterDiv>Countdown: {counter}</CounterDiv>
    </div>
  );
}

const CounterDiv = styled.div`
  color: #e4fde1;
`;
