import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import flecha from "../../public/flecha.png";
import s from "./CriticalThinking.module.css";

const CriticalThinking = (data) => {
  const { level } = useAuth();
  const test2 = () => {
    console.log(level);

    if (level === 2) {
      navigate("/test2");
    }
    if (level === 1 || level === 3) {
      navigate("/productivityTools");
    }
  };
  const navigate = useNavigate();
  return (
    //2.3  Pensamiento critico<h1>Pensamiento crítico</h1>
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Introducción</h2>
        <p className={s.introText}>
          Hoy en día, la información está a un solo clic de distancia, pero no
          toda es verdadera o confiable. Desarrollar pensamiento crítico y
          alfabetización digital significa aprender a analizar y entender la
          información de manera clara y precisa. En esta sección, descubrirás
          cómo evaluar la información de manera crítica para tomar decisiones
          informadas y evitar ser engañado por contenidos falsos o poco
          confiables.
        </p>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>¿Qué es el pensamiento crítico?</h2>
          <p className={s.tipText}>
            El pensamiento crítico es la capacidad de analizar la información
            cuidadosamente antes de aceptarla como cierta. Significa pensar con
            cuidado, hacer preguntas y no creer todo lo que se lee o escucha sin
            verificarlo. El pensamiento crítico nos ayuda a entender las cosas
            de forma más profunda y a tomar mejores decisiones.
          </p>
          <h3 className={s.subTitle}>Componentes del pensamiento crítico:</h3>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Curiosidad:</strong> El pensamiento crítico empieza con la
              curiosidad, que es tener ganas de saber más. Cuando somos
              curiosos, hacemos preguntas como “¿Por qué sucede esto?” o “¿Qué
              significa realmente?”. Estas preguntas nos ayudan a explorar y
              entender mejor un tema.
              <p className={s.exampleText}>
                <strong> Ejemplo:</strong>
                Si lees un artículo sobre una “cura milagrosa” para una
                enfermedad, en lugar de creerlo de inmediato, podrías preguntar:
                “¿Cómo funciona esta cura? ¿Hay pruebas científicas?”.
              </p>
            </li>
            <li className={s.tipText}>
              <strong>Evaluación:</strong> Evaluar es pensar detenidamente en la
              información y decidir si es confiable. Esto implica analizar la
              fuente (quién lo dijo o lo escribió) y si la información tiene
              sentido.
              <p className={s.exampleText}>
                <strong> Ejemplo:</strong> Si alguien en redes sociales publica
                algo impactante sin decir de dónde viene, evalúa si esa persona
                es experta en el tema o si solo está compartiendo una opinión.
              </p>
            </li>
            <li className={s.tipText}>
              <strong>Razonamiento:</strong> Usar el razonamiento significa
              pensar de manera lógica. No solo se trata de creer algo, sino de
              ver si la información tiene sentido y está respaldada por hechos o
              evidencia.
              <p className={s.exampleText}>
                <strong> Ejemplo:</strong> Si ves en una página que dice que
                tomar un solo tipo de alimento te hará perder peso, razona si
                esto es lógico o si la pérdida de peso es más compleja.
              </p>
            </li>
          </ul>

          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/i-htv81L04g?si=C5iThMGwcDt08TQr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className={s.sectionTitle}>
            Técnicas para desarrollar el pensamiento crítico
          </h2>
          <p className={s.tipText}>
            Existen diferentes técnicas que ayudan a cuestionar y analizar la
            información. Usar estas técnicas regularmente puede ayudarte a ser
            más crítico y a evitar errores al aceptar información falsa o
            incompleta.
          </p>
          <h3 className={s.subTitle}>
            Técnicas clave para desarrollar el pensamiento crítico:
          </h3>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong> Pregunta la fuente de la información:</strong>
              Preguntarte “¿Quién dijo esto?” es clave para saber si la
              información es confiable. La fuente puede ser una persona, un
              sitio web, un artículo o una publicación en redes sociales.
              Averigua si esa fuente es confiable y si tiene conocimientos en el
              tema.
              <div className={s.exampleText}>
                <strong> Ejemplo:</strong> Si lees una noticia en un blog
                desconocido, podrías investigar quién la escribió. Si la persona
                no es experta o el sitio web tiene poca reputación, puede que la
                información no sea confiable.
              </div>
            </li>
            <li className={s.tipText}>
              <strong>
                Identifica posibles sesgos o puntos de vista parciales:
              </strong>
              Un sesgo es cuando una persona o fuente muestra solo una parte de
              la historia, sin ser completamente neutral. Todas las personas
              tenemos opiniones, pero cuando analizas información, es importante
              detectar si está influenciada por el punto de vista de quien la
              escribe.
              <div className={s.exampleText}>
                <strong> Ejemplo:</strong> Imagina que lees un artículo sobre
                una empresa escrito por un empleado de esa empresa. Es posible
                que el artículo muestre solo los aspectos positivos y oculte
                cualquier problema. Identificar el sesgo te ayuda a ver más allá
                de lo que se muestra.
              </div>
            </li>
            <li className={s.tipText}>
              <strong>
                Busca otras fuentes para confirmar la información:
              </strong>
              Antes de aceptar una información, intenta buscar otras fuentes que
              hablen sobre el mismo tema. Si varias fuentes confiables confirman
              lo mismo, es probable que la información sea verdadera.{" "}
              <div className={s.exampleText}>
                <strong> Ejemplo:</strong> Si escuchas una noticia sobre un
                nuevo descubrimiento científico, búscala en otros sitios de
                noticias científicas. Si varios sitios importantes dicen lo
                mismo, la información tiene más posibilidades de ser cierta.
              </div>
            </li>
          </ul>
        </div>
        <h2 className={s.sectionTitle}>Practica lo aprendido</h2>
        <div className={s.videoContainer}>
          <iframe
            src="https://kahoot.it/challenge/?quiz-id=31537d9b-9c69-4c0a-aff5-7a04a13b5a23&single-player=true"
            width="640"
            height="800"
          >
            Cargando...
          </iframe>
        </div>
        <div className={s.safetyTips}>
          <h3 className={s.subTitle}>contenido extra</h3>
          <a
            className={s.more}
            target="_blank"
            rel="noopener noreferrer"
            href="https://asana.com/es/resources/critical-thinking-skills"
          >
            Pensamiento crítico en 7 pasos
          </a>
        </div>

        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.tipText}>
            Aplicar el pensamiento crítico y la alfabetización digital en tu día
            a día te ayuda a ver más allá de lo que lees. Con estas habilidades,
            podrás evaluar, analizar y cuestionar la información en Internet, lo
            que te permitirá tomar decisiones más informadas y evitar caer en
            engaños. ¡Empieza a practicar y notarás cómo te vuelves más
            cuidadoso con la información que consumes!
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/studytechniques");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button className={s.button} src={flecha} onClick={test2}>
              <img className={s.right} src={flecha} alt="-->" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CriticalThinking;
