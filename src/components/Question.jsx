import React from "react";

function Question(props) {
  // props.questions;  [questions]
  const isCorrect = (props.isCorrect ? props.isCorrect : []).includes(
    props.index
  );
  let selectedStyles;
  if (props.tag === "answers") {
    selectedStyles = {
      color: isCorrect ? "#72B01D" : "#E84855",
    };
  } else {
    selectedStyles = {};
  }
  return (
    <div>
      <h2>
        Question {props.index + 1}
        <span style={{ fontSize: "large" }}>/5</span>
      </h2>
      <p style={selectedStyles}>{props.question}</p>
    </div>
  );
}

export default Question;
