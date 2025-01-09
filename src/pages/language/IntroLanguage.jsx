import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import s from "./IntroLanguage.module.css";

const LangIntro = (data) => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h1 className={s.title}>
          Introducción a la materia: Lengua y Literatura
        </h1>

        <section className={s.section}>
          <h2>📌 Lo que aprenderás</h2>
          <ul>
            <li>Escribir textos académicos con normas y formatos correctos.</li>
            <li>Colaborar en tiempo real en documentos compartidos.</li>
            <li>
              Corregir errores gramaticales y de estilo con ayuda de
              inteligencia artificial.
            </li>
            <li>
              Organizar ideas mediante mapas mentales y esquemas visuales.
            </li>
            <li>Organizar, citar y gestionar referencias bibliográficas.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>🧰 Este módulo incluye</h2>
          <ul>
            <li>Videos explicativos de herramientas digitales.</li>
            <li>Enlaces a plataformas gratuitas como Google Docs y Coggle.</li>
            <li>Actividades guiadas para aplicar lo aprendido.</li>
            <li>Recursos para mejorar la escritura y comprensión textual.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📚 Contenido del curso</h2>
          <ul>
            <li>Microsoft Word: Redacción formal y académica.</li>
            <li>Google Docs & Drive: Trabajo colaborativo.</li>
            <li>LanguageTool: Corrección lingüística con IA.</li>
            <li>Coggle: Creación de mapas mentales y conceptuales.</li>
            <li>
              Mendeley: Organizar, citar y gestionar referencias bibliográficas.
            </li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📎 Requisitos</h2>
          <ul>
            <li>Conocimientos básicos de redacción y ortografía.</li>
            <li>Conexión a Internet y navegador actualizado.</li>
            <li>Interés por mejorar la expresión escrita.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📝 Descripción</h2>
          <p>
            En esta sección aprenderás a utilizar herramientas digitales que te
            ayudarán a escribir, corregir y organizar tus ideas de forma clara y
            profesional. Aprenderás a usar procesadores de texto, correctores
            inteligentes y creadores de mapas mentales para fortalecer tus
            habilidades de comunicación escrita.
          </p>
        </section>

        <div className={s.startButton}>
          <div
            onClick={() => {
              navigate("/language");
            }}
          >
            <button>Comenzar curso</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LangIntro;
