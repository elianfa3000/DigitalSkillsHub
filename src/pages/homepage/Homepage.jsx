import { useEffect } from "react";
import "./Homepage.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import img1 from "../../../public/img1.jpg";
import { TfiHandPointRight } from "react-icons/tfi";
import FormOne from "../../components/forms/FormOne.jsx";
import { useAuth } from "../../context/AuthContext.jsx";

const Homepage = () => {
  const { saluda, user, setUser } = useAuth();
  //git remote add origin https://github.com/elianfa3000/DigitalSkillsHub.git
  useEffect(() => {
    saluda();
  }, [saluda]);
  return (
    <>
      <Navbar />
      <FormOne />
      <section className="welcome" /*Diálogo de bienvenida (1)*/>
        <div className="container_one">
          <h1 className="one_title">
            Domina las competencias digitales para tu futuro profesional
          </h1>
          <p className="one_subtitle">
            Aprende las habilidades tecnológicas que necesitas para triunfar en
            la era digital y conseguir el trabajo que deseas.
          </p>
          <p className="one_description">
            Esta plataforma te ofrece una experiencia de aprendizaje
            personalizada para que puedas adquirir las competencias digitales
            esenciales para tu futuro profesional y personal. Aprende a tu
            propio ritmo con contenidos interactivos y de alta calidad, y recibe
            evaluaciones que te ayudarán a medir tu progreso.
          </p>
        </div>

        <div className="container_two" /*Conceptos clave (2)*/>
          <h2 className="two-title">Conceptos clave</h2>
          <p className="two-description">
            Presentamos los pilares fundamentales para tu éxito en el mundo
            digital:
          </p>
          <ul className="concept-list">
            <li className="concept">
              <h3>Uso de internet</h3>
              <p>
                Navega por la web de forma segura y eficiente, encuentra
                información confiable y aprovecha al máximo las herramientas
                digitales.
              </p>
            </li>
            <li className="concept">
              <h3>Manejo de software</h3>
              <p>
                Domina las aplicaciones más utilizadas en el ámbito profesional
                y personal, como procesadores de texto, hojas de cálculo,
                presentaciones y herramientas de comunicación.
              </p>
            </li>
            <li className="concept">
              <h3>Programación</h3>
              <p>
                Desarrolla habilidades básicas de programación para crear tus
                propios programas, automatizar tareas y comprender mejor el
                funcionamiento de la tecnología.
              </p>
            </li>
            <li className="concept">
              <h3>Seguridad informática</h3>
              <p>
                Protege tus dispositivos y datos personales de ciberamenazas,
                aprende a identificar riesgos y a utilizar herramientas de
                seguridad efectivas.
              </p>
            </li>
            <li className="concept">
              <h3>Comunicación digital</h3>
              <p>
                Comunícate de manera efectiva en entornos digitales, utilizando
                diferentes herramientas y plataformas, y desarrolla una
                presencia profesional en línea.
              </p>
            </li>
          </ul>
        </div>

        <div className="container_three" /*Llamado a la acción(3)*/>
          <h2 className="three-title">
            ¡Comienza tu viaje de aprendizaje hoy mismo!
          </h2>
          <p className="three-description">
            Regístrate ahora y obtén acceso a un aprendizaje completo para
            desarrollar las competencias digitales que necesitas para el éxito.
          </p>
          <div className="list-container">
            <img
              className="image"
              src={img1}
              alt="Estudiantes trabajando juntos en una computadora"
            />

            <div className="list_text">
              <h3>
                Convierte las competencias digitales en tu llave para el éxito.
              </h3>
              <p>¡Regístrate ahora y comienza a construir tu futuro!</p>
              <ul className="benefits-list">
                <li className="benefit">
                  <TfiHandPointRight className="icon" />
                  <span>
                    Ruta de aprendizaje personalizada: Te guiaremos paso a paso
                    a través de las habilidades digitales que necesitas.
                  </span>
                </li>
                <li className="benefit">
                  <TfiHandPointRight className="icon" />
                  <span>
                    Recursos interactivos y descargables: Disfruta de videos
                    explicativos, infografías y ejercicios prácticos para
                    reforzar tu aprendizaje.
                  </span>
                </li>
                <li className="benefit">
                  <TfiHandPointRight className="icon" />
                  <span>
                    Evaluaciones para medir tu progreso: Realiza evaluaciones
                    para verificar tu avance y obtener retroalimentación
                    personalizada.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <a href="#" className="button">
            ¡Comienza a aprender ahora!
          </a>
        </div>
      </section>
    </>
  );
};

export default Homepage;
