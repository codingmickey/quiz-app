import React from "react";
import Button from "@material-ui/core/Button";

function Starting(props) {
  return (
    <div className="box start">
      <h1 style={{ fontSize: "3rem" }}>Welcome!🥳</h1>
      <h1 style={{ fontSize: "2.5rem" }}>To Start Press the button below ⬇</h1>
      <p>All the best! </p>
      <div className="font-icon-wrapper" onClick={() => props.onStart()}>
        <Button
          variant="contained"
          size="large"
          style={{ backgroundColor: "#7AFDD6", color: "#050505" }}
        >
          Start!
        </Button>
      </div>
    </div>
  );
}

export default Starting;
