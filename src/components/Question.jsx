import React from "react";
import Grid from "@material-ui/core/Grid";

function Question() {
  return (
    <Grid item sm={6}>
      <h2>
        Question 1<span style={{ fontSize: "large" }}>/5</span>
      </h2>
      <p>
        In the Video Game, Half-life, what type of US military force starts
        clearing out the Black Mesa Research Facility?
      </p>
    </Grid>
  );
}

export default Question;
