import QuizQuestion from "../../components/askstructure/QuizQuestion.js";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./TestStudies.module.css";

type QuestionData = {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
  feedbackMessage: string;
};

const TestStudies: React.FC = (data) => {
  const questions = [
    {
      id: 1,
      question: "¿Para qué sirve TimeToast?",
      options: [
        "Para diseñar mapas interactivos",
        "Para crear líneas de tiempo con eventos organizados",
        "Para almacenar archivos en la nube",
      ],
      correctOption: "Para crear líneas de tiempo con eventos organizados",
      feedbackMessage:
        "¡Incorrecto! TimeToast sirve para crear líneas de tiempo interactivas que ayudan a representar procesos históricos o cronológicos.",
    },
    {
      id: 2,
      question: "¿Qué debes hacer primero para usar TimeToast?",
      options: [
        "Descargar la app desde Play Store",
        "Tener una cuenta de Google",
        "Registrarte en su sitio web oficial",
      ],
      correctOption: "Registrarte en su sitio web oficial",
      feedbackMessage:
        "¡Incorrecto! Para empezar a usar TimeToast necesitas crear una cuenta gratuita en su página web.",
    },
    {
      id: 3,
      question: "¿Qué función principal cumple Canva en Estudios Sociales?",
      options: [
        "Crear hojas de cálculo con fórmulas",
        "Diseñar infografías, líneas de tiempo y carteles visuales",
        "Traducir textos de manera automática",
      ],
      correctOption: "Diseñar infografías, líneas de tiempo y carteles visuales",
      feedbackMessage:
        "¡Incorrecto! Canva permite crear materiales visuales como infografías o carteles para explicar procesos sociales o históricos.",
    },
    {
      id: 4,
      question: "¿Qué necesitas para comenzar a usar Canva?",
      options: [
        "Un código de invitación de un profesor",
        "Un correo electrónico para registrarte",
        "Tener conocimientos de programación",
      ],
      correctOption: "Un correo electrónico para registrarte",
      feedbackMessage:
        "¡Incorrecto! Solo necesitas registrarte con un correo para comenzar a crear diseños en Canva.",
    },
    {
      id: 5,
      question: "¿Qué puedes agregar en una línea de tiempo hecha en TimeToast?",
      options: [
        "Videos y canciones",
        "Eventos con fecha, descripción e imágenes",
        "Mapas con ubicaciones GPS",
      ],
      correctOption: "Eventos con fecha, descripción e imágenes",
      feedbackMessage:
        "¡Incorrecto! En TimeToast puedes incluir eventos con fechas, títulos, descripciones y también imágenes para mayor claridad.",
    },
    {
      id: 6,
      question: "¿Qué tipo de actividad se puede hacer con Canva en esta materia?",
      options: [
        "Escribir código HTML",
        "Diseñar una infografía sobre un evento histórico",
        "Crear una tabla de multiplicar",
      ],
      correctOption: "Diseñar una infografía sobre un evento histórico",
      feedbackMessage:
        "¡Incorrecto! Con Canva puedes crear infografías visuales para representar las causas y consecuencias de eventos sociales o históricos.",
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


    if (level == 7) {
      await updateLevel({ level: 8 });

      navigation("/congratulations")
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
          <h2 className={styles.sectionTitle}>Evaluación de Estudios Sociales</h2>
          <h3 className={styles.subTitle}>
            ¡Bienvenido a tu evaluación! Esta prueba pondrá a prueba tus conocimientos sobre el uso de herramientas digitales para representar eventos históricos y diseñar recursos visuales educativos.

          </h3>

          <ul style={{ marginLeft: "20px" }}>
            <li className={styles.tipText}>
              Has aprendido a usar plataformas como <strong>TimeToast</strong> para crear líneas de tiempo y <strong>Canva</strong> para diseñar infografías y carteles sobre temas sociales y geográficos.
            </li>

            <li className={styles.tipText}>
              Lee cada pregunta con atención y responde basándote en lo que aprendiste. Recuerda: cada error es una oportunidad para mejorar.
            </li>
          </ul>
          <p className={styles.tipText}>
            <strong>¡Mucho éxito en esta evaluación!</strong>
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

export default TestStudies;

