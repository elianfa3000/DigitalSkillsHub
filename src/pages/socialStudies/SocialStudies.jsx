import Navbar from "../../components/navbar/Navbar.jsx";
import s from "./SocialStudies.module.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const SocialStudies = (data) => {
  const navigate = useNavigate();
  const { level } = useAuth();
  const next = () => {
    if (level == 7) {
      navigate("/testStudies");
    } else {
      navigate("/classes");
    }
  };
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.header}>
          <h1>Estudios Sociales</h1>

          <p>
            En esta sección aprenderás a utilizar herramientas digitales para
            estudiar hechos históricos, ubicar eventos importantes en el tiempo
            y representar procesos geográficos de forma visual e interactiva.
            Empezaremos con <strong>TimeToast</strong>, una herramienta ideal
            para crear líneas de tiempo ordenadas y comprensibles.
          </p>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>TimeToast</h2>
        </div>
        <p className={s.descriptionText}>
          TimeToast es una herramienta en línea que permite crear líneas de
          tiempo interactivas de manera sencilla. Es útil para representar
          cronológicamente eventos históricos, procesos sociales o biografías
          importantes, facilitando la comprensión del tiempo y el orden de los
          acontecimientos.
        </p>
        <h4 className={s.sectionSubTitle}>¿Qué es TimeToast?</h4>
        <p className={s.descriptionText}>
          TimeToast es una plataforma web para crear líneas de tiempo
          interactivas que permite organizar cronológicamente eventos con
          descripciones e imágenes siendo muy utilizada en educación y entornos
          profesionales con opciones gratuitas y de pago para visualizar y
          compartir información histórica o proyectos de manera atractiva.
        </p>
        <div className={s.gray}>
          <h4 className={s.sectionSubTitle}>¿Cómo funciona TimeToast?</h4>
          <p className={s.descriptionText}>
            Para usar TimeToast necesitas crear una cuenta gratuita. Luego
            puedes empezar a añadir eventos a tu línea de tiempo, cada uno con
            su título, fecha, descripción y opcionalmente una imagen. Al
            finalizar, puedes compartirla en línea o insertarla en una
            presentación.
          </p>
          <h4 className={s.sectionSubTitle}>Cómo usar TimeToast paso a paso</h4>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kgCH04HcAaE?si=pxTrfeTxBMDV1wh8"
              title="¿Qué es TimeToast?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <ul className={s.tipsList}>
            <li>
              Registrar una cuenta en{" "}
              <a
                className={s.link}
                href="https://www.timetoast.com"
                target="_blank"
                rel="noreferrer"
              >
                www.timetoast.com
              </a>
            </li>
            <li>Crear una nueva línea de tiempo desde tu panel</li>
            <li>Agregar eventos con sus respectivas fechas y descripciones</li>
            <li>Guardar y compartir tu línea de tiempo</li>
          </ul>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Canva</h2>
        </div>

        <h4 className={s.sectionSubTitle}>¿Qué es Canva?</h4>
        <p className={s.descriptionText}>
          Canva es una herramienta de diseño gráfico en línea que permite crear
          infografías, carteles, líneas de tiempo visuales y presentaciones. Es
          muy útil en Estudios Sociales para explicar procesos históricos,
          biografías, mapas mentales y resúmenes visuales de eventos
          importantes.
        </p>

        <h4 className={s.sectionSubTitle}>¿Qué es Canva y para qué sirve?</h4>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9_CyiVVKwmw?si=8QQyv0HbQ6Da-mxf"
            title="Que es Canva"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <h4 className={s.sectionSubTitle}>¿Cómo funciona Canva?</h4>
        <p className={s.descriptionText}>
          Canva funciona desde cualquier navegador. Solo necesitas registrarte
          con tu cuenta de correo. Luego puedes elegir una plantilla, añadir
          texto, imágenes, íconos o formas y personalizar tu diseño. Finalmente,
          puedes descargarlo o compartirlo en línea.
        </p>
        <div className={s.gray}>
          <h4 className={s.sectionSubTitle}>Cómo usar Canva</h4>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rk_m6NY3s1o?si=F8CnFQSs1sAqw_O2"
              title="Tutorial básico de Canva"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <ol className={s.tipsList}>
            <li>
              Accede a :
              <a
                className={s.link}
                href="https://www.canva.com/"
                target="_blank"
                rel="noreferrer"
              >
                www.canva.com
              </a>
            </li>
            <li>Regístrate o inicia sesión</li>
            <li>Elige una plantilla de infografía, cartel o presentación</li>
            <li>
              Edita los elementos con tu información histórica o geográfica
            </li>
            <li>Descarga o comparte el diseño terminado</li>
          </ol>

          <h4>Actividad sugerida:</h4>
          <p>
            Crea una infografía con Canva que resuma las causas y consecuencias
            de un evento histórico importante en tu país. Puedes usar íconos,
            líneas de tiempo, textos breves e imágenes relevantes.
          </p>
        </div>
        <div className={s.videoContainer}>
          <iframe
            src=" https://kahoot.it/challenge/?quiz-id=a4d18dcb-1b90-4fca-96fd-a84969d55d1d&single-player=true"
            width="640"
            height="800"
            title="kahoot"
          >
            Cargando...
          </iframe>
        </div>

        <div className={s.gray}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.descriptionText}>
            Con TimeToast y Canva aprendiste a representar hechos históricos y
            procesos sociales de manera visual e interactiva. Estas herramientas
            fortalecen tu capacidad de análisis cronológico, pensamiento crítico
            y expresión gráfica para comprender mejor el contexto social que te
            rodea.
          </p>
        </div>

        <div className={s.startButton}>
          <div onClick={next}>
            <button>{level == 7 ? "Evaluación" : "Siguiente"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialStudies;
