import React, { useState } from "react";
import styles from "./QuizQuestion.module.css";

type QuestionProps = {
  question: string;
  options: string[];
  correctOption: string;
  feedbackMessage: string;
  onAnswer: (isCorrect: boolean) => void;

};

const QuizQuestion: React.FC<QuestionProps> = ({
  question,
  options,
  correctOption,
  feedbackMessage,
  onAnswer,

}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    if (option === correctOption) {
      setFeedback("¡Respuesta correcta!");
      onAnswer(true);

    } else {
      setFeedback(feedbackMessage);
      onAnswer(false);
    }
  };

  const feedbackColor = selectedOption === correctOption ? "green" : "red";

  return (
    <div className={styles.container}>
      <h3 className={styles.question}>{question}</h3>
      <div className={styles.options}>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleOptionClick(option)}
            className={styles.optionButton}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && (
        <p className={styles.feedback} style={{ color: feedbackColor }}>
          {feedback}
        </p>
      )}
    </div>
  );
};

export default QuizQuestion;
