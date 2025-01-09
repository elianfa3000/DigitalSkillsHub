import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import flecha from "../../public/flecha.png";
import s from "./InfoAccess.module.css";
const InfoAccess = (data) => {
  //1.2    Uso básico de dispositivos - Búsqueda de información en Google
  const navigate = useNavigate();
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.introSection}>
          <h2 className={s.sectionTitle}>Introducción</h2>
          <p className={s.introText}>
            Buscar información en línea es una de las habilidades más
            importantes para aprender de manera efectiva. En esta sección,
            aprenderás a utilizar Google, el motor de búsqueda más utilizado,
            para encontrar la información que necesitas de manera rápida y
            precisa. También te enseñaremos a evaluar la calidad de las fuentes
            para que utilices información confiable y segura.
          </p>
          <h2 className={s.sectionTitle}>Búsqueda en Google</h2>
          <p className={s.descriptionText}>
            Google es un motor de búsqueda, lo que significa que busca en todo
            Internet las páginas web que contienen las palabras clave que
            introduces. Es como una gran biblioteca digital que organiza los
            resultados para mostrarte los más relevantes
          </p>
        </div>

        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Búsqueda básica en Google</h2>
          <p className={s.tipText}>
            Para realizar una búsqueda básica en Google, solo necesitas escribir
            las palabras clave relacionadas con lo que quieres encontrar. Aquí
            tienes algunos consejos para mejorar tus resultados:
          </p>
          <div className={s.toolsG}>
            <h3 className={s.subTitle}>1. Usa Palabras Clave Específicas</h3>
            <p className={s.tipText}>
              En lugar de escribir una frase larga, utiliza palabras clave
              cortas que describan exactamente lo que necesitas
            </p>
            <p className={s.exampleText}>
              <strong>Ejemplo:</strong> En lugar de escribir ``¿Cómo puedo
              mejorar mi concentración mientras estudio``, escribe
              ``concentración estudiar consejos``
            </p>
          </div>
          <div className={s.toolsG}>
            <h3 className={s.subTitle}>2. Haz Preguntas Simples</h3>
            <p className={s.tipText}>
              Google es excelente para responder preguntas directas
            </p>
            <p className={s.exampleText}>
              <strong>Ejemplo:</strong> ``¿Qué es la fotosíntesis`` te dará una
              respuesta clara y precisa
            </p>
          </div>

          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fXPFpNASbRE?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <h2 className={s.sectionTitle}>
          Búsqueda Avanzada: Filtra y Encuentra Información Relevante
        </h2>
        <p className={s.tipText}>
          A veces, una búsqueda simple no es suficiente. Google te permite hacer
          búsquedas más avanzadas para encontrar exactamente lo que necesitas.
        </p>

        <h2 className={s.sectionTitle}>Herramientas Útiles de Google</h2>
        <div className={s.toolsG}>
          <h3 className={s.subTitle}>Búsqueda entre Comillas {`(" ")`}</h3>
          <p className={s.tipText}>
            Usa comillas para buscar una frase exacta. Esto te ayudará a
            encontrar resultados que contengan exactamente esas palabras en ese
            orden.
          </p>
          <p className={s.exampleText}>
            <strong>Ejemplo:</strong> {`"teoría del Big Bang"`}
          </p>
        </div>
        <div className={s.toolsG}>
          <h3 className={s.subTitle}>
            Búsqueda en un Sitio Específico (site:)
          </h3>
          <p className={s.tipText}>
            Si solo quieres resultados de un sitio web específico, escribe{" "}
            <code>site:</code> seguido de la dirección del sitio.
          </p>
          <p className={s.exampleText}>
            <strong>Ejemplo:</strong> {`"cambio climático site:.org"`} para
            obtener solo resultados de la página de las Naciones Unidas.
          </p>
        </div>
        <div className={s.toolsG}>
          <h3 className={s.subTitle}>Excluir Términos (-)</h3>
          <p className={s.tipText}>
            Si quieres excluir palabras de los resultados, usa un guion antes de
            la palabra que deseas eliminar.
          </p>
          <p className={s.exampleText}>
            <strong>Ejemplo:</strong> {`"jaguar -automóvil"`} si quieres buscar
            información sobre el animal, no el coche.
          </p>
        </div>
        <div className={s.toolsG}>
          <h3 className={s.subTitle}>
            Búsqueda por Tipo de Archivo (filetype:)
          </h3>
          <p className={s.tipText}>
            Si estás buscando un documento específico, como un PDF o una
            presentación, puedes usar <code>filetype:</code>.
          </p>
          <p className={s.exampleText}>
            <strong>Ejemplo:</strong> {`"reglamento escolar filetype:pdf"`}
          </p>
        </div>

        <br />
        <h3 className={s.sectionTitle}>TRUCAZOS UTILES</h3>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="315"
            height="560"
            src="https://www.youtube.com/embed/CfhEzDd-hFM?rel=0" //?rel=0
            title="YouTube Shorts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className={s.sectionTitle}>
          Evaluación de la credibilidad de las fuentes
        </h2>
        <p className={s.tipText}>
          No toda la información que encuentras en Internet es confiable. Es
          importante que sepas cómo evaluar la calidad de una fuente antes de
          usarla. Aquí te damos algunos consejos:
        </p>
        <div className={s.toolsG}>
          {" "}
          <h3 className={s.subTitle}>1. Revisa el Autor</h3>
          <p className={s.tipText}>
            Asegúrate de que la información provenga de una fuente confiable o
            de un experto en el tema.
          </p>
          <p className={s.exampleText}>
            <strong>Ejemplo:</strong> Un artículo sobre salud escrito por un
            doctor es más confiable que uno de un blog sin autor conocido.
          </p>
        </div>
        <div className={s.toolsG}>
          <h3 className={s.subTitle}>2. Fecha de Publicación</h3>
          <p className={s.tipText}>
            Verifica que la información esté actualizada, especialmente en temas
            que cambian rápidamente, como la ciencia o la tecnología.
          </p>
        </div>
        <div className={s.toolsG}>
          <h3 className={s.subTitle}>3. Extensión y Profundidad</h3>
          <p className={s.tipText}>
            Los artículos cortos y con poca profundidad pueden no ser fiables.
            Busca información detallada que explique el tema en su totalidad.
          </p>
        </div>
        <div className={s.toolsG}>
          {" "}
          <h3 className={s.subTitle}>4. Dominio de la Web</h3>
          <p className={s.tipText}>
            Prefiere sitios web con dominios como <code>.edu</code>,{" "}
            <code>.gov</code>, o <code>.org</code>, ya que suelen ser más
            confiables que otros dominios.
          </p>
        </div>
        <h4 className={s.sectionTitle}>
          5 Tips para encontrar fuentes de información
        </h4>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VNjSCUxrvWQ?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <h2 className={s.sectionTitle}>Uso ético de la información</h2>
        <p className={s.conclusionText}>
          Una vez que encuentras información confiable, es importante usarla de
          manera ética. Esto incluye:
        </p>

        <h3 className={s.subTitle}>1. Citar Correctamente las Fuentes</h3>
        <p className={s.tipText}>
          Si tomas información de una página web, asegúrate de citarla
          correctamente. Esto significa dar crédito al autor original y evitar
          el plagio. Citar correctamente es fundamental en trabajos de
          investigación y académicos
        </p>

        <h3 className={s.subTitle}>2. Respetar los Derechos de Autor</h3>
        <p className={s.tipText}>
          No uses imágenes, textos o videos sin permiso. Siempre verifica si el
          contenido es de libre uso o si tiene licencia. Usar contenido sin
          autorización puede llevar a problemas legales
        </p>

        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Actividad práctica</h2>
          <p className={s.tipText}>
            Ahora que sabes cómo realizar búsquedas avanzadas y evaluar la
            credibilidad de las fuentes, te invitamos a realizar la siguiente
            actividad:
            <br />- Realiza una búsqueda en Google sobre un tema que te interese
            utilizando los consejos de búsqueda avanzada que aprendiste.
            <br />- Encuentra dos fuentes confiables y explica por qué las
            consideras confiables (autor, fecha, dominio).
            <br /> -Escribe un breve resumen de la información que encontraste y
            cita correctamente las fuentes.
          </p>
        </div>
        <div className={s.safetyTips}>
          <h3 className={s.subTitle}>Contenido extra</h3>
          <a
            className={s.more}
            href="https://www.umce.cl/images/recomendaciones-informacion-desde-internet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver PDF
          </a>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.conclusionText}>
            Buscar información en línea es una habilidad fundamental para tu
            desarrollo académico y profesional. Saber cómo usar Google de manera
            eficiente te ayudará a encontrar información precisa y confiable y a
            utilizarla de manera ética. ¡Pon en práctica lo que has aprendido y
            sigue explorando el vasto mundo de la información en línea!
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/navigation");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button
              className={s.button}
              src={flecha}
              onClick={() => {
                navigate("/webSecurity");
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

export default InfoAccess;
