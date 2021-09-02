import React, { useState } from "react";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function Options(props) {
  const [value, setValue] = useState(null);

  function handleChange(event) {
    const value = event.target.value;
    setValue(value);
  }

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="mcq"
          name="mcqOptions"
          value={value}
          onChange={handleChange}
        >
          {(props.options[0] ? props.options[0] : []).map((option, index) => {
            return (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio color="primary" />}
                label={<span style={{ fontSize: "2rem" }}>{option}</span>}
              />
            );
          })}
          {/*           
          <FormControlLabel
            value="b"
            control={<Radio color="primary" />}
            label={<span style={{ fontSize: "1.5rem" }}>Male</span>}
          />
          <FormControlLabel
            value="c"
            control={<Radio color="primary" />}
            label={<span style={{ fontSize: "1.5rem" }}>Other</span>}
          />
          <FormControlLabel
            value="d`"
            control={<Radio color="primary" />}
            label={
              <span style={{ fontSize: "1.5rem" }}>None of the above</span>
            }
          /> */}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Options;
