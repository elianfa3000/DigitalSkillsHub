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
            Domina las competencias digitales para un mejor futuro
          </h1>
          <p className={s.oneSubtitle}>
            Aprende sobre las competencias digitales y habilidades de
            aprendizaje en línea que necesitas para mejorar en la era digital
          </p>
          <p className={s.oneDescription}>
            Dominarás las competencias digitales esenciales y a mejorar tus
            habilidades de aprendizaje en línea para alcanzar el éxito en la era
            digital. Nuestra plataforma te ofrece una experiencia de aprendizaje
            interactiva y de alta calidad. Aprende a tu propio ritmo y recibe
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
              <h3>Nivel 1</h3>
              <p>
                En este nivel aprenderás los conceptos esenciales para manejar
                herramientas digitales con confianza, incluyendo la navegación
                web segura, búsquedas efectivas en Google y principios de
                seguridad en línea para proteger tu información personal.
              </p>
            </li>
            <li className={s.concept}>
              <h3>Nivel 2</h3>
              <p>
                Este nivel se enfoca en desarrollar habilidades para estudiar de
                manera más eficiente mediante técnicas como el método Cornell y
                la técnica Pomodoro, además de aprender a evaluar la calidad de
                la información y aplicar el pensamiento crítico en entornos
                digitales.
              </p>
            </li>

            <li className={s.concept}>
              <h3>Nivel 3</h3>
              <p>
                Aquí aprenderás a utilizar herramientas esenciales como Google
                Drive, Google Docs y Microsoft Teams para organizar, colaborar y
                gestionar tus proyectos de forma eficiente, facilitando el
                trabajo en equipo y la productividad en línea.
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
            desarrollar las competencias digitales que necesitas para el éxito.
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
