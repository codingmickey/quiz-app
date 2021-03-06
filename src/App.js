import React, { useEffect, useState } from 'react';
import Box from '@material-ui/core/Box';

import axios from 'axios';

import Header from './components/Header/Header';

import Question from './components/Display/Question';
import Options from './components/Display/Options';
import Icons from './components/Icons/Icons';
import Starting from './components/Starting';
import Answers from './components/Answers';

function App() {
  // Starting the quiz
  const [isStarted, setIsStarted] = useState(false);
  function onStart() {
    setIsStarted(true);
  }
  const [isCompleted, setIsCompleted] = useState(false);
  function onComplete() {
    let i;
    for (i = 0; i < questions.length; i++) {
      if (!userSelected.hasOwnProperty(i)) {
        window.alert(`Please Complete Question No. ${Number(i + 1)}`);
        setIndex(i);
        break;
      }
    }
    if (i === questions.length) {
      setIsCompleted(true);
      updateScore();
    }
  }

  const [qna, setQna] = useState([]);

  // Api data fetching
  const client = axios.create({
    baseURL: 'https://opentdb.com/api.php?amount=5&difficulty=easy',
  });

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

  // console.log(correctOptions);

  // Shuffling the options
  let options = incorrectOptions.map((currentOptions, index) => {
    return [...currentOptions, correctOptions[index]];
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    options = options.map((option) => {
      return option
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
    });
  }, [options]);

  // Keepin the track of the index of the question
  const [index, setIndex] = useState(0);

  function onChangingQ(key) {
    if (key === 'leftClick') {
      setIndex(index - 1);
    } else if (key === 'rightClick') {
      setIndex(index + 1);
    }
  }

  // Keeping the track of scores
  const [score, setScore] = useState();
  const [userCorrect, setUserCorrect] = useState([]);

  function updateScore() {
    setScore(() => {
      let currentValue = 0;
      correctOptions.forEach((correctOption, index) => {
        if (correctOption === userSelected[index]) {
          currentValue++;
          setUserCorrect((prevValue) => {
            return [...prevValue, index];
          });
        }
      });
      return currentValue;
    });
  }

  // Selecting options of user
  const [userSelected, setUserSelected] = useState({});

  return (
    <Box>
      <Header />
      {isStarted ? (
        isCompleted ? (
          <Answers
            finalScore={score}
            questions={questions}
            options={options}
            userSelected={userSelected}
            correctOptions={correctOptions}
            changeOption={setUserSelected}
            correctAnswers={userCorrect}
          />
        ) : (
          <div className="box">
            <Question index={index} questions={questions} />
            <Options
              index={index}
              options={options[index]}
              changeOption={setUserSelected}
              userSelected={userSelected}
            />
            <Icons
              index={index}
              numberOfQuestions={questions.length}
              onChange={onChangingQ}
              onSubmit={onComplete}
            />
          </div>
        )
      ) : (
        <Starting onStart={onStart} />
      )}
    </Box>
  );
}

export default App;
