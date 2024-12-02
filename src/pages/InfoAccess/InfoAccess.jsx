import Navbar from "../../components/navbar/Navbar";

const InfoAccess = (data) => {
  //1.2    Uso básico de dispositivos - Búsqueda de información en Google
  return (
    <>
      <Navbar outside={data} />
      <div>
        <div>
          <h2>Introducción</h2>
          <p>
            Buscar información en línea es una de las habilidades más
            importantes para aprender de manera efectiva. En esta sección,
            aprenderás a utilizar Google, el motor de búsqueda más utilizado,
            para encontrar la información que necesitas de manera rápida y
            precisa. También te enseñaremos a evaluar la calidad de las fuentes
            para que utilices información confiable y segura.
          </p>
          <h2>Búsqueda en Google</h2>
          <p>
            Google es un motor de búsqueda, lo que significa que busca en todo
            Internet las páginas web que contienen las palabras clave que
            introduces. Es como una gran biblioteca digital que organiza los
            resultados para mostrarte los más relevantes
          </p>
        </div>
        <div>
          <h2>Búsqueda básica en Google</h2>
          <p>
            Para realizar una búsqueda básica en Google, solo necesitas escribir
            las palabras clave relacionadas con lo que quieres encontrar. Aquí
            tienes algunos consejos para mejorar tus resultados:
          </p>

          <h3>1. Usa Palabras Clave Específicas</h3>
          <p>
            En lugar de escribir una frase larga, utiliza palabras clave cortas
            que describan exactamente lo que necesitas
          </p>
          <p>
            <strong>Ejemplo:</strong> En lugar de escribir ``¿Cómo puedo mejorar
            mi concentración mientras estudio``, escribe ``concentración
            estudiar consejos``
          </p>

          <h3>2. Haz Preguntas Simples</h3>
          <p>Google es excelente para responder preguntas directas</p>
          <p>
            <strong>Ejemplo:</strong> ``¿Qué es la fotosíntesis`` te dará una
            respuesta clara y precisa
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/fXPFpNASbRE?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h1>Búsqueda Avanzada: Filtra y Encuentra Información Relevante</h1>
          <p>
            A veces, una búsqueda simple no es suficiente. Google te permite
            hacer búsquedas más avanzadas para encontrar exactamente lo que
            necesitas.
          </p>

          <h2>Herramientas Útiles de Google</h2>

          <h3>Búsqueda entre Comillas (" ")</h3>
          <p>
            Usa comillas para buscar una frase exacta. Esto te ayudará a
            encontrar resultados que contengan exactamente esas palabras en ese
            orden.
          </p>
          <p>
            <strong>Ejemplo:</strong> "teoría del Big Bang"
          </p>

          <h3>Búsqueda en un Sitio Específico (site:)</h3>
          <p>
            Si solo quieres resultados de un sitio web específico, escribe{" "}
            <code>site:</code> seguido de la dirección del sitio.
          </p>
          <p>
            <strong>Ejemplo:</strong> "cambio climático site:.org" para obtener
            solo resultados de la página de las Naciones Unidas.
          </p>

          <h3>Excluir Términos (-)</h3>
          <p>
            Si quieres excluir palabras de los resultados, usa un guion antes de
            la palabra que deseas eliminar.
          </p>
          <p>
            <strong>Ejemplo:</strong> "jaguar -automóvil" si quieres buscar
            información sobre el animal, no el coche.
          </p>

          <h3>Búsqueda por Tipo de Archivo (filetype:)</h3>
          <p>
            Si estás buscando un documento específico, como un PDF o una
            presentación, puedes usar <code>filetype:</code>.
          </p>
          <p>
            <strong>Ejemplo:</strong> "reglamento escolar filetype:pdf"
          </p>
          <iframe
            width="315"
            height="560"
            src="https://www.youtube.com/embed/CfhEzDd-hFM?rel=0" //?rel=0
            title="YouTube Shorts"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2>Evaluación de la credibilidad de las fuentes</h2>
          <p>
            No toda la información que encuentras en Internet es confiable. Es
            importante que sepas cómo evaluar la calidad de una fuente antes de
            usarla. Aquí te damos algunos consejos:
          </p>

          <h3>1. Revisa el Autor</h3>
          <p>
            Asegúrate de que la información provenga de una fuente confiable o
            de un experto en el tema.
          </p>
          <p>
            <strong>Ejemplo:</strong> Un artículo sobre salud escrito por un
            doctor es más confiable que uno de un blog sin autor conocido.
          </p>

          <h3>2. Fecha de Publicación</h3>
          <p>
            Verifica que la información esté actualizada, especialmente en temas
            que cambian rápidamente, como la ciencia o la tecnología.
          </p>

          <h3>3. Extensión y Profundidad</h3>
          <p>
            Los artículos cortos y con poca profundidad pueden no ser fiables.
            Busca información detallada que explique el tema en su totalidad.
          </p>

          <h3>4. Dominio de la Web</h3>
          <p>
            Prefiere sitios web con dominios como <code>.edu</code>,{" "}
            <code>.gov</code>, o <code>.org</code>, ya que suelen ser más
            confiables que otros dominios.
          </p>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/VNjSCUxrvWQ?rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div>
          <h2>Uso ético de la información</h2>
          <p>
            Una vez que encuentras información confiable, es importante usarla
            de manera ética. Esto incluye:
          </p>

          <h3>1. Citar Correctamente las Fuentes</h3>
          <p>
            Si tomas información de una página web, asegúrate de citarla
            correctamente. Esto significa dar crédito al autor original y evitar
            el plagio. Citar correctamente es fundamental en trabajos de
            investigación y académicos
          </p>

          <h3>2. Respetar los Derechos de Autor</h3>
          <p>
            No uses imágenes, textos o videos sin permiso. Siempre verifica si
            el contenido es de libre uso o si tiene licencia. Usar contenido sin
            autorización puede llevar a problemas legales
          </p>
        </div>
        <div style={{ background: "red" }}>
          Actividad práctica <br />
          Ahora que sabes cómo realizar búsquedas avanzadas y evaluar la
          credibilidad de las fuentes, te invitamos a realizar la siguiente
          actividad:
          <br /> Realiza una búsqueda en Google sobre un tema que te interese
          utilizando los consejos de búsqueda avanzada que aprendiste.
          <br /> Encuentra dos fuentes confiables y explica por qué las
          consideras confiables (autor, fecha, dominio).
          <br /> Escribe un breve resumen de la información que encontraste y
          cita correctamente las fuentes.
        </div>
        <div>
          <h3>Contenido extra</h3>
          <a
            href="https://www.umce.cl/images/recomendaciones-informacion-desde-internet.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver PDF
          </a>
        </div>
        <div>
          <h2>Conclusión</h2>
          <p>
            Buscar información en línea es una habilidad fundamental para tu
            desarrollo académico y profesional. Saber cómo usar Google de manera
            eficiente te ayudará a encontrar información precisa y confiable y a
            utilizarla de manera ética. ¡Pon en práctica lo que has aprendido y
            sigue explorando el vasto mundo de la información en línea!
          </p>
          <a href="/webSecurity">-------next-------</a>
        </div>
      </div>
    </>
  );
};

export default InfoAccess;
