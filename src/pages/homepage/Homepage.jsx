import s from "./Homepage.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import img1 from "../../public/img1.jpg";
import { TfiHandPointRight } from "react-icons/tfi";

//import FormOne from "../../components/forms/FormOne.jsx";

const Homepage = (data) => {
  //git remote add origin https://github.com/elianfa3000/DigitalSkillsHub.git

  return (
    <>
      <Navbar outside={data} />

      <div className={s.welcome} /*Diálogo de bienvenida (1)*/>
        <div className={s.containerOne}>
          <h1 className={s.oneTitle}>
            Mejora tus competencias digitales para un mejor futuro
          </h1>
          <p className={s.oneSubtitle}>
            Competencias digitales y habilidades de aprendizaje en línea es lo
            que necesitas para destacar en la era digital
          </p>
          <p className={s.oneDescription}>
            {/*Mejora tus competencias digitales esenciales y tus habilidades de
            aprendizaje en línea para alcanzar el éxito en la era digital.
            */}
            Nuestra plataforma te ofrece una experiencia de aprendizaje
            interactiva y de calidad. Aprende a tu propio ritmo y recibe
            evaluaciones que te ayudarán a medir tu progreso
          </p>
        </div>

        <div className={s.containerTwo} /*Conceptos clave (2)*/>
          <h2 className={s.twoTitle}>Conceptos clave</h2>
          <p className={s.twoDescription}>
            Presentamos los pilares fundamentales para tu éxito en el mundo
            digital:
          </p>
          <ul className={s.conceptList}>
            <li className={s.concept}>
              <h3>Conceptos Introductorios</h3>
              <p>
                Comenzarás aprendiendo las bases de las competencias digitales y
                las habilidades de aprendizaje en línea. Esto incluye cómo
                navegar por la web de forma segura, realizar búsquedas
                eficientes, proteger tu privacidad, gestionar tu tiempo de
                estudio con técnicas como Pomodoro y Cornell, y colaborar con
                herramientas como Google Drive y Teams.
              </p>
            </li>

            <li className={s.concept}>
              <h3>Lengua y Literatura</h3>
              <p>
                Usarás herramientas como <strong>Google Docs</strong> para
                redactar textos colaborativos,
                <strong>Text-to-Speech</strong> para mejorar la comprensión
                lectora, y <strong>Canva</strong> para crear infografías que
                representen ideas clave. También practicarás la estructura de
                ensayos y análisis de contenido usando tecnología.
              </p>
            </li>

            <li className={s.concept}>
              <h3>Matemáticas</h3>
              <p>
                Aprenderás con herramientas como <strong>GeoGebra</strong> para
                graficar funciones,
                <strong>Photomath</strong> para verificar procedimientos paso a
                paso y <strong>Excel</strong> y <strong>Google Sheets</strong>{" "}
                para representar datos y resolver ejercicios de estadística y
                porcentajes de forma interactiva.
              </p>
            </li>

            <li className={s.concept}>
              <h3>Ciencias Naturales</h3>
              <p>
                Utilizarás simuladores como <strong>PhET</strong> para
                experimentar conceptos de física, química y biología, además de{" "}
                <strong>Google Earth</strong> para observar la Tierra y
                fenómenos naturales. Las actividades están diseñadas para
                explorar científicamente de manera visual y segura.
              </p>
            </li>

            <li className={s.concept}>
              <h3>Estudios Sociales</h3>
              <p>
                Con <strong>TimeToast</strong> aprenderás a crear líneas de
                tiempo interactivas para entender procesos históricos. También
                usarás <strong>Canva</strong> para elaborar infografías sobre
                eventos sociales y geográficos, fomentando la organización
                cronológica y el pensamiento crítico visual.
              </p>
            </li>
          </ul>
        </div>

        <div className={s.containerThree} /*Llamado a la acción(3)*/>
          <h2 className={s.threeTitle}>
            ¡Comienza tu viaje de aprendizaje hoy mismo!
          </h2>
          <p className={s.threeDescription}>
            Regístrate ahora y obtén acceso a un aprendizaje completo para
            mejorar tus competencias digitales que necesitas para el éxito.
          </p>
          <div className={s.listContainer}>
            <img
              className={s.image}
              src={img1}
              alt="Estudiantes trabajando juntos en una computadora"
            />

            <div className={s.listText}>
              <h3>
                Convierte las competencias digitales en tu llave para el éxito.
              </h3>
              <p>
                ¡Regístrate ahora y convierte las competencias digitales en tu
                llave para el éxito.
                <br /> Nuestra plataforma te ofrece:
              </p>
              <ul className={s.benefitsList}>
                <li className={s.benefit}>
                  <TfiHandPointRight className={s.icon} />
                  <span>
                    Ruta de aprendizaje: Te guiaremos paso a paso a través de
                    las habilidades digitales que necesitas
                  </span>
                </li>
                <li className={s.benefit}>
                  <TfiHandPointRight className={s.icon} />
                  <span>
                    Recursos interactivos: Disfruta de videos explicativos,
                    infografías y ejercicios prácticos para reforzar tu
                    aprendizaje
                  </span>
                </li>
                <li className={s.benefit}>
                  <TfiHandPointRight className={s.icon} />
                  <span>
                    Evaluaciones para asegurar tu progreso: Realiza evaluaciones
                    para verificar tu avance
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a href="/signup" className={s.button}>
            ¡Comienza a aprender ahora!
          </a>
        </div>
      </div>
    </>
  );
};

export default Homepage;
