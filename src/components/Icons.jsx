import React from "react";
import ChevronRightRoundedIcon from "@material-ui/icons/ChevronRightRounded";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import { Button } from "@material-ui/core";

function Icons() {
  function leftClick() {
    console.log("Clicked to left");
  }

  function rightClick() {
    console.log("Clicked to right");
  }

  function onSubmit() {
    console.log("Submit the test");
  }

  return (
    <div>
      <div className="icons-container">
        <ChevronLeftRoundedIcon
          onClick={leftClick}
          style={{ fontSize: "4rem", color: "#242038" }}
        />
        <ChevronRightRoundedIcon
          onClick={rightClick}
          style={{ fontSize: "4rem", color: "#242038" }}
        />
      </div>
      <div className="button-container">
        <Button
          onClick={onSubmit}
          variant="contained"
          size="large"
          style={{ backgroundColor: "#56E39F" }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Icons;
