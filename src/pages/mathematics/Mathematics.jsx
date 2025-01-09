import Navbar from "../../components/navbar/Navbar";
import s from "./Mathematics.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const Mathematics = (data) => {
  const navigate = useNavigate();
  const { level } = useAuth();
  const [currentIndex, setCurrentIndex] = useState(0);

  const videoData = [
    {
      id: "hYubeqKLDrg",
      paragraph: [
        "Introducción a GeoGebra y sus versiones.",
        "Acceso e inicio de sesión en GeoGebra.",
        "Descripción de las pestañas principales (inicio, novedades, recursos, etc.).",
        "Resumen de las herramientas de la Suite GeoGebra (calculadoras gráfica, 3D, etc.).",
      ],
    },
    {
      id: "fqvM7mNY71M",
      paragraph: [
        "Cómo ingresar texto, imágenes y expresiones en la sección de álgebra.",
        "Manejo de imágenes con puntos A y B para mover, agrandar o rotar.",
      ],
    },
    {
      id: "0VUMwSNwhrw",
      paragraph: [
        "Cómo graficar funciones lineales usando la barra de entrada.",
        "Graficar inecuaciones mostrando el área de solución.",
        "Graficar funciones cuadráticas y encontrar raíces, vértices e intersecciones.",
        "Cómo personalizar la visualización de coordenadas.",
        "Graficar funciones cúbicas.",
      ],
    },
    {
      id: "3GlAK0lwb1w",
      paragraph: [
        "Creación de un deslizador para representar un número o ángulo variable.",
        "Mover el deslizador manualmente o reproducirlo automáticamente.",
      ],
    },
    {
      id: "wKqLj9empj0",
      paragraph: [
        "Resolución de problemas de optimización en GeoGebra.",
        "Maximizar el beneficio en la producción de muebles.",
        "Creación de un modelo matemático con variables y restricciones.",
        "Visualización de restricciones y región factible en GeoGebra.",
        "Uso de un deslizador para encontrar el máximo beneficio.",
        "Ajuste de restricciones para resolver variaciones del problema.",
      ],
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? videoData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === videoData.length - 1 ? 0 : prev + 1));
  };

  const next = () => {
    if (level == 6) {
      navigate("/testMate");
    } else {
      navigate("/classes");
    }
  };

  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.header}>
          <h1>Matemáticas</h1>
          <p>
            En esta sección aprenderás a utilizar herramientas digitales que te
            ayudarán a resolver problemas matemáticos, graficar funciones y
            analizar datos. Comenzaremos con <strong>GeoGebra</strong>,{" "}
            <strong>Exel</strong>, <strong>Photomath</strong> y{" "}
            <strong style={{ color: " red" }}>Google Sheets</strong>,
            plataformas clave para visualizar y practicar conceptos matemáticos
            de forma interactiva.
          </p>
        </div>

        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Excel</h2>
        </div>

        <p className={s.descriptionText}>
          Excel es una herramienta muy útil para resolver ejercicios matemáticos
          relacionados con estadística, porcentajes, operaciones y
          representación de datos. Aprender a usar Excel te ayuda a automatizar
          cálculos y visualizar resultados con gráficos.
        </p>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/BDTdmPV6fLg?si=IbepJb_C40O7O2iK"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <h4 className={s.sectionSubTitle}>
          <strong>¿Qué puedes aprender con Excel?</strong>
        </h4>
        <ul className={s.tipsList}>
          <li>Crear tablas de datos numéricos</li>
          <li>Usar fórmulas básicas como: SUMA, PROMEDIO, MIN, MAX, etc.</li>
          <li>Organizar datos de ejercicios matemáticos.</li>
          <li>
            Representar información con gráficos de columnas, líneas o pastel.
          </li>
          <li>
            Aplicar conocimientos matemáticos a situaciones reales (como
            presupuestos, notas o encuestas).
          </li>
        </ul>

        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/zISoJ8nhMjE?si=c0uYB0UEELD6brPD"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>

        <p className={s.descriptionText}>
          En el video se mustra claramente los siguientes puntos:
        </p>
        <ul className={s.tipsList}>
          <li>Cómo crear una tabla con datos numéricos.</li>
          <li>Cómo aplicar una fórmula básica (suma).</li>
          <li>Cómo insertar un gráfico circular para visualizar los datos.</li>
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
          <h2 className={s.sectionTitle}>GeoGebra</h2>
        </div>
        <p className={s.descriptionText}>
          GeoGebra es una herramienta digital gratuita que permite visualizar
          conceptos matemáticos como álgebra, geometría, trigonometría y
          cálculo. Es muy útil porque permite ver cómo cambian las gráficas o
          figuras al modificar parámetros, ayudando a comprender mejor los temas
          de clase.
        </p>
        <div className={s.videoContainer}>
          <iframe
            className={s.videoEmbed}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/SOBUq1YSP4Q?si=oiSRF3wv-clsvaXV"
            title="Que es Geogebra"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className={s.gray}>
          <p className={s.sectionSubTitle}>
            <strong>¿Qué se puede hacer en GeoGebra?</strong>
          </p>

          <ul className={s.tipsList}>
            <li>
              Representar funciones lineales, cuadráticas y otras ecuaciones.
            </li>
            <li>
              Explorar conceptos geométricos como puntos, segmentos, polígonos o
              circunferencias.
            </li>
            <li>
              Visualizar transformaciones como traslaciones, simetrías o
              rotaciones.
            </li>
            <li>
              Comprobar si los resultados de tus ejercicios son correctos
              mediante representaciones gráficas.
            </li>
          </ul>

          <div className={s.videoContainer}>
            <iframe
              width="560"
              className={s.videoEmbed}
              height="315"
              src="https://www.youtube.com/embed/dak27u84W94?si=21H9QI8HNdsSeEbF"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className={s.videoCarousel}>
            <div className={s.carouselContainer}>
              <div
                onClick={goToPrevious}
                className={s.arrowButton}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && goToPrevious()}
              >
                &lt;
              </div>

              <div className={s.videoSlide}>
                <div className={s.videoWrapper}>
                  <iframe
                    width="100%"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoData[currentIndex].id}`}
                    title={`Video ${currentIndex + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className={s.carouselDots}>
                  {videoData.map((_, index) => (
                    <div
                      key={index}
                      className={`${s.dot} ${
                        index === currentIndex ? s.active : ""
                      }`}
                      onClick={() => setCurrentIndex(index)}
                      role="button"
                      onKeyDown={(e) =>
                        e.key === "Enter" && setCurrentIndex(index)
                      }
                    />
                  ))}
                </div>
              </div>

              <div
                onClick={goToNext}
                className={`${s.arrowButton}`}
                role="button"
                onKeyDown={(e) => e.key === "Enter" && goToNext()}
              >
                &gt;
              </div>
            </div>
            <div className={s.videoCaption}>
              {videoData[currentIndex].paragraph.map((text, index) => (
                <p className={s.tipsList} key={index}>
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className={s.titelP}>
          <h2 className={s.sectionTitle}>Photomath</h2>
        </div>
        <p className={s.descriptionText}>
          Photomath es una aplicación gratuita que permite resolver problemas
          matemáticos usando la cámara de tu celular. Escaneando un ejercicio,
          Photomath no solo da el resultado, sino que también muestra los pasos
          para llegar a la solución.
        </p>
        <p className={s.descriptionText}>
          Es una herramienta muy útil para estudiar, practicar y entender
          procedimientos matemáticos, ya que explica paso a paso cómo resolver
          ecuaciones, fracciones, derivadas, integrales, y más.
        </p>
        <p className={s.sectionSubTitle}>
          <strong className={s.sectionSubTitle}>
            ¿Por qué es útil Photomath?
          </strong>
        </p>
        <ul className={s.tipsList}>
          <li>Permite verificar si resolviste correctamente un problema.</li>
          <li>Te enseña diferentes métodos de resolución.</li>
          <li>Ayuda a identificar errores comunes en los cálculos.</li>
          <li>Sirve como apoyo al momento de estudiar para exámenes.</li>
        </ul>
        <div className={s.alert}>
          <p className={s.sectionSubTitle}>
            <strong>⚠️Importante:</strong>
          </p>
          <p className={s.descriptionText}>
            Photomath debe usarse como herramienta de apoyo para aprender, no
            como un medio para copiar respuestas sin intentar resolver los
            ejercicios.
          </p>
        </div>
        <div className={s.gray}>
          <h3 className={s.sectionTitle}>🔧 ¿Cómo usar Photomath?</h3>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/rxYn-TEwzag?si=KvxnW13-pFdtnrj-"
              title="Cómo usar Photomath"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <p className={s.descriptionText}>
            <strong>Paso a paso:</strong>
          </p>
          <ol className={s.tipsList}>
            <li>Descarga Photomath desde Google Play o App Store.</li>
            <li>Abre la app y da permiso para usar la cámara.</li>
            <li>
              Enfoca la cámara sobre el problema matemático (puede ser escrito a
              mano o impreso).
            </li>
            <li>Asegúrate de que el encuadre sea claro.</li>
            <li>
              La app detectará automáticamente la operación y mostrará el
              resultado.
            </li>
            <li>
              Da clic en {'"Mostrar pasos"'} para ver la explicación completa
              del procedimiento.
            </li>
          </ol>
        </div>
        <div className={s.videoContainer}>
          <iframe
            src="  https://kahoot.it/challenge/?quiz-id=d2a22401-405a-41c0-b657-956a5f6bdf4c&single-player=true"
            width="640"
            height="800"
          >
            Cargando...
          </iframe>
        </div>
        <div className={s.gray}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.descriptionText}>
            Al trabajar con GeoGebra, Excel, Google Sheets y Photomath,
            descubriste cómo las herramientas digitales pueden ayudarte a
            visualizar, resolver y comprender conceptos matemáticos de manera
            dinámica. Esta experiencia mejora tu razonamiento lógico y tu
            capacidad para aplicar la matemática en situaciones reales.
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

export default Mathematics;
