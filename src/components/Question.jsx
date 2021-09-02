import React from "react";

function Question(props) {
  // props.questions;  [questions]
  return (
    <div>
      <h2>
        Question 1<span style={{ fontSize: "large" }}>/5</span>
      </h2>
      <p>{props.question[0]}</p>
    </div>
  );
}

export default Question;
