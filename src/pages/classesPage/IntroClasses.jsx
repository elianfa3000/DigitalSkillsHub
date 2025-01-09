import s from "./IntroClasses.module.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
const IntroClasses = (data) => {
  const navigate = useNavigate();

  const next = () => {
    navigate("/classes");
  };

  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h1 className={s.title}>
          Bienvenido a la Plataforma de Competencias Digitales y Aprendizaje en
          Línea
        </h1>

        <section className={s.section}>
          <h2>🎯 Propósito de esta plataforma</h2>
          <p>
            Esta plataforma está diseñada para ayudarte a mejorar tus
            habilidades digitales esenciales y mejorar tu capacidad de
            aprendizaje en línea. Aquí aprenderás a utilizar herramientas
            tecnológicas útiles para tus clases, organizar tu tiempo, trabajar
            de forma colaborativa y navegar de manera segura y responsable.
          </p>
        </section>

        <section className={s.section}>
          <h2>🖥️ Competencias Digitales (CD)</h2>
          <p>
            Estas herramientas enseñan a los estudiantes a usar tecnología para
            crear, analizar, organizar y presentar información digital.
          </p>
          <ul>
            <li>🌐 Navegadores Web </li>
            <li>🔐 Seguridad digital </li>
            <li>🔎 Google Scholar</li>
            <li>📄 Cite This For Me </li>
            <li>📂 Google Drive </li>
            <li>📊 Excel </li>
            <li>📈 Google Sheets </li>
            <li>📐 GeoGebra </li>
            <li>🧮 Microsoft Word </li>
            <li>📃 Mendeley </li>
            <li>🔬 PhET Simulations </li>
            <li>🌍 Google Earth </li>
            <li>🕒 TimeToast </li>
            <li>🎨 Canva </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📚 Habilidades de Aprendizaje en Línea (HAL)</h2>
          <p>
            Estas herramientas y estrategias ayudan a organizar ideas,
            reflexionar y mejorar el aprendizaje autónomo en entornos digitales.
          </p>
          <ul>
            <li>📲 Photomath</li>
            <li>🧠 Coggle </li>
            <li>📝 Google Docs </li>
            <li>✍️ LanguageTool </li>
            <li>📚 Actividad final con Canva</li>
            <li>🧭 Actividad reflexiva con Google Earth </li>
            <li>🕐 Técnica Pomodoro </li>
            <li>📔 Toma de notas efectivas </li>
          </ul>
        </section>
        <section className={s.section}>
          <h2>📌 Lo que aprenderás</h2>
          <ul>
            <li>
              Buscar, evaluar y usar información de manera ética y efectiva.
            </li>
            <li>Proteger tu privacidad y seguridad en entornos digitales.</li>
            <li>
              Desarrollar pensamiento crítico y hábitos de estudio organizados.
            </li>
            <li>
              Usar herramientas específicas para cada materia como GeoGebra,
              Word y PhET.
            </li>
            <li>Trabajar con documentos compartidos y mapas conceptuales.</li>
            <li>
              Aplicar tecnología para resolver problemas reales en diferentes
              asignaturas.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>🧰 Qué encontrarás aquí</h2>
          <ul>
            <li>
              Módulos temáticos por materia: Matemáticas, Lengua, Ciencias y
              Sociales.
            </li>
            <li>
              Actividades interactivas, simulaciones, infografías y mapas
              mentales.
            </li>
            <li>
              Videos explicativos, herramientas gratuitas y ejercicios
              prácticos.
            </li>
            <li>
              Evaluaciones automáticas para avanzar por niveles de aprendizaje.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📎 Requisitos para comenzar</h2>
          <ul>
            <li>No necesitas experiencia previa con tecnología.</li>
            <li>
              Sólo necesitas conexión a Internet y muchas ganas de aprender.
            </li>
            <li>Un dispositivo como celular, tablet o computadora.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📝 Descripción general</h2>
          <p>
            Esta plataforma es una guía completa para que mejores tus
            competencias digitales y habilidades de aprendizaje en línea. Desde
            lo más básico como navegar por internet, hasta el uso de
            herramientas para cada materia. Todo organizado paso a paso, con un
            enfoque claro, visual y accesible.{" "}
            <b>¡Es momento de prepararte para aprender con tecnología!</b>
          </p>
        </section>

        <div className={s.startButton}>
          <div onClick={next}>
            <button>Empezar ahora</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default IntroClasses;
