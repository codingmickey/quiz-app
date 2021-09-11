import React, { useState } from 'react';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import he from 'he';

function Options(props) {
  const [value, setValue] = useState(null);

  function handleChange(event) {
    const currentValue = event.target.value;
    setValue(currentValue);
    if (props.path !== 'answers') {
      props.changeOption((prevValue) => {
        return { ...prevValue, [props.index]: currentValue };
      });
    }
  }

  return (
    <div>
      <FormControl component="fieldset" fullWidth={true}>
        <RadioGroup
          aria-label="mcq"
          name="mcqOptions"
          value={value}
          onChange={handleChange}
        >
          {(props.options ? props.options : []).map((option, i) => {
            return (
              <FormControlLabel
                className="option"
                key={i}
                value={option}
                checked={option === props.userSelected[props.index]}
                control={<Radio className="radio-button" value={option} />}
                label={
                  <span style={{ fontSize: '2rem' }}>{he.decode(option)}</span>
                }
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </div>
  );
}

export default Options;
