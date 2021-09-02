import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";

import axios from "axios";

import Header from "./Header";

import Question from "./Question";
import Options from "./Options";
import Icons from "./Icons";

const client = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple",
});

function App() {
  const [qna, setQna] = useState([]);

  // useEffect(() => {
  //   axios.get(url).then((response) => {
  //     setQna(response.data.results);
  //   });
  // }, []);

  const index = 0;

  useEffect(() => {
    async function getPost() {
      const response = await client.get();
      setQna(response.data.results);
    }
    getPost();
  }, []);

  const [questions, incorrectOptions, correctOptions] = [
    qna.map((data) => {
      return data.question;
    }),
    qna.map((data) => {
      return data.incorrect_answers;
    }),
    qna.map((data) => {
      return data.correct_answer;
    }),
  ];

  const options = incorrectOptions.map((currentOptions, index) => {
    return [...currentOptions, correctOptions[index]];
  });

  const shuffledOptions = options.map((option) => {
    return option
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  });

  const [score, setScore] = useState();

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
      <div className="question-box">
        <Question index={index} question={questions} />
        <Options index={index} options={shuffledOptions} />
        <Icons />
      </div>

      {/* <Display questions={questions} shuffledOptions={shuffledOptions} /> */}
    </Box>
  );
}

export default App;
