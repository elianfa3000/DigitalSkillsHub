import QuizQuestion from "../../components/askstructure/QuizQuestion";
import Navbar from "../../components/navbar/Navbar.jsx"
import React, { useState } from "react";
import { updateLevel } from "../../api/auth.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx"
import styles from "./Test3.module.css";

type QuestionData = {
    id: number;
    question: string;
    options: string[];
    correctOption: string;
    feedbackMessage: string;
};

const Test3: React.FC = (data) => {
    const questions = [
        {
            id: 1,
            question: "¿Qué es Google Drive?",
            options: [
                "Un navegador web para buscar información",
                "Un servicio de almacenamiento en la nube",
                "Un editor de texto básico",
            ],
            correctOption: "Un servicio de almacenamiento en la nube",
            feedbackMessage:
                "¡Incorrecto! Google Drive es una plataforma de almacenamiento en la nube que permite guardar y organizar archivos.",
        },
        {
            id: 2,
            question: "¿Cómo puedes organizar tus archivos en Google Drive de manera eficiente?",
            options: [
                "Creando carpetas por asignatura o proyecto",
                "Dejando todos los archivos en la misma carpeta",
                "Eliminando archivos después de usarlos",
            ],
            correctOption: "Creando carpetas por asignatura o proyecto",
            feedbackMessage:
                "¡Incorrecto! La mejor forma de organizarse es creando carpetas con nombres descriptivos y colores por asignatura o proyecto.",
        },
        {
            id: 3,
            question: "¿Cuál es una de las principales ventajas de Google Docs?",
            options: [
                "No permite colaborar con otras personas",
                "Permite la edición colaborativa en tiempo real",
                "Solo se puede usar sin conexión",
            ],
            correctOption: "Permite la edición colaborativa en tiempo real",
            feedbackMessage:
                "¡Incorrecto! Google Docs permite a varios usuarios editar un documento simultáneamente en tiempo real.",
        },
        {
            id: 4,
            question: "¿Para qué se utiliza la sección 'Actividad' en Microsoft Teams?",
            options: [
                "Para realizar videollamadas",
                "Para ver notificaciones importantes y mensajes recientes",
                "Para compartir archivos con tu equipo",
            ],
            correctOption: "Para ver notificaciones importantes y mensajes recientes",
            feedbackMessage:
                "¡Incorrecto! La sección Actividad muestra notificaciones como menciones y cambios importantes en tus equipos.",
        },
        {
            id: 5,
            question: "¿Cuál es la función principal de la sección 'Chat' en Microsoft Teams?",
            options: [
                "Enviar mensajes privados y compartir archivos con compañeros",
                "Configurar el calendario de reuniones",
                "Realizar encuestas para el equipo",
            ],
            correctOption: "Enviar mensajes privados y compartir archivos con compañeros",
            feedbackMessage:
                "¡Incorrecto! El chat permite enviar mensajes privados, compartir archivos y resolver dudas de forma directa.",
        },
        {
            id: 6,
            question: "¿Qué es un 'canal' dentro de la sección Equipos de Microsoft Teams?",
            options: [
                "Un chat privado entre dos personas",
                "Un espacio dedicado a temas o proyectos específicos dentro de un equipo",
                "Una carpeta para almacenar archivos",
            ],
            correctOption: "Un espacio dedicado a temas o proyectos específicos dentro de un equipo",
            feedbackMessage:
                "¡Incorrecto! Un canal es un espacio temático dentro de un equipo, ideal para organizar las discusiones por temas.",
        },
        {
            id: 7,
            question: "¿Para qué se utiliza la sección 'Calendario' en Microsoft Teams?",
            options: [
                "Para crear memes y stickers personalizados",
                "Para programar reuniones y recordar eventos importantes",
                "Para cambiar el tema visual de la aplicación",
            ],
            correctOption: "Para programar reuniones y recordar eventos importantes",
            feedbackMessage:
                "¡Incorrecto! El calendario de Teams permite agendar reuniones, ver clases programadas y gestionar tu tiempo.",
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


    const level4 = async () => {


        if (level == 3) {
            await updateLevel({ level: 4 });
            navigation("/classes")
            window.location.reload();
        } else { navigation("/classes") }
    };


    return (
        <>
            <Navbar outside={data} />
            <div className={styles.Container}>
                <div className={styles.container}>
                    <h2 className={styles.sectionTitle}>Evaluación 3</h2>
                    <h3 className={styles.subTitle}>
                        ¡Bienvenido a tu tercera evaluación! Esta prueba evaluará tu conocimiento sobre herramientas digitales esenciales como Google Drive, Google Docs y Microsoft Teams.

                    </h3>

                    <ul style={{ marginLeft: "20px" }}>
                        <li className={styles.tipText}>
                            Lee con atención cada pregunta y selecciona la opción correcta. Esta evaluación te ayudará a fortalecer tus habilidades para trabajar y estudiar de forma más eficiente.
                        </li>

                        <li className={styles.tipText}>
                            <strong> Recuerda:</strong>   No tengas miedo de equivocarte, cada error es una oportunidad para aprender.
                        </li>
                    </ul>
                    <p className={styles.tipText}>
                        ¡Buena suerte y da lo mejor de ti!
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
                        onClick={level4}
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

export default Test3;
