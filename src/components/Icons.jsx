import React from "react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import { Button } from "@material-ui/core";

function Icons(props) {
  document.addEventListener("keydown", (event) => {
    if (
      props.index < props.numberOfQuestions - 1 &&
      event.key === "ArrowRight"
    ) {
      props.onChange("rightClick");
    } else if (props.index > 0 && event.key === "ArrowLeft") {
      props.onChange("leftClick");
    } else if (
      props.index === props.numberOfQuestions - 1 &&
      event.key === "Enter"
    ) {
      props.onSubmit();
    }
  });
  return (
    <div>
      <div className="prev">
        {props.index > 0 && (
          <ChevronLeftRoundedIcon
            onClick={() => {
              props.onChange("leftClick");
            }}
            style={{ fontSize: "4rem", color: "#242038", cursor: "pointer" }}
          />
        )}
      </div>
      <div className="next">
        {props.index < props.numberOfQuestions - 1 && (
          <ChevronRightRoundedIcon
            onClick={() => {
              props.onChange("rightClick");
            }}
            style={{ fontSize: "4rem", color: "#242038", cursor: "pointer" }}
          />
        )}
      </div>

      {props.index === props.numberOfQuestions - 1 && (
        <div className="button-container">
          <Button
            onClick={() => props.onSubmit()}
            variant="contained"
            size="large"
            style={{ backgroundColor: "#77FF94" }}
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

export default Icons;
