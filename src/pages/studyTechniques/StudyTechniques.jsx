import img1 from "../../public/orgTime.png";
import { useNavigate } from "react-router-dom";
import s from "./StudyTechniques.module.css";
import Navbar from "../../components/navbar/Navbar";
import flecha from "../../public/flecha.png";
const StudyTechniques = (data) => {
  const navigate = useNavigate();
  return (
    //2 Técnicas de estudio efectivas<h1>Técnicas de estudio efectivas</h1>
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Introducción</h2>
        <p className={s.introText}>
          Estudiar no siempre es sencillo. A veces, nos distraemos, no sabemos
          por dónde empezar o sentimos que no aprovechamos bien el tiempo. Pero
          no te preocupes, existen métodos y técnicas que te pueden ayudar a
          mejorar tu forma de estudiar y a obtener mejores resultados. Aquí
          aprenderás a organizar tu tiempo, tomar notas efectivas y aplicar
          estrategias como la técnica Pomodoro para concentrarte más y aprender
          mejor.
        </p>
        <div>
          <h2 className={s.sectionTitle}>Aprendizaje efectivo</h2>
          <p className={s.tipText}>
            El aprendizaje efectivo consiste en usar métodos que te ayuden a
            entender y recordar lo que estudias de manera más fácil. Antes de
            empezar, hazte preguntas como: ¿Qué quiero aprender hoy? ¿Qué temas
            necesito repasar?. Estas metas te darán una guía clara y evitarán
            que pierdas tiempo. <br /> Además, es importante revisar la
            información varias veces en lugar de estudiarla toda de golpe. Un
            truco útil es explicar lo que acabas de aprender usando tus propias
            palabras, como si fueras un profesor.
          </p>
        </div>
        <div>
          <h2 className={s.sectionTitle}>Organiza y estructura tu tiempo</h2>
          <p className={s.tipText}>
            Estudiar sin un plan puede ser agotador y poco eficiente. La clave
            es organizar tu tiempo y crear un horario. Dedica bloques
            específicos del día para cada materia y asegúrate de incluir
            descansos. <br />
            Por ejemplo, puedes usar herramientas como Google Calendar o
            aplicaciones de organización para crear un plan de estudio semanal.
            Empieza por los temas más difíciles cuando tengas más energía y deja
            los más fáciles para después. <br />Y no olvides los descansos. Un
            pequeño descanso de 5 a 10 minutos entre sesiones te ayuda a
            recuperar energía y a mantener la concentración.
          </p>
          <img
            src={img1}
            alt=""
            className={s.videoEmbed}
            style={{ display: "flex", margin: "0 auto" }}
          />
        </div>
        <div>
          <h2 className={s.sectionTitle}>Toma de notas productivas</h2>
          <p className={s.tipText}>
            Tomar notas de forma inteligente es una habilidad clave. No intentes
            escribir todo; en su lugar, resume lo importante y organiza tus
            ideas.
            <br />
            Una de las mejores formas de hacerlo es el método Cornell. Divide la
            página en tres partes:
          </p>
          <ul className={s.tipsList}>
            <li className={s.tip}>
              A la izquierda, escribe ideas clave o preguntas importantes.
            </li>
            <li className={s.tip}>
              A la derecha, toma notas durante la clase o la lectura.
            </li>
            <li className={s.tip}>
              Al final, haz un resumen breve con tus propias palabras.
            </li>
          </ul>
          <p className={s.tipText}>
            Si te resulta difícil usar el método Cornell, prueba con mapas
            mentales o esquemas visuales. Estos te permiten conectar ideas
            principales y secundarias de manera más visual.
          </p>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="315"
              height="560"
              src="https://www.youtube.com/embed/ZeRXtT9DiCw?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>
            La técnica Pomodoro: Estudia por bloques de tiempo
          </h2>
          <p className={s.tipText}>
            La técnica Pomodoro es ideal si te cuesta mantener la concentración.
            Es muy fácil:
          </p>
          <ol className={s.tipsList}>
            <li className={s.tip}>Elige una tarea específica.</li>
            <li className={s.tip}>
              Configura un temporizador en 25 minutos y estudia sin
              distracciones.
            </li>
            <li className={s.tip}>
              Cuando se acaben los 25 minutos, toma un descanso de 5 minutos.
            </li>
            <li className={s.tip}>
              Repite este ciclo 4 veces y luego toma un descanso largo de 15 a
              30 minutos.
            </li>
          </ol>

          <p className={s.tipText}>
            Este método te ayuda a estudiar en sesiones cortas pero intensas,
            manteniéndote fresco y motivado.
          </p>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3D0-l2O5k8Y?si=Mk6MSxF6_pWhT7Op?rel=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className={s.sectionTitle}>
            Las mejores técnicas de estudio, memorización rápida y aprendizaje
            productivo
          </h2>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_HmFAEPeBCs?si=Oy4LgAYr8yYhynwN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.tipText}>
            Estudiar no tiene que ser complicado ni agotador. Al organizar tu
            tiempo, tomar notas de manera eficiente y aplicar la técnica
            Pomodoro, podrás estudiar mejor y lograr mejores resultados. Elige
            las estrategias que más se adapten a ti y conviértelas en parte de
            tu rutina. ¡Verás cómo el estudio se vuelve más sencillo y efectivo!
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/useInformation");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button
              className={s.button}
              src={flecha}
              onClick={() => {
                navigate("/criticalThinking");
              }}
            >
              <img className={s.right} src={flecha} alt="-->" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyTechniques;
