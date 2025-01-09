import s from "./Language.module.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Language = (data) => {
  const navigate = useNavigate();
  const { level } = useAuth();
  const next = () => {
    if (level == 4) {
      navigate("/testLanguage");
    } else {
      navigate("/classes");
    }
  };

  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.header}>
          <h1>Lengua y Literatura</h1>

          <p className={s.descriptionText}>
            En esta sección aprenderás a usar herramientas digitales para
            mejorar tu escritura, organizar ideas y trabajar en equipo.
            Empezaremos con <strong>Microsoft Word </strong> y
            <strong> Google Docs</strong>, programas clave para crear
            documentos.
          </p>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Microsoft Word</h2>
        </div>
        <p className={s.descriptionText}>
          Word es un procesador de textos que te permite crear documentos
          formales como: ensayos o informes y aplicar normas académicas como
          márgenes, citas y bibliografías.
        </p>
        <h4 className={s.sectionSubTitle}>Introducción a Microsoft Word</h4>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CQde1HZdcmY"
            title="Introducción a Microsoft Word ¿Qué es Microsoft Word? ¿Para que sirve?"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <div className={s.gray}>
          <h4 className={s.sectionSubTitle}>¿Qué puedes hacer en Word?</h4>
          <ul className={s.tipsList}>
            <li>Trabajos de investigación con normas APA/MLA</li>
            <li>Documentos con diseño (columnas, índices)</li>
            <li>Trabajar sin internet (offline)</li>
          </ul>
        </div>

        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Google Docs</h2>
        </div>
        <h4 className={s.sectionSubTitle}>
          ¿Qué es y para qué sirve Google Docs?
        </h4>
        <p className={s.descriptionText}>
          Google Docs es una herramienta idéntica a Word en la nube para
          escritura colaborativa:
        </p>
        <h4 className={s.sectionSubTitle}>
          Que es Google Docs, definicion y noticias
        </h4>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/DjXZ5o1mNJQ?si=wpC8jkVQIuB3qGT2"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <p className={s.descriptionText}>
          Google Docs sirve principalmente para:
        </p>
        <ul className={s.tipsList}>
          <li>Trabajos en equipo con comentarios en tiempo real</li>
          <li>Edición desde cualquier dispositivo</li>
          <li>Integración con otras herramientas de Google</li>
        </ul>
        <div className={s.gray}>
          <h2 className={s.sectionTitle}>Google Drive</h2>
          <p className={s.descriptionText}>
            Google nos brinda herramientas similares a las de{" "}
            <strong>Microsoft office</strong>, por lo tanto, ten en cuenta que:
          </p>
          <ul className={s.tipsList}>
            <li>
              <strong>Google Docs</strong> es igual a<strong> Word</strong>.
            </li>
            <li>
              <strong>google sheets</strong> es igual a <strong>Excel</strong>.
            </li>
            <li>
              <strong>google Slides</strong> es igual a
              <strong> PowerPoint</strong>.
            </li>
          </ul>
          <p className={s.descriptionText}>
            Son herramientas fundamentales para trabajar de manera colaborativa,
            pero para usar estas herramientas necesitamos ingresar a{" "}
            <strong>Google Drive</strong> que es donde se encuentran todas estas
            herramientas.
          </p>
          <h4 className={s.sectionSubTitle}>Cómo usar Google Drive</h4>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/G1qMhesHagk?si=WOJMBgfuJhGLoZZ6"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>

          <p className={s.descriptionText}>Google Drive sirve para:</p>
          <ul className={s.tipsList}>
            <li>
              Colaboración en tiempo real con otras personas en documentos,
              hojas de cálculo y presentaciones.
            </li>
            <li>
              Sincronización automática de archivos entre dispositivos para
              tener siempre la versión más reciente.
            </li>
            <li>
              Respaldo seguro de tus documentos importantes con protección
              contra pérdida de datos.
            </li>
          </ul>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>LanguageTool</h2>
        </div>
        <p className={s.descriptionText}>
          LanguageTool es una herramienta de corrección linguística que utiliza
          inteligencia artificial para analizar textos en múltiples idiomas. Sus
          principales características técnicas incluyen:
        </p>
        <ul className={s.tipsList}>
          <li>Motor de reglas gramaticales para 30 idiomas</li>
          <li>Detección de errores contextuales</li>
          <li>Integración con procesadores de texto populares</li>
          <li>API para desarrolladores</li>
        </ul>

        <div className={s.gray}>
          <h4 className={s.sectionSubTitle}>
            Cómo usar el corrector Language Tool
          </h4>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/TY-heZaJx5Y?si=tDUImZ3XP8YZK_Ve"
              title="Cómo usar el corrector Language Tool"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h4 className={s.sectionSubTitle}>
            El flujo del procesamiento de Texto
          </h4>
          <div className={s.tipsList}>
            <div className="etapa">
              <h4>1. Análisis Morfológico</h4>
              <p>Descomposición del texto en componentes léxicos</p>
            </div>
            <br />
            <div className="etapa">
              <h4>2. Aplicación de Reglas</h4>
              <p>Verificación contra más de 2,000 patrones gramaticales</p>
            </div>
            <br />
            <div className="etapa">
              <h4>3. Sugerencias Contextuales</h4>
              <p>Generación de correcciones usando modelos de lenguaje</p>
            </div>
          </div>
          <h4 className={s.sectionSubTitle}>Uso Responsable</h4>
          <ul className={s.tipsList}>
            <li>La herramienta no sustituye el aprendizaje gramatical</li>
            <li>Revisión humana obligatoria de sugerencias</li>
            <li>Evitar dependencia para producción textual</li>
          </ul>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Coggle: Mapas mentales</h2>
        </div>
        <p className={s.descriptionText}>
          Coggle es una herramienta online para crear mapas mentales y
          conceptuales interactivos que permite organizar ideas visualmente y
          colaborar en tiempo real con otras personas.
        </p>

        <div className={s.gray}>
          <p className={s.sectionSubTitle}>Introducción a la Herramienta</p>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/XDJiVLO-7dI?si=mpttABzuj5y29s4V"
              title="Coggle tutorial para Mapas mentales y conceptuales interactivos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className={s.descriptionText}>
            Esta plataforma especializada en creación de diagramas jerárquicos
            que permite:
          </p>
          <ul className={s.tipsList}>
            <li>Estructuración visual de tus ideas</li>
            <li>Colaboración en tiempo real</li>
            <li>Exportación a formatos académicos (PDF, texto)</li>
          </ul>
        </div>

        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Mendeley: Gestor de referencias</h2>
        </div>

        <p className={s.descriptionText}>
          <strong>Mendeley</strong> es una herramienta digital gratuita que
          sirve para organizar, citar y gestionar referencias bibliográficas. Es
          muy útil al momento de escribir trabajos de investigación, ya que te
          ayuda a citar correctamente libros, artículos y páginas web.
        </p>

        <h4 className={s.sectionSubTitle}>¿Qué puedes hacer con Mendeley?</h4>
        <ul className={s.tipsList}>
          <li>Guardar y organizar fuentes de información académica.</li>
          <li>Insertar citas automáticas en formato APA, MLA, IEEE, etc.</li>
          <li>Generar bibliografías de manera automática.</li>
          <li>Leer, subrayar y comentar archivos PDF académicos.</li>
        </ul>
        <div className={s.gray}>
          <p className={s.sectionSubTitle}>
            <strong>Introducción a la Mendeley</strong>
          </p>
          <div className={s.videoContainer}>
            <iframe
              width="560"
              className={s.videoEmbed}
              height="315"
              src="https://www.youtube.com/embed/dVd7U6u7kws?si=8hURAbGqhA21IxHg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <h4 className={s.sectionSubTitle}>¿Cómo se usa?</h4>
          <ol className={s.tipsList}>
            <li>Descarga e instala Mendeley desde su sitio oficial.</li>
            <li>Crea una cuenta gratuita.</li>
            <li>Agrega tus fuentes (PDFs, enlaces, libros, artículos).</li>
            <li>
              Conéctalo a Word para insertar citas automáticas mientras
              escribes.
            </li>
          </ol>
          <p className={s.descriptionText}>
            Mendeley es muy útil si vas a realizar ensayos, monografías o tu
            tesis, ya que te evita errores al citar y te ahorra mucho tiempo al
            generar la bibliografía automáticamente.
          </p>
        </div>
        <div className={s.videoContainer}>
          <iframe
            src="https://kahoot.it/challenge/?quiz-id=249c8f7c-26d0-4285-a8eb-4036dca5f9ba&single-player=true"
            width="640"
            height="800"
          >
            Cargando...
          </iframe>
        </div>
        <div className={s.gray}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.descriptionText}>
            A través de herramientas como Google Docs, LanguageTool, Canva y
            Mendeley, has aprendido a desarrollar tus habilidades de escritura,
            comprensión lectora y expresión visual. Estas competencias no solo
            fortalecen tu desempeño en Lengua y Literatura, sino que también te
            preparan para comunicarte efectivamente en entornos digitales y
            académicos.
          </p>
        </div>

        <div className={s.startButton}>
          <div onClick={next}>
            <button>{level == 6 ? "Evaluación" : "Siguiente"}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Language;
