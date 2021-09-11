import React from 'react';
import he from 'he';

function Question(props) {
  // props.questions;  [questions]

  // console.log(props.questions);

  const isCorrect = (props.isCorrect ? props.isCorrect : []).includes(
    props.index
  );
  let selectedStyles;
  if (props.tag === 'answers') {
    selectedStyles = {
      color: isCorrect ? '#72B01D' : '#E84855',
    };
  } else {
    selectedStyles = {};
  }
  return (
    <div>
      <h2>
        Question {props.index + 1}
        <span style={{ fontSize: 'large' }}>/{props.questions.length}</span>
      </h2>
      <p style={selectedStyles}>{he.decode(props.questions[props.index])}</p>
    </div>
  );
}

export default Question;
