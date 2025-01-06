import Navbar from "../../components/navbar/Navbar.jsx";
import s from "./Teams.module.css";
import { useNavigate } from "react-router-dom";
import flecha from "../../public/flecha.png";
import { useAuth } from "../../context/AuthContext.jsx";
import img1 from "../../public/teamActividad.png";
import img2 from "../../public/chatTeams.png";
import img3 from "../../public/equipoTeams.png";
import img4 from "../../public/tareaTeams.png";
import img5 from "../../public/calendarioTeams.png";
import icon1 from "../../public/actividadIcon.png";
import icon2 from "../../public/chatIcon.png";
import icon3 from "../../public/equipoIcon.png";
import icon4 from "../../public/tareaIcon.png";
import icon5 from "../../public/calendarioIcon.png";

const Teams = (data) => {
  const { level } = useAuth();
  const test3 = () => {
    if (level === 3) {
      navigate("/test3");
    }
    if (level === 1 || level === 2 || level === 4) {
      //4
      navigate("/dashboard");
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Introducción</h2>
          <p className={s.tipText}>
            Microsoft Teams es una herramienta poderosa para colaborar y
            aprender en línea. Con Teams, puedes comunicarte con tus compañeros
            y profesores, organizar tus tareas y asistir a clases virtuales. En
            esta página, aprenderás sobre las principales funciones de Teams y
            cómo aprovecharlas al máximo. <br />
            Microsoft Teams cuenta con 5 apartados principales que son:
          </p>
        </div>
        <h2 className={s.sectionTitle}>Cómo usar Microsoft Teams</h2>
        <ul className={s.iconContainer}>
          <li className={s.icon}>
            <img src={icon1} alt="Icono de actividad" />
          </li>
          <li className={s.icon}>
            <img src={icon2} alt="Icono de caht" />
          </li>
          <li className={s.icon}>
            <img src={icon3} alt="Icono de equipo" />
          </li>
          <li className={s.icon}>
            <img src={icon4} alt="Icono de tareas" />
          </li>
          <li className={s.icon}>
            <img src={icon5} alt="Icono de calendario" />
          </li>
        </ul>

        <div>
          <h2 className={s.sectionTitle}>
            <strong>1. Actividad</strong>
          </h2>
          <p className={s.tipText}>
            La sección Actividad te muestra un resumen de lo que ocurre en Teams
            como mensajes nuevos, menciones importantes o cambios en tus
            equipos.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              Puedes ver notificaciones de mensajes o tareas asignadas.
            </li>
            <li className={s.tipText}>
              Estar al tanto de eventos o reuniones programadas.
            </li>
          </ul>
          <img src={img1} alt="Actividades" className={s.img} />
        </div>

        <div>
          <h2 className={s.sectionTitle}>
            <strong>2. Chat</strong>
          </h2>
          <p className={s.tipText}>
            La sección Chat te permite comunicarte de manera privada con
            compañeros, profesores o equipos. Es ideal para resolver dudas o
            coordinar trabajos grupales.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>Puedes enviar mensajes directos.</li>
            <li className={s.tipText}>Compartir archivos y enlaces.</li>
            <li className={s.tipText}>
              Usar emojis, stickers o GIFs para hacer la comunicación más
              interactiva.
            </li>
          </ul>
          <img src={img2} alt="Chats" className={s.img} />
        </div>

        <div>
          <h2 className={s.sectionTitle}>
            <strong>3. Equipos</strong>
          </h2>
          <p className={s.tipText}>
            La sección Equipos organiza las clases o grupos de trabajo en los
            que participas. Cada equipo puede tener canales dedicados a temas
            específicos.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              Puedes acceder al contenido compartido por tu profesor.
            </li>
            <li className={s.tipText}>
              Participar en discusiones dentro de los canales.
            </li>
            <li className={s.tipText}>
              Subir o descargar materiales de clase.
            </li>
          </ul>

          <h3>¿Qué es un canal?</h3>
          <p className={s.tipText}>
            Un canal es como una sala dentro del equipo donde puedes hablar
            sobre un tema específico. Por ejemplo, un equipo de matemáticas
            podría tener un canal para "Tareas" y otro para "Preguntas".
          </p>
          <img src={img3} alt="Equipos" className={s.img} />
        </div>

        <div>
          <h2 className={s.sectionTitle}>
            <strong>4. Tareas</strong>
          </h2>
          <p className={s.tipText}>
            La sección Tareas es donde los profesores asignan y organizan
            actividades. Aquí puedes ver las tareas pendientes, las fechas de
            entrega y enviar tus trabajos.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              Puedes ver todas las tareas asignadas en un solo lugar.
            </li>
            <li className={s.tipText}>
              Adjuntar archivos y enviar tareas antes de la fecha límite.
            </li>
            <li className={s.tipText}>
              Consultar las calificaciones o comentarios de tus profesores.
            </li>
          </ul>
          <img src={img4} alt="Tareas" className={s.img} />
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/ZCi7Et-ZR5c?si=5keRGMJdOPZGrKSS"
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
            <strong>5. Calendario</strong>
          </h2>
          <p className={s.tipText}>
            El Calendario te ayuda a organizar tu tiempo y a no perderte
            reuniones o clases en línea. Está sincronizado con las reuniones de
            tus equipos.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              Puedes ver todas tus reuniones y clases programadas.
            </li>
            <li className={s.tipText}>
              Unirte a reuniones directamente desde el calendario.
            </li>
            <li className={s.tipText}>
              Crear recordatorios para eventos importantes.
            </li>
          </ul>
          <img src={img5} alt="Calendario" className={s.img} />
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TnqsS0I5sjU?si=JKnYOvuDt6oqMYIU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <h2 className={s.sectionTitle}>Practica lo aprendido</h2>
        <div className={s.videoContainer}>
          <iframe
            src="https://kahoot.it/challenge/?quiz-id=cfd7525a-8c65-450e-ba1b-b2c231158f41&single-player=true"
            width="640"
            height="800"
          >
            Cargando...
          </iframe>
        </div>
        <div className={s.safetyTips}>
          <h3 className={s.subTitle}>Contenido extra</h3>
          <a
            className={s.more}
            href="https://youtu.be/6Fiz5lMRqr8?si=LG9CDsmwkO0OPJJy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver video
          </a>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.tipText}>
            Microsoft Teams es una herramienta esencial para aprender y
            colaborar en línea. Con estas funciones, podrás organizar tus
            estudios, trabajar en equipo y mantenerte al día con tus clases.
            ¡Empieza a explorar Teams y descubre cómo puede facilitar tu
            aprendizaje!
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/productivityTools");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button className={s.button} src={flecha} onClick={test3}>
              <img className={s.right} src={flecha} alt="-->" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
