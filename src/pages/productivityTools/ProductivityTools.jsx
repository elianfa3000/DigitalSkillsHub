import img from "../../public/carpetas.png";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import flecha from "../../public/flecha.png";
import s from "./ProductivityTools.module.css";
const ProductivityTools = (data) => {
  //2.2 Herramientas de productividad

  const navigate = useNavigate();
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Introducción</h2>
        <p className={s.tipText}>
          Google ofrece herramientas gratuitas que facilitan el trabajo y la
          organización en línea. Google Docs y Google Drive son dos aplicaciones
          que te permiten crear documentos, almacenarlos en la nube y
          compartirlos con otros. Aprender a usar estas herramientas hará que tu
          estudio y colaboración en línea sean más fáciles y eficientes.
        </p>

        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Introducción a Google Drive</h2>
          <p className={s.tipText}>
            Google Drive es una plataforma en la nube donde puedes guardar y
            organizar archivos. Al estar en la nube, puedes acceder a tus
            documentos desde cualquier dispositivo con Internet
          </p>
          <h3 className={s.subTitle}>Cómo usar Google Drive:</h3>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Subir archivos:</strong> Puedes subir archivos desde tu
              computadora a Google Drive para tener acceso a ellos en cualquier
              lugar.
            </li>
            <li className={s.tipText}>
              <strong>Crear un documento nuevo:</strong> Cómo crear un documento
              desde cero en Google Docs.
            </li>
            <li className={s.tipText}>
              <strong>Organizar archivos en carpetas:</strong> Crea carpetas
              para organizar tus documentos por tema, materia o proyecto.
            </li>
            <li className={s.tipText}>
              <strong>Colaboración en tiempo real:</strong> Google Docs permite
              que varias personas editen el mismo documento al mismo tiempo.
              Puedes ver los cambios en tiempo real y agregar comentarios.
            </li>
          </ul>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/G1qMhesHagk?si=hJIyscwPdFOFRBZ9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>

          <h3 className={s.subTitle}>
            ¿Cómo subir un documento a Google Drive y editarlo?{" "}
          </h3>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Jvb9GmCns6s?si=Qm3C0zOPi8TL_6Rh"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>
            Almacenamiento y organización de documentos en Google Drive
          </h2>
          <p className={s.tipText}>
            Una vez que creas un documento en Google Docs, se guarda
            automáticamente en tu Google Drive. Aprender a organizar los
            documentos en carpetas y etiquetarlos facilita el acceso y la
            gestión de tus trabajos. Lo mejor es crear carpetas para cada
            asignatura o proyecto y asignarle colores, tal como se muestra a
            continuación.
          </p>
          <img src={img} alt="Carpeas ordenadas" className={s.videoEmbed} />
        </div>

        <h2 className={s.sectionTitle}>
          Compartir y colaborar en documentos en Google Docs
        </h2>
        <p className={s.tipText}>
          La colaboración es una de las mayores ventajas de Google Docs. Puedes
          compartir documentos con compañeros para que puedan ver, comentar o
          editar el contenido, facilitando el trabajo en equipo.
        </p>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DleqnGi--Gk?si=3Rf5DpkWFLfj-uXE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.tipText}>
            Dominar herramientas como Google Docs y Google Drive te permitirá
            trabajar y organizar tus proyectos de manera más eficiente. Al
            aprender a crear, organizar y compartir documentos, estarás mejor
            preparado para colaborar en proyectos y gestionar tus estudios de
            forma productiva.
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/criticalThinking");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button
              className={s.button}
              src={flecha}
              onClick={() => {
                navigate("/teams");
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

export default ProductivityTools;
