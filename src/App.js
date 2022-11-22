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

      <TextContainer
        left="15%"
        top="200px"
        rotate="-25deg"
        questionId={questionId}
      >
        Wow!
      </TextContainer>
      <TextContainer
        top="60%"
        left="20%"
        rotate="-8deg"
        questionId={questionId}
      >
        It's real!
      </TextContainer>
      <TextContainer
        top="60%"
        left="70%"
        rotate="-15deg"
        questionId={questionId}
      >
        Super!
      </TextContainer>
      <TextContainer
        top="150px"
        left="75%"
        rotate="10deg"
        questionId={questionId}
      >
        Amazing!
      </TextContainer>
      <TextContainer top="80%" left="40%" rotate="5deg" questionId={questionId}>
        NEW!
      </TextContainer>
      <TextContainer top="80%" left="85%" rotate="5deg" questionId={questionId}>
        OMG!
      </TextContainer>
      <TextContainer
        top="87%"
        left="10%"
        rotate="-3deg"
        questionId={questionId}
      >
        Unbelievable!
      </TextContainer>

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
  cursor: pointer;
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

const TextContainer = styled.div`
  background-color: #f45b69;
  padding: 5px 10px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  border-radius: 20px;
  box-shadow: 0 0 12px black;
  position: absolute;
  transition: 0.5s;
  ${(props) => (props.questionId === 0 ? "" : "z-index: -1; opacity: 0")};
  ${(props) => (props.left ? `left: ${props.left}` : "")};
  ${(props) => (props.top ? `top: ${props.top}` : "")};
  ${(props) => (props.rotate ? `transform: rotate(${props.rotate})` : "")};
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  font-size: 12px;
  color: #e4fde1;
`;
