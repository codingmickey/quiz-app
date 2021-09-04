import React from "react";

import Question from "./Question";
import Options from "./Options";

function Answers(props) {
  console.log(props.userSelected[1]);
  return (
    <div className="box">
      <h1 style={{ fontSize: "2.5rem" }}> Test Completed!</h1>
      <p>
        Your score is{" "}
        <span style={{ color: "#242038", fontWeight: "700" }}>
          {props.finalScore}
        </span>{" "}
        {props.finalScore > 2 ? <span>😍</span> : <span>😥</span>}
      </p>
      <h2>Your Selected Options and the Correct Answers are given below 👇</h2>
      <br />
      <br />
      {props.questions.map((question, index) => {
        return (
          <div className>
            <hr />
            <Question index={index} question={question} />
            <Options
              path="answers"
              index={index}
              changeOption={props.changeOption}
              options={props.options[index]}
              userSelected={props.userSelected}
            />
            <p>Correct Answer: {props.correctOptions[index]}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Answers;
