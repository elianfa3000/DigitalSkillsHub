import QuizQuestion from "../../components/askstructure/QuizQuestion.js";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./TestMate.module.css";

type QuestionData = {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
  feedbackMessage: string;
};

const TestMate: React.FC = (data) => {

  const questions = [
    {
      id: 1,
      question: "¿Para qué sirve GeoGebra?",
      options: [
        "Para ver películas en línea",
        "Para representar conceptos matemáticos de forma visual",
        "Para crear documentos de texto",
      ],
      correctOption: "Para representar conceptos matemáticos de forma visual",
      feedbackMessage:
        "¡Incorrecto! GeoGebra permite representar funciones, figuras geométricas y realizar simulaciones interactivas de temas matemáticos.",
    },
    {
      id: 2,
      question: "¿Qué herramienta en GeoGebra permite modificar valores numéricos en tiempo real?",
      options: [
        "El deslizador",
        "La barra de herramientas",
        "El sistema de coordenadas",
      ],
      correctOption: "El deslizador",
      feedbackMessage:
        "¡Incorrecto! El deslizador permite representar números o ángulos y modificarlos en tiempo real para ver sus efectos.",
    },
    {
      id: 3,
      question: "¿Cuál de estas funciones se puede realizar en Excel?",
      options: [
        "Insertar una animación 3D",
        "Grabar audios para una exposición",
        "Crear gráficos con datos numéricos",
      ],
      correctOption: "Crear gráficos con datos numéricos",
      feedbackMessage:
        "¡Incorrecto! En Excel se pueden hacer tablas y representar datos con gráficos como columnas, líneas o circulares.",
    },
    {
      id: 4,
      question: "¿Qué tipo de problemas ayuda a resolver Photomath?",
      options: [
        "Problemas de redacción",
        "Problemas matemáticos mostrando los pasos",
        "Problemas de historia",
      ],
      correctOption: "Problemas matemáticos mostrando los pasos",
      feedbackMessage:
        "¡Incorrecto! Photomath resuelve ejercicios matemáticos paso a paso, como ecuaciones, fracciones y más.",
    },
    {
      id: 5,
      question: "¿Por qué es importante no usar Photomath solo para copiar respuestas?",
      options: [
        "Porque puede dañar el celular",
        "Porque así se pierde el aprendizaje",
        "Porque solo funciona con internet",
      ],
      correctOption: "Porque así se pierde el aprendizaje",
      feedbackMessage:
        "¡Incorrecto! Photomath debe ser una herramienta de apoyo, no un medio para copiar sin entender los ejercicios.",
    },
    {
      id: 6,
      question: "¿Qué función permite encontrar el promedio de un conjunto de datos en Excel?",
      options: [
        "SUMA()",
        "PROMEDIO()",
        "RESTAR()",
      ],
      correctOption: "PROMEDIO()",
      feedbackMessage:
        "¡Incorrecto! La función PROMEDIO() calcula el valor medio de un conjunto de números en Excel.",
    },
  ];

  const { level } = useAuth()
  const navigation = useNavigate();

  const [answers, setAnswers] = useState<{ [key: number]: boolean }>({});

  const handleAnswer = (id: number, isCorrect: boolean) => {
    setAnswers((prev) => ({ ...prev, [id]: isCorrect }))
  };
  console.log(answers)

  const allCorrect = questions.every((q) => answers[q.id] === true);


  const level3 = async () => {


    if (level == 6) {
      await updateLevel({ level: 7 });

      navigation("/classes")
      window.location.reload();
    } else {
      navigation("/classes")
    }
  };
  //style={{ marginTop: "-30px" }}

  return (
    <>
      <Navbar outside={data} />
      <div className={styles.Container}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Evaluación de Matematicas</h2>
          <h3 className={styles.subTitle}>
            ¡Bienvenido a tu evaluación! Esta prueba está diseñada para comprobar cuánto has aprendido sobre el uso de herramientas digitales aplicadas a las Matemáticas.
          </h3>

          <ul style={{ marginLeft: "20px" }}>
            <li className={styles.tipText}>
              Responde con atención cada pregunta relacionada con GeoGebra, Excel y Photomath. Estas herramientas te ayudan a representar gráficamente, resolver problemas y analizar datos.
            </li>

            <li className={styles.tipText}>
              <strong> Recuerda:</strong>   cada respuesta incorrecta es una oportunidad para reforzar tus conocimientos. ¡Confía en lo que aprendiste y da lo mejor de ti!
            </li>
          </ul>
          <p className={styles.tipText}>
            ¡Mucho éxito!
          </p>
        </div>

        <div className={styles.testContainer}>
          {questions.map((q) => (
            <QuizQuestion

              key={q.id}
              question={q.question}
              options={q.options}
              correctOption={q.correctOption}
              feedbackMessage={q.feedbackMessage}
              onAnswer={(isCorrect) => handleAnswer(q.id, isCorrect)}


            />
          ))}
          <button
            onClick={level3}
            disabled={!allCorrect}
            className={`${styles.continueButton} ${allCorrect ? styles.enabled : ""}`}
          >
            Continuar
          </button>

        </div>
      </div>
    </>
  );
};

export default TestMate;

