import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";

import axios from "axios";

import Header from "./Header";
import Display from "./Display";

const url =
  "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";

function App() {
  // const [qna, setQna] = useState();

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     const data = response.data.results;
  //   });
  // }, []);

  // if (!qna) return null;

  return (
    <Box>
      <Header />
      {/* {qna.map((result) => {
        return (
          <div>
            <h2>{result.question}</h2>
            <ul>
              {result.incorrect_answers.map((options) => (
                <li> {options} </li>
              ))}
              <li>{result.correct_answer}</li>
            </ul>
          </div>
        );
      })} */}
      <Display />
    </Box>
  );
}

export default App;
