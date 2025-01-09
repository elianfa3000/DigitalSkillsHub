import QuizQuestion from "../../components/askstructure/QuizQuestion";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./Test2.module.css";

type QuestionData = {
    id: number;
    question: string;
    options: string[];
    correctOption: string;
    feedbackMessage: string;
};

const Test2: React.FC = (data) => {
    const questions = [

        {
            id: 1,
            question: "¿Qué es un principio fundamental para evaluar si una fuente es confiable?",
            options: [
                "Que la fuente tenga muchas imágenes llamativas",
                "Que cite evidencias y fuentes de respaldo",
                "Que sea un sitio web popular",
            ],
            correctOption: "Que cite evidencias y fuentes de respaldo",
            feedbackMessage:
                "¡Incorrecto! Una fuente es confiable cuando cita evidencias o estudios para respaldar su información.",
        },
        {
            id: 2,
            question: "¿Por qué es importante citar adecuadamente una fuente al usar su información?",
            options: [
                "Para darle crédito al autor y evitar el plagio",
                "Para hacer que tu trabajo parezca más importante",
                "Para rellenar espacio en tu documento",
            ],
            correctOption: "Para darle crédito al autor y evitar el plagio",
            feedbackMessage:
                "¡Incorrecto! Citar fuentes es importante para reconocer el trabajo de otros y evitar el plagio.",
        },


        {
            id: 3,
            question: "¿En qué consiste el método Cornell para tomar notas?",
            options: [
                "Dividir la hoja en tres secciones: ideas clave, notas y resumen",
                "Escribir todo el contenido de la clase de forma lineal",
                "Usar solo dibujos para resumir la información",
            ],
            correctOption: "Dividir la hoja en tres secciones: ideas clave, notas y resumen",
            feedbackMessage:
                "¡Incorrecto! El método Cornell consiste en dividir la hoja en tres partes: ideas clave, notas y un resumen final.",
        },
        {
            id: 4,
            question: "¿Cómo funciona la técnica Pomodoro?",
            options: [
                "Estudiar durante 25 minutos y descansar 5",
                "Estudiar sin parar por una hora",
                "Estudiar durante 10 minutos y descansar 20",
            ],
            correctOption: "Estudiar durante 25 minutos y descansar 5",
            feedbackMessage:
                "¡Incorrecto! La técnica Pomodoro consiste en estudiar durante 25 minutos y descansar 5 antes de continuar.",
        },

        {
            id: 5,
            question: "¿Qué es el pensamiento crítico?",
            options: [
                "Creer en todo lo que se lee sin cuestionarlo",
                "Analizar la información cuidadosamente antes de aceptarla como verdadera",
                "Evitar hacer preguntas y solo aceptar hechos",
            ],
            correctOption: "Analizar la información cuidadosamente antes de aceptarla como verdadera",
            feedbackMessage:
                "¡Incorrecto! El pensamiento crítico consiste en cuestionar y analizar la información antes de aceptarla como verdadera.",
        },
        {
            id: 6,
            question: "¿Qué significa identificar un sesgo en una fuente de información?",
            options: [
                "Que la fuente presenta solo una parte de la historia",
                "Que la fuente es completamente imparcial",
                "Que la información es objetiva y respaldada por evidencia",
            ],
            correctOption: "Que la fuente presenta solo una parte de la historia",
            feedbackMessage:
                "¡Incorrecto! Un sesgo ocurre cuando la información presentada es parcial o muestra solo una parte de la historia.",
        },
        {
            id: 7,
            question: "¿Por qué es importante buscar varias fuentes para verificar información?",
            options: [
                "Para hacer que tu investigación sea más larga",
                "Para confirmar si la información es precisa y objetiva",
                "Para confundir al lector con múltiples versiones",
            ],
            correctOption: "Para confirmar si la información es precisa y objetiva",
            feedbackMessage:
                "¡Incorrecto! Consultar múltiples fuentes ayuda a verificar si la información es consistente y precisa.",
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
        if (level == 2) {
            await updateLevel({ level: 3 });

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
                    <h2 className={styles.sectionTitle}>Evaluación 2</h2>
                    <h3 className={styles.subTitle}>
                        ¡Bienvenido a tu segunda evaluación! Esta prueba está diseñada para evaluar tus habilidades en la evaluación de información, técnicas de estudio y pensamiento crítico.

                    </h3>

                    <ul style={{ marginLeft: "20px" }}>
                        <li className={styles.tipText}>
                            Lee cada pregunta con atención y selecciona la respuesta correcta.
                        </li>

                        <li className={styles.tipText}>
                            <strong> Recuerda:</strong> No se trata solo de responder bien, sino de reflexionar sobre lo aprendido. Cada error es una oportunidad para mejorar y seguir creciendo.

                        </li>
                    </ul>
                    <p className={styles.tipText}>
                        ¡Confía en ti mismo y da lo mejor de ti!
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

export default Test2;
