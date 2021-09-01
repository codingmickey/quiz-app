import React from "react";
import { Grid } from "@material-ui/core";

import Question from "./Question";
import Options from "./Options";

function Display() {
  return (
    <div className="question-box">
      <Grid container>
        <Question />
        <Options />
      </Grid>
    </div>
  );
}

export default Display;
