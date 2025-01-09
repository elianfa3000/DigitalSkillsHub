import QuizQuestion from "../../components/askstructure/QuizQuestion.js";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./TestSciences.module.css";

type QuestionData = {
  id: number;
  question: string;
  options: string[];
  correctOption: string;
  feedbackMessage: string;
};

const TestSciences: React.FC = (data) => {
  const questions = [
    {
      id: 1,
      question: "¿Qué es PhET Simulations?",
      options: [
        "Un programa para editar imágenes",
        "Una herramienta para crear documentos",
        "Una plataforma de simulaciones científicas interactivas",
      ],
      correctOption: "Una plataforma de simulaciones científicas interactivas",
      feedbackMessage:
        "¡Incorrecto! PhET es una plataforma que permite simular fenómenos de física, química, biología y más, de forma visual e interactiva.",
    },
    {
      id: 2,
      question: "¿Qué puedes hacer con la simulación 'Construye un Átomo'?",
      options: [
        "Diseñar moléculas en 3D",
        "Armar átomos usando protones, neutrones y electrones",
        "Hacer mezclas químicas en un matraz virtual",
      ],
      correctOption: "Armar átomos usando protones, neutrones y electrones",
      feedbackMessage:
        "¡Incorrecto! Esta simulación permite crear átomos colocando protones, neutrones y electrones correctamente.",
    },
    {
      id: 3,
      question: "¿Cuál es el propósito de la simulación 'Parejas de fracciones'?",
      options: [
        "Resolver ecuaciones algebraicas",
        "Relacionar formas visuales con fracciones numéricas",
        "Crear tablas de datos",
      ],
      correctOption: "Relacionar formas visuales con fracciones numéricas",
      feedbackMessage:
        "¡Incorrecto! Esta simulación permite emparejar fracciones con sus representaciones visuales como círculos o rectángulos.",
    },
    {
      id: 4,
      question: "¿Qué puedes observar con la simulación 'Selección Natural'?",
      options: [
        "Cómo cambian los ecosistemas debido al clima",
        "Cómo evolucionan los conejos en diferentes entornos",
        "Cómo construyen las plantas sus raíces",
      ],
      correctOption: "Cómo evolucionan los conejos en diferentes entornos",
      feedbackMessage:
        "¡Incorrecto! En esta simulación puedes ver cómo se adapta la población de conejos según su entorno y las condiciones ambientales.",
    },
    {
      id: 5,
      question: "¿Para qué sirve Google Earth en el estudio de Ciencias Naturales?",
      options: [
        "Para jugar en mapas interactivos",
        "Para visualizar el planeta Tierra y explorar ecosistemas",
        "Para descargar libros de biología",
      ],
      correctOption: "Para visualizar el planeta Tierra y explorar ecosistemas",
      feedbackMessage:
        "¡Incorrecto! Google Earth permite observar ecosistemas, volcanes, océanos y otros elementos geográficos en 3D.",
    },
    {
      id: 6,
      question: "¿Cuál es una actividad recomendada al usar Google Earth?",
      options: [
        "Investigar una zona natural cercana y describir sus características",
        "Buscar redes sociales desde el mapa",
        "Medir la velocidad de tu internet",
      ],
      correctOption: "Investigar una zona natural cercana y describir sus características",
      feedbackMessage:
        "¡Incorrecto! Una actividad propuesta es explorar tu comunidad y describir su ecosistema usando imágenes satelitales.",
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


    if (level == 5) {
      await updateLevel({ level: 6 });

      navigation("/classes")
      window.location.reload();
    } else {
      navigation("/classes")
    }
  };


  return (
    <>
      <Navbar outside={data} />
      <div className={styles.Container}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Evaluación de Ciencias Naturales</h2>
          <h3 className={styles.subTitle}>
            ¡Bienvenido a tu tercera evaluación! En esta prueba pondrás en práctica lo que has aprendido sobre el uso de herramientas digitales para explorar conceptos de física, química, biología y geografía.

          </h3>

          <ul style={{ marginLeft: "20px" }}>
            <li className={styles.tipText}>
              Responde cuidadosamente cada pregunta sobre simulaciones PhET y el uso de Google Earth. Recuerda que estas herramientas te permiten aprender de manera visual, interactiva y segura.
            </li>

            <li className={styles.tipText}>
              Si te equivocas, no te preocupes. Cada error es una oportunidad para mejorar. ¡Haz tu mejor esfuerzo!
            </li>
          </ul>
          <p className={styles.tipText}>
            <strong>¡Éxitos en esta evaluación!</strong>
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

export default TestSciences;

