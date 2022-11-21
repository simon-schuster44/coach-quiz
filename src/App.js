import "./App.css";
import styled from "styled-components";
import Question from "./Components/Question/Question";
import { useState } from "react";

function App() {
  const [questionId, setQuestionId] = useState(0);
  return (
    <div className="App">
      <Headline>DAS GROSSE FISCHE-QUIZ DER OBSKUREN INFORMATIONEN</Headline>
      <Button
        questionId={questionId}
        onClick={() => setQuestionId(questionId + 1)}
      >
        START
      </Button>

      <Question id={questionId} setQuestionId={setQuestionId} />
      <Footer>
        <p>Created with ☕️ by B4CKSL4SH</p>
      </Footer>
    </div>
  );
}

export default App;

const Headline = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f45b69;
  box-shadow: 2px 2px 8px black;
  margin: 10px;
  height: 100px;
  border-radius: 20px;
`;

const Button = styled.button`
  transition: 0.5s;
  width: 200px;
  height: 100px;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: #028090;
  color: #e4fde1;
  font-size: 40px;
  border-radius: 12px;
  border: none;
  box-shadow: 2px 2px 8px black;
  z-index: 1;
  ${(props) => (props.questionId === 0 ? "" : "z-index: -1; opacity: 0")}
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  color: #e4fde1;
`;
