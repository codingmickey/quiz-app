import React from "react";

import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function Options() {
  return (
    <Grid class="mcq-options" item sm={6}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="mcq"
          name="gender1"
          //   value={value}
          //   onChange={handleChange}
        >
          <FormControlLabel
            value="a"
            control={<Radio color="primary" />}
            label={
              <span style={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
                Wamen
              </span>
            }
          />
          <FormControlLabel
            value="b"
            control={<Radio color="primary" />}
            label={
              <span style={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
                Male
              </span>
            }
          />
          <FormControlLabel
            value="c"
            control={<Radio color="primary" />}
            label={
              <span style={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
                Other
              </span>
            }
          />
          <FormControlLabel
            value="d`"
            control={<Radio color="primary" />}
            label={
              <span style={{ fontSize: "1.5rem", paddingLeft: "1%" }}>
                None of the above
              </span>
            }
          />
        </RadioGroup>
      </FormControl>
    </Grid>
  );
}

export default Options;
