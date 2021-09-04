import React from "react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import { Button } from "@material-ui/core";

function Icons(props) {
  return (
    <div>
      <div className="icons-container">
        {props.index > 0 && (
          <ChevronLeftRoundedIcon
            onClick={() => {
              props.onChange("leftClick");
            }}
            style={{ fontSize: "4rem", color: "#242038", cursor: "pointer" }}
          />
        )}
        {props.index < 4 && (
          <ChevronRightRoundedIcon
            onClick={() => {
              props.onChange("rightClick");
            }}
            style={{ fontSize: "4rem", color: "#242038", cursor: "pointer" }}
          />
        )}
      </div>
      {props.index === 4 && (
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
