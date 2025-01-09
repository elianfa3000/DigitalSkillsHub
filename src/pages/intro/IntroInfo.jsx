import Navbar from "../../components/navbar/Navbar";

import s from "./IntroInfo.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const IntroInfo = (data) => {
  const { level } = useAuth();
  const navigation = useNavigate();
  console.log(level);

  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h1 className={s.title}>
          Introducción general al uso de herramientas digitales
        </h1>

        <section className={s.section}>
          <h2>📌 Lo que aprenderás</h2>
          <ul>
            <li>
              Comprender qué es un navegador web y cómo usarlo correctamente.
            </li>
            <li>
              Proteger tu información personal mientras navegas por internet.
            </li>
            <li>Buscar información en Google de forma básica y avanzada.</li>
            <li>Evaluar si una fuente es confiable o no.</li>
            <li>Utilizar información de manera ética y responsable.</li>
            <li>Crear contraseñas seguras y evitar malware.</li>
            <li>Proteger tu privacidad y reconocer sitios seguros.</li>
            <li>
              Usar herramientas como Google Scholar y Cite This For Me para
              citar fuentes.
            </li>
            <li>Organizar tu tiempo y mejorar tus hábitos de estudio.</li>
            <li>Aplicar técnicas como Pomodoro y toma de notas efectivas.</li>
            <li>
              Comprender el pensamiento crítico y su utilidad en el aprendizaje.
            </li>
            <li>Utilizar Google Drive para guardar y trabajar tus archivos.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>🧰 Este módulo incluye</h2>
          <ul>
            <li>Videos explicativos y guías prácticas.</li>
            <li>Recomendaciones de herramientas gratuitas.</li>
            <li>Actividades para mejorar tus hábitos de estudio y búsqueda.</li>
            <li>
              Ejercicios de reflexión sobre la seguridad y el pensamiento
              crítico.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📚 Contenido del curso</h2>
          <ul>
            <li>Navegación web segura y responsable.</li>
            <li>Búsqueda y evaluación de información.</li>
            <li>Privacidad, seguridad digital y contraseñas.</li>
            <li>Herramientas para citar y organizar contenido académico.</li>
            <li>Gestión del tiempo y técnicas de estudio.</li>
            <li>Pensamiento crítico y toma de decisiones informadas.</li>
            <li>Uso básico de Google Drive para el trabajo digital.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📎 Requisitos</h2>
          <ul>
            <li>
              No se necesita experiencia previa con herramientas digitales.
            </li>
            <li>Dispositivo con conexión a internet y navegador moderno.</li>
            <li>Interés en aprender y mejorar tus habilidades de estudio.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📝 Descripción</h2>
          <p>
            Esta sección te ayudará a adquirir las competencias básicas para
            desenvolverte en el entorno digital. Desde aprender a buscar
            información de manera eficiente hasta organizar tu tiempo, proteger
            tu seguridad en línea y desarrollar tu pensamiento crítico. Es el
            punto de partida para luego explorar cada materia con herramientas
            específicas.
          </p>
        </section>

        <div className={s.startButton}>
          <div className={s.button} onClick={() => navigation("/navigation")}>
            <p>Nivel 1 </p>
          </div>
          <div
            className={s.button}
            onClick={() => navigation("/useInformation")}
          >
            {!(level >= 2) && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(186, 42, 42, 0.5)",
                  zIndex: 10,
                  pointerEvents: "auto",
                  cursor: "not-allowed",
                }}
              ></div>
            )}

            <p>Nivel 2</p>
          </div>
          <div
            className={s.button}
            onClick={() => navigation("/productivityTools")}
          >
            {!(level >= 3) && (
              <div
                onClick={(e) => e.stopPropagation()}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(186, 42, 42, 0.5)",
                  zIndex: 10,
                  pointerEvents: "auto",
                  cursor: "not-allowed",
                }}
              ></div>
            )}
            <p>Nivel 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroInfo;
