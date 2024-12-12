import QuizQuestion from "../../components/askstructure/QuizQuestion";
import React, { useState } from "react";

import styles from "./Test1.module.css";

type QuestionData = {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
  feedbackMessage: string;
};

const Test1: React.FC = () => {
  const questions: QuestionData[] = [
    {
      id: 1,
      question: "¿Cuál es la capital de Francia?",
      options: ["Madrid", "París", "Roma"],
      correctOption: "París",
      feedbackMessage: "¡Incorrecto! La capital de Francia es París.",
    },
    {
      id: 2,
      question: "¿Cuál es la capital de España?",
      options: ["Madrid", "París", "Roma"],
      correctOption: "Madrid",
      feedbackMessage: "¡Incorrecto! La capital de España es Madrid.",
    },
    {
      id: 3,
      question: "¿Cuál es la capital de Italia?",
      options: ["Madrid", "París", "Roma"],
      correctOption: "Roma",
      feedbackMessage: "¡Incorrecto! La capital de Italia es Roma.",
    },
  ];

  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswer = (id: number, isCorrect: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: isCorrect }))
  };
  console.log(answers)
  const [ff, setff] = useState<string>("");
  const allCorrect = questions.every((q) => answers[q.id] === true);

  return (
    <div className={styles.testContainer}>
      {questions.map((q) => (
        <QuizQuestion

          key={q.id}
          question={q.question}
          options={q.options}
          correctOption={q.correctOption}
          feedbackMessage={q.feedbackMessage}
          onAnswer={(isCorrect) => handleAnswer(q.id, isCorrect)}
          ff={(ff) => setff(ff)}
        />
      ))}
      <button
        onClick={() => alert("¡Todas las respuestas son correctas!")}
        disabled={!allCorrect}
        className={`${styles.continueButton} ${allCorrect ? styles.enabled : ""}`}
      >
        Continuar
      </button>
      <button onClick={() => console.log(ff)}>jjjjjjjj</button>
    </div>
  );
};

export default Test1;

