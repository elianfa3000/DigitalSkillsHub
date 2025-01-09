import s from "./Sciences.module.css";
import Img1 from "../../public/phet/fractionMatcher.png";
import Img2 from "../../public/phet/buildAtomo.png";
import Img3 from "../../public/phet/naturalSelection.png";
import Img4 from "../../public/phet/circuitKit.png";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";

const Sciences = (data) => {
  const { level } = useAuth();
  const navigate = useNavigate();

  const next = () => {
    if (level == 5) {
      navigate("/testSciences");
    } else {
      navigate("/classes");
    }
  };

  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.header}>
          <h1>Ciencias Naturales</h1>
          <p>
            En esta sección aprenderás a utilizar herramientas digitales para
            explorar conceptos de física, química y biología. Comenzaremos con{" "}
            <strong>PhET Simulations</strong>, una plataforma interactiva que
            permite realizar experimentos virtuales de manera segura y sencilla.
          </p>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>PhET Simulations</h2>
        </div>
        <p className={s.descriptionText}>
          PhET Simulations es un proyecto educativo de la Universidad de
          Colorado que ofrece simulaciones interactivas gratuitas en áreas como
          física, química, matemáticas y biología. Estas simulaciones están
          diseñadas para ayudar a comprender fenómenos científicos mediante la
          experimentación virtual.
        </p>
        <h4 className={s.sectionSubTitle}>Guía de inicio PhET </h4>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/qFGCrghpmTg?si=iFv36FfJrISLfi6_"
            title="Guía de inicio PhET "
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <h4 className={s.sectionSubTitle}>¿Qué puedes hacer con PhET?</h4>
        <ul className={s.tipsList}>
          <li>
            Realizar simulaciones de circuitos eléctricos, mezclas químicas y
            leyes del movimiento.
          </li>
          <li>
            Explorar conceptos abstractos mediante interacciones visuales.
          </li>
          <li>
            Aprender haciendo: manipular variables, observar resultados y
            experimentar sin riesgos.
          </li>
        </ul>
        <h4 className={s.sectionSubTitle}>¿Cómo usarlo?</h4>
        <p className={s.descriptionText}>
          No necesitas instalar nada. Solo visita el sitio web de PhET, elige
          una simulación y comienza a explorar. Puedes usarlas directamente en
          línea o descargarlas si no tienes acceso constante a internet.
        </p>

        <div className={s.gray}>
          <h4 className={s.sectionSubTitle}>
            Enlaces a simulaciones recomendadas:
          </h4>
          <h3 className={s.sectionSubTitle}>
            Parejas de fracciones {`"Fraction Matcher"`}
          </h3>
          <p className={s.descriptionText}>
            <strong>¿Qué es?:</strong> Un juego para emparejar fracciones usando
            formas visuales (círculos, rectángulos) y números.
          </p>
          <p className={s.descriptionText}>
            <strong>¿Cómo se usa?:</strong>
          </p>
          <ol className={s.tipsList}>
            <li>
              Al abrir la simulación, elige el modo {`"Fracciones"`} y elige un
              nivel para jugar o Explore libremente.
            </li>
            <li>
              Arrastra las fracciones de la izquierda a su equivalente visual en
              la derecha.
            </li>
            <li>
              Si hay un círculo dividido en partes, complétalo con la fracción
              correcta.
            </li>
            <li>Usa el botón {`"Check"`} para verificar tus respuestas.</li>
          </ol>
          <img className={s.img} src={Img1} alt="Parejas de fracciones" />
          <div className={s.fractionButtonContainer}>
            <a
              className={s.fractionButton}
              href="https://phet.colorado.edu/sims/html/fraction-matcher/latest/fraction-matcher_all.html?locale=es"
              target="_blank"
              rel="noreferrer"
            >
              Simulador de parejas de fracciones
            </a>
          </div>
          <br />
          <h3 className={s.sectionSubTitle}>Construye un Átomo</h3>
          <p className={s.descriptionText}>
            <strong>¿Qué es?:</strong> Un juego para armar átomos usando
            protones, neutrones y electrones.
          </p>
          <p className={s.descriptionText}>
            <strong>¿Cómo se usa?:</strong>
          </p>
          <ol className={s.tipsList}>
            <li>
              Al abrir la simulación, elige el modo {`"Átomo"`} o Explora
              libremente.
            </li>
            <li>
              Arrastra las fracciones de átomos para completar el átomo
              principal
            </li>
          </ol>
          <img className={s.img} src={Img2} alt="Construye un Átomo" />
          <div className={s.fractionButtonContainer}>
            <a
              className={s.fractionButton}
              href="https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_all.html?locale=es"
              target="_blank"
              rel="noreferrer"
            >
              Construye un Átomo
            </a>
          </div>
          <br />
          <h3 className={s.sectionSubTitle}>Selección Natural</h3>
          <p className={s.descriptionText}>
            <strong>¿Qué es?:</strong> Un experimento con conejos que
            evolucionan en diferentes ambientes.
          </p>
          <p className={s.descriptionText}>
            <strong>¿Cómo se usa?:</strong>
          </p>
          <ol className={s.tipsList}>
            <li>
              Al abrir la simulación, elige el modo {`"Intro"`} o Explora
              libremente.
            </li>
            <li>
              Elige un entorno (desierto o artico) y un color de pelaje inicial.
            </li>
            <li>
              Agrega depredadores (lobos) o cambia el clima con los botones para
              evitar la sobre población .
            </li>
            <li>Observa qué conejos sobreviven y cómo cambia la población.</li>
          </ol>
          <img className={s.img} src={Img3} alt="Selección Natural" />
          <div className={s.fractionButtonContainer}>
            <a
              className={s.fractionButton}
              href="https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_all.html?locale=es"
              target="_blank"
              rel="noreferrer"
            >
              Selección Natural
            </a>
          </div>

          <br />
          <h3 className={s.sectionSubTitle}>Kit de Circuitos</h3>
          <p className={s.descriptionText}>
            <strong>¿Qué es?:</strong> Un laboratorio para construir circuitos
            eléctricos simples.
          </p>
          <p className={s.descriptionText}>
            <strong>¿Cómo se usa?:</strong>
          </p>
          <ol className={s.tipsList}>
            <li>
              Al abrir la simulación, elige el modo {`"Introducción"`} o Explora
              libremente.
            </li>
            <li>
              Arrastra pilas, cables, bombillas y resistencias al área de
              trabajo.
            </li>
            <li>
              Conecta los componentes arrastrando los extremos de los cables.
            </li>
            <li>Enciende el interruptor para ver si la bombilla se ilumina.</li>
          </ol>
          <img className={s.img} src={Img4} alt="Kit de Circuitos" />
          <div className={s.fractionButtonContainer}>
            <a
              className={s.fractionButton}
              href="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_all.html?locale=es"
              target="_blank"
              rel="noreferrer"
            >
              Kit de Circuitos
            </a>
          </div>
          <br />

          <p className={s.descriptionText}>
            Puedes explorar muchas más simulaciones en el sitio oficial:
          </p>
          <div
            className={s.fractionButtonContainer}
            style={{ backgroundColor: " #cbe0f8" }}
          >
            <a
              style={{ backgroundColor: "#558dce" }}
              className={s.fractionButton}
              href="https://phet.colorado.edu/es/simulations"
              target="_blank"
              rel="noreferrer"
            >
              PHET
            </a>
          </div>
        </div>
        <br />

        <br />
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Google Earth</h2>
        </div>

        <p className={s.descriptionText}>
          Google Earth es una herramienta de visualización geográfica que te
          permite explorar el planeta Tierra a través de imágenes satelitales,
          mapas 3D e información interactiva. Es ideal para observar
          ecosistemas, volcanes, el cambio climático y la geografía física de
          cualquier región del mundo.
        </p>

        <h3 className={s.sectionSubTitle}>
          ¿Qué es Google Earth y cómo usarlo?
        </h3>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/tLDOEovCz68?si=KL40yij-qdp9NTjA"
            title="¿Qué es Google Earth y cómo usarlo?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={s.gray}>
          <h3 className={s.sectionSubTitle}>
            ¿Qué puedes hacer con Google Earth?
          </h3>
          <ul className={s.tipsList}>
            <li>Observar la geografía de tu comunidad desde el espacio.</li>
            <li>Explorar ecosistemas, volcanes, desiertos y océanos en 3D.</li>
            <li>
              Estudiar los efectos del cambio climático en distintas zonas del
              planeta.
            </li>
            <li>Viajar virtualmente a cualquier parte del mundo.</li>
          </ul>

          <h3 className={s.sectionSubTitle}>¿Cómo usar Google Earth?</h3>
          <p className={s.descriptionText}>
            Google Earth funciona directamente desde tu navegador web. Puedes
            navegar con el mouse, hacer zoom y buscar lugares por nombre.
            También puedes activar capas como el clima, relieves o fronteras.
          </p>

          <h4 className={s.sectionSubTitle}>Enlace para usar Google Earth:</h4>
          <p>
            Accede desde aquí:{" "}
            <a
              className={s.link}
              href="https://earth.google.com/web/"
              target="_blank"
              rel="noreferrer"
            >
              https://earth.google.com/web/
            </a>
          </p>
          <br />
          <h4 className={s.sectionSubTitle}>Actividad sugerida:</h4>
          <p>
            Explora tu comunidad con Google Earth. Busca una zona natural
            cercana (como un río, cerro o parque) y describe lo que observas: su
            ubicación, tipo de ecosistema y si ves cambios en el tiempo usando
            imágenes históricas.
          </p>
        </div>
        <div className={s.videoContainer}>
          <iframe
            src="https://kahoot.it/challenge/?quiz-id=aedc76a6-f09f-4d3a-9cf8-e22b56a66131&single-player=true"
            width="640"
            height="800"
          >
            Cargando...
          </iframe>
        </div>

        <div className={s.gray}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.descriptionText}>
            Gracias al uso de simuladores como PhET y herramientas como Google
            Earth, exploraste fenómenos científicos de forma interactiva. Estas
            actividades te permitieron experimentar de manera segura, fomentar
            la curiosidad científica y desarrollar habilidades de observación y
            análisis.
          </p>
        </div>

        <div className={s.startButton}>
          <div onClick={next}>
            <button>{level == 5 ? "Evaluación" : "Siguiente"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sciences;
