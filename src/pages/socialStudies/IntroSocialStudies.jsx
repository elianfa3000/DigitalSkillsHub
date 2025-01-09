import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import s from "./IntroSocialStudies.module.css";

const SocIntro = (data) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h1 className={s.title}>
          Introducción a la materia: Estudios Sociales
        </h1>

        <section className={s.section}>
          <h2>📌 Lo que aprenderás</h2>
          <ul>
            <li>Construir líneas de tiempo interactivas con TimeToast.</li>
            <li>Representar procesos históricos y sociales de forma visual.</li>
            <li>Diseñar infografías y mapas conceptuales con Canva.</li>
            <li>
              Organizar eventos en el tiempo y comprender causas y
              consecuencias.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>🧰 Este módulo incluye</h2>
          <ul>
            <li>Videos explicativos sobre herramientas digitales.</li>
            <li>Acceso a recursos gratuitos en línea.</li>
            <li>Actividades prácticas con Canva y TimeToast.</li>
            <li>
              Propuestas para representar contenidos históricos y geográficos.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📚 Contenido del curso</h2>
          <ul>
            <li>TimeToast: creación de líneas de tiempo.</li>
            <li>Canva: diseño de recursos visuales como infografías.</li>
            <li>
              Actividades para contextualizar aprendizajes históricos y
              sociales.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📎 Requisitos</h2>
          <ul>
            <li>Conocimientos básicos sobre hechos históricos.</li>
            <li>
              Cuenta de correo electrónico para registrarse en las plataformas.
            </li>
            <li>Acceso a internet y navegador actualizado.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📝 Descripción</h2>
          <p>
            Esta sección te permitirá aprender a representar el tiempo histórico
            y los procesos sociales mediante herramientas digitales visuales.
            Usarás TimeToast para crear líneas de tiempo y Canva para diseñar
            recursos educativos atractivos, lo cual facilitará la comprensión de
            temas complejos de manera organizada y colaborativa.
          </p>
        </section>

        <div className={s.startButton}>
          <div
            onClick={() => {
              navigate("/socialS");
            }}
          >
            <button>Comenzar curso</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocIntro;
