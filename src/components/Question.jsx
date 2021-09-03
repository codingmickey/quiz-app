import React from "react";

function Question(props) {
  // props.questions;  [questions]
  return (
    <div>
      <h2>
        Question {props.index + 1}
        <span style={{ fontSize: "large" }}>/5</span>
      </h2>
      <p>{props.question}</p>
    </div>
  );
}

export default Question;
