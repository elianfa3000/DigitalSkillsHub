import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import s from "./IntroSciences.module.css";

const SciIntro = (data) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h1 className={s.title}>
          Introducción a la materia: Ciencias Naturales
        </h1>

        <section className={s.section}>
          <h2>📌 Lo que aprenderás</h2>
          <ul>
            <li>Realizar simulaciones científicas virtuales usando PhET.</li>
            <li>
              Explorar conceptos de física, química y biología de forma
              interactiva.
            </li>
            <li>
              Usar Google Earth para estudiar la geografía y ecosistemas del
              planeta.
            </li>
            <li>
              Aplicar el método científico mediante herramientas digitales.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>🧰 Este módulo incluye</h2>
          <ul>
            <li>Simulaciones científicas interactivas.</li>
            <li>Videos explicativos y guías de uso.</li>
            <li>Enlaces a recursos gratuitos y oficiales.</li>
            <li>Actividades sugeridas para profundizar el aprendizaje.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📚 Contenido del curso</h2>
          <ul>
            <li>Simulaciones de física y química con PhET.</li>
            <li>Exploración biológica con juegos educativos.</li>
            <li>Visualización global con Google Earth.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📎 Requisitos</h2>
          <ul>
            <li>Curiosidad científica y ganas de experimentar.</li>
            <li>Conexión a Internet para acceder a las simulaciones.</li>
            <li>Dispositivo con navegador (computadora o celular).</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📝 Descripción</h2>
          <p>
            Este curso está diseñado para que explores el mundo de la ciencia a
            través de herramientas digitales como PhET y Google Earth. Podrás
            realizar simulaciones, analizar fenómenos naturales, y observar el
            planeta de manera interactiva, todo desde tu navegador.
          </p>
        </section>

        <div className={s.startButton}>
          <div
            onClick={() => {
              navigate("/sciences");
            }}
          >
            <button>Comenzar curso</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SciIntro;
