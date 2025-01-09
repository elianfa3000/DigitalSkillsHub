import QuizQuestion from "../../components/askstructure/QuizQuestion.js";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./TestLanguage.module.css";

type QuestionData = {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
  feedbackMessage: string;
};

const Test1: React.FC = (data) => {
  const questions = [
    {
      id: 1,
      question: "¿Para qué se utiliza Microsoft Word?",
      options: [
        "Para editar videos",
        "Para redactar documentos con formato académico",
        "Para crear simulaciones científicas",
      ],
      correctOption: "Para redactar documentos con formato académico",
      feedbackMessage:
        "¡Incorrecto! Word es un procesador de texto que te permite crear documentos formales como informes, ensayos y trabajos académicos.",
    },
    {
      id: 2,
      question: "¿Qué ventaja principal ofrece Google Docs frente a Word?",
      options: [
        "Permite programar en JavaScript",
        "Funciona sin internet",
        "Permite edición colaborativa en tiempo real",
      ],
      correctOption: "Permite edición colaborativa en tiempo real",
      feedbackMessage:
        "¡Incorrecto! Google Docs permite que varias personas editen el mismo documento al mismo tiempo desde distintos dispositivos.",
    },
    {
      id: 3,
      question: "¿Para qué sirve LanguageTool?",
      options: [
        "Para traducir documentos automáticamente",
        "Para corregir errores gramaticales y de estilo",
        "Para escribir textos en otros idiomas automáticamente",
      ],
      correctOption: "Para corregir errores gramaticales y de estilo",
      feedbackMessage:
        "¡Incorrecto! LanguageTool analiza tu texto y señala errores ortográficos, gramaticales y de estilo para ayudarte a mejorar tu escritura.",
    },
    {
      id: 4,
      question: "¿Qué es Coggle?",
      options: [
        "Una herramienta para crear mapas mentales",
        "Un programa de edición de audio",
        "Un corrector ortográfico avanzado",
      ],
      correctOption: "Una herramienta para crear mapas mentales",
      feedbackMessage:
        "¡Incorrecto! Coggle es una herramienta digital para organizar ideas mediante esquemas visuales o mapas mentales.",
    },
    {
      id: 5,
      question: "¿Cuál es la principal función de Mendeley?",
      options: [
        "Realizar presentaciones con animaciones",
        "Generar referencias bibliográficas de forma automática",
        "Grabar clases en vivo desde el navegador",
      ],
      correctOption: "Generar referencias bibliográficas de forma automática",
      feedbackMessage:
        "¡Incorrecto! Mendeley permite insertar citas en estilo APA, MLA, etc., y crear bibliografías con solo unos clics.",
    },
    {
      id: 6,
      question: "¿Qué herramienta te permite acceder a Google Docs, Sheets y Slides desde un solo lugar?",
      options: [
        "Google Earth",
        "Google Meet",
        "Google Drive",
      ],
      correctOption: "Google Drive",
      feedbackMessage:
        "¡Incorrecto! Google Drive es el lugar donde se almacenan y gestionan todas las herramientas de oficina de Google como Docs, Sheets y Slides.",
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


    if (level == 4) {
      await updateLevel({ level: 5 });

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
          <h2 className={styles.sectionTitle}>Evaluación de Lengua y Literatura</h2>
          <h3 className={styles.subTitle}>
            ¡Bienvenido a esta evaluación! En esta prueba demostrarás lo que aprendiste sobre el uso de herramientas digitales para mejorar tu escritura, colaborar en documentos y organizar ideas.

          </h3>

          <ul style={{ marginLeft: "20px" }}>
            <li className={styles.tipText}>
              A lo largo del módulo usaste herramientas como Word, Google Docs, Mendeley, LanguageTool y más. Ahora es momento de poner en práctica ese conocimiento.
            </li>

            <li className={styles.tipText}>
              Lee cada pregunta con atención, reflexiona y selecciona la mejor opción. Si te equivocas, recuerda que puedes volver a repasar el contenido.
            </li>
          </ul>
          <p className={styles.tipText}>
            <strong>¡Mucho éxito, tú puedes lograrlo!</strong>
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

export default Test1;

