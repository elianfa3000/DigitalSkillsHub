import QuizQuestion from "../../components/askstructure/QuizQuestion";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./Test1.module.css";

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
      question: "¿Qué es un navegador web?",
      options: [
        "Un programa que permite explorar Internet",
        "Una red social para compartir contenido",
        "Un dispositivo para conectarse a WiFi",
      ],
      correctOption: "Un programa que permite explorar Internet",
      feedbackMessage:
        "¡Incorrecto! Un navegador web es un programa que permite explorar Internet y acceder a sitios web.",
    },
    {
      id: 2,
      question: "¿Qué indica el candado en la barra de direcciones del navegador?",
      options: [
        "Que el sitio web es seguro y usa HTTPS",
        "Que el sitio es popular",
        "Que el navegador tiene actualizaciones pendientes",
      ],
      correctOption: "Que el sitio web es seguro y usa HTTPS",
      feedbackMessage:
        "¡Incorrecto! El candado indica que el sitio web usa una conexión segura (HTTPS).",
    },
    {
      id: 3,
      question: "¿Cuál es un ejemplo de una búsqueda avanzada en Google?",
      options: [
        '"teoría del Big Bang"',
        "¿Qué es la teoría del Big Bang?",
        "Big Bang site:google.com",
      ],
      correctOption: '"teoría del Big Bang"',
      feedbackMessage:
        "¡Incorrecto! Usar comillas, como en 'teoría del Big Bang', permite buscar una frase exacta.",
    },
    {
      id: 4,
      question: "¿Qué es una contraseña segura?",
      options: [
        "123456",
        "Tu nombre y fecha de nacimiento",
        "Una combinación de letras, números y símbolos",
      ],
      correctOption: "Una combinación de letras, números y símbolos",
      feedbackMessage:
        "¡Incorrecto! Una contraseña segura debe combinar letras, números y símbolos, y no debe incluir información personal.",
    },
    {
      id: 5,
      question: "¿Qué es el phishing?",
      options: [
        "Un tipo de malware que afecta dispositivos móviles",
        "Una técnica para robar información personal",
        "Un proceso de autenticación segura",
      ],
      correctOption: "Una técnica para robar información personal",
      feedbackMessage:
        "¡Incorrecto! El phishing es una técnica que los estafadores usan para engañar y robar información personal.",
    },
    {
      id: 6,
      question:
        "¿Qué método puedes usar para buscar resultados específicos en un sitio web?",
      options: [
        "Usar comillas en la búsqueda",
        "Usar site: seguido del sitio web",
        "Usar filetype:",
      ],
      correctOption: "Usar site: seguido del sitio web",
      feedbackMessage:
        "¡Incorrecto! Para buscar resultados específicos en un sitio, usa 'site: seguido del sitio web'.",
    },
    {
      id: 7,
      question:
        "¿Qué práctica ayuda a mantener tu privacidad mientras navegas en línea?",
      options: [
        "Compartir tu ubicación solo en aplicaciones confiables",
        "Usar la navegación en modo incógnito",
        "Guardar tus contraseñas en el navegador",
      ],
      correctOption: "Usar la navegación en modo incógnito",
      feedbackMessage:
        "¡Incorrecto! Usar el modo incógnito ayuda a proteger tu privacidad al no guardar historial ni cookies.",
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


    if (level == 1) {
      await updateLevel({ level: 2 });

      navigation("/classes")
      window.location.reload();
    }
  };
  //style={{ marginTop: "-30px" }}

  return (
    <>
      <Navbar outside={data} />
      <div className={styles.Container}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Evaluación 1</h2>
          <h3 className={styles.subTitle}>
            ¡Bienvenido a tu primera evaluación! Esta prueba está diseñada para poner a prueba tus conocimientos sobre navegación web, búsqueda de información y seguridad en línea.

          </h3>

          <ul style={{ marginLeft: "20px" }}>
            <li className={styles.tipText}>
              Lee cada pregunta con atención y selecciona la respuesta correcta.
            </li>

            <li className={styles.tipText}>
              <strong> Recuerda:</strong>   No tengas miedo de equivocarte, cada error es una oportunidad para aprender.
            </li>
          </ul>
          <p className={styles.tipText}>
            ¡Buena suerte y haz tu mejor esfuerzo!
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

