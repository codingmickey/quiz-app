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

  // Api data fetching
  useEffect(() => {
    async function getPost() {
      const response = await client.get();
      setQna(response.data.results);
    }
    getPost();
  }, []);

  // Destructuring the questions and the options
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

  // Shuffling the options
  const options = incorrectOptions.map((currentOptions, index) => {
    return [...currentOptions, correctOptions[index]];
  });
  const shuffledOptions = options.map((option) => {
    return option
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  });

  // Keepin the track of the index of the question
  const [index, setIndex] = useState(0);

  function onChangingQ(key) {
    if (key === "leftClick") {
      setIndex(index - 1);
    } else if (key === "rightClick") {
      setIndex(index + 1);
    }
  }

  // Keeping the track of scores
  const [score, setScore] = useState();

  return (
    <Box>
      <Header />
      <div className="question-box">
        <Question index={index} question={questions[index]} />
        <Options index={index} options={shuffledOptions[index]} />
        <Icons index={index} onChange={onChangingQ} />
      </div>
    </Box>
  );
}

export default App;
