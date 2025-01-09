import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import s from "./IntroMathematics.module.css";

const MatIntro = (data) => {
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h1 className={s.title}>Introducción a la materia: Matemáticas</h1>

        <section className={s.section}>
          <h2>📌 Lo que aprenderás</h2>
          <ul>
            <li>
              Usar herramientas digitales como GeoGebra, Photomath y Excel.
            </li>
            <li>Graficar funciones lineales, cuadráticas y cúbicas.</li>
            <li>Aplicar fórmulas matemáticas en contextos reales.</li>
            <li>Visualizar soluciones de ecuaciones e inecuaciones.</li>
            <li>Analizar datos mediante gráficos y tablas.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>🧰 Este módulo incluye</h2>
          <ul>
            <li>Videos explicativos con ejemplos.</li>
            <li>Guías paso a paso para usar las herramientas.</li>
            <li>Demostraciones prácticas con GeoGebra y Excel.</li>
            <li>Consejos para usar Photomath de forma responsable.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📚 Contenido del curso</h2>
          <ul>
            <li>GeoGebra: Visualización y modelado matemático.</li>
            <li>Excel: Cálculos automáticos y gráficos.</li>
            <li>Photomath: Resolución de ejercicios paso a paso.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📎 Requisitos</h2>
          <ul>
            <li>Conocimientos básicos de operaciones matemáticas.</li>
            <li>Acceso a Internet y a una computadora o celular.</li>
            <li>Ganas de aprender usando tecnología.</li>
          </ul>
        </section>

        <section className={s.section}>
          <h2>📝 Descripción</h2>
          <p>
            Esta sección está diseñada para que aprendas a utilizar herramientas
            digitales que te facilitarán el aprendizaje de Matemáticas. A través
            de videos interactivos, ejemplos prácticos y explicaciones claras,
            podrás comprender conceptos clave de álgebra, geometría y
            estadística usando recursos como GeoGebra, Excel y Photomath.
          </p>
        </section>

        <div className={s.startButton}>
          <Link to="/mat">
            <button>Comenzar curso</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default MatIntro;
