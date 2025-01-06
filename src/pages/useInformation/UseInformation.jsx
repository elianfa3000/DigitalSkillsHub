import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import s from "./Useinformation.module.css";
import flecha from "../../public/flecha.png";
const UseInformation = (data) => {
  const navigate = useNavigate();
  return (
    //1.4-2.1 Uso básico de dispositivos - Acceso y uso de información
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <h2 className={s.sectionTitle}>Introducción</h2>
        <p className={s.introText}>
          En Internet, es fácil encontrar todo tipo de información. Sin embargo,
          no toda la información es confiable o puede utilizarse sin permiso. En
          esta sección aprenderás cómo evaluar la información, respetar los
          derechos de autor y utilizar de manera ética lo que encuentras en
          línea.
        </p>

        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Evaluar información relevante</h2>
          <p className={s.tipText}>
            Ya sabes identificar sitios seguros y confiables, pero ahora
            aprenderás a analizar la calidad y relevancia de la información que
            encuentras.
          </p>
          <h3 className={s.subTitle}>
            Métodos para evaluar información relevante:
          </h3>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong> Profundidad y precisión del contenido:</strong> Verifica
              si la fuente trata el tema en profundidad y sin errores. Fuentes
              confiables suelen ofrecer detalles y análisis completos.
            </li>
            <li className={s.tipText}>
              <strong> Evidencia y fuentes citadas:</strong> La información
              confiable suele respaldarse con evidencia o citas de estudios,
              noticias, o datos de investigaciones.
            </li>
            <li className={s.tipText}>
              <strong> Reputación de la fuente:</strong> Las fuentes reconocidas
              (sitios gubernamentales, universidades, organizaciones de
              investigación) suelen ser más confiables.
            </li>
          </ul>
        </div>
        <div>
          <h2 className={s.sectionTitle}>Uso ético de la información</h2>
          <p className={s.tipText}>
            Usar la información de manera ética significa respetar el trabajo de
            los demás y asegurarse de dar crédito a los autores originales. Esto
            evita el plagio y respeta los derechos de autor.
          </p>
          <h2>Principios de uso ético:</h2>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Citar adecuadamente:</strong> Cuando usas palabras o ideas
              de otra persona, siempre debes citar al autor. Existen varias
              maneras de citar, pero siempre debes mencionar la fuente y, de ser
              posible, el autor y la fecha.
            </li>
            <li className={s.tipText}>
              <strong>Usar contenido con licencia adecuada:</strong> Algunos
              contenidos en Internet están protegidos por derechos de autor y no
              se pueden usar sin permiso. Utiliza recursos bajo licencias de
              libre uso, como Creative Commons, o con permisos de uso justo.
            </li>
          </ul>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rqC38gAcrbQ?si=igMW-HhDbMhMtMta?rel=0"
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
            Herramientas para organizar y citar fuentes
          </h2>
          <p className={s.tipText}>
            Aprender a organizar tus fuentes y citas facilita el trabajo y
            asegura que no olvides ningún crédito.
          </p>
          <h2 className={s.sectionTitle}>Herramientas recomendadas:</h2>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Google Scholar:</strong> Te ayuda a buscar fuentes
              académicas confiables y facilita la generación de citas en
              diferentes formatos.
            </li>
            <div className={s.videoContainer}>
              <iframe
                className={s.videoEmbed}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/4z9ypuLY5_M?si=AOuJ0MddIUHqSxV-"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <li className={s.tipText}>
              <strong>Cite This For Me:</strong> Un generador de citas online
              que permite organizar y dar formato a las referencias de tus
              fuentes.
            </li>
            <div className={s.videoContainer}>
              <iframe
                className={s.videoEmbed}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/nOPPBgKe5Fs?si=kvknrfbld-qaPW6t"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>

            <li className={s.tipText}>
              <strong>Mendeley o Zotero:</strong> Herramientas para almacenar y
              gestionar tus fuentes, útiles para trabajos de investigación.
            </li>

            <div className={s.videoContainer}>
              <iframe
                className={s.videoEmbed}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/dVd7U6u7kws?si=a0IDxIUdJhFJmVbc"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
          </ul>
        </div>
        <div style={{ backGround: "red" }}>
          <h2 className={s.sectionTitle}>
            Práctica: Realiza una pequeña investigación y cita tus fuentes
          </h2>
          <p className={s.tipText}>Actividad práctica donde debes:</p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              Buscar información sobre un tema de su interés utilizando los
              métodos de evaluación de fuentes confiables.
            </li>
            <li className={s.tipText}>
              Utilizar una herramienta de citas para organizar y citar al menos
              dos fuentes de manera correcta.
            </li>
            <li className={s.tipText}>
              Escribir un párrafo breve sobre el tema y añadir las citas de las
              fuentes usadas al final.
            </li>
          </ul>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.tipText}>
            Al aprender a evaluar, citar y usar información de manera ética,
            puedes asegurarte de que estás respetando el trabajo de los demás y
            contribuyendo a una cultura de integridad y respeto en línea.
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/webSecurity");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button
              className={s.button}
              src={flecha}
              onClick={() => {
                navigate("/studytechniques");
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

export default UseInformation;
