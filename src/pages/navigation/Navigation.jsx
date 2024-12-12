import s from "./Navigation.module.css";
import google from "../../public/google.png";
import firefox from "../../public/firefox.jpg";
import flecha from "../../public/flecha.png";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Navigation = (data) => {
  const navigate = useNavigate();
  const additionalTips = [
    "Usa contraseñas diferentes para cada sitio web y que sean difíciles de adivinar",
    "Ten cuidado con las redes WiFi públicas, evita hacer compras o acceder a tu banco cuando uses estas redes",
    "No descargues archivos de sitios que no sean confiables",
    "Si un sitio te pide instalar algo para ver un video o recibir un premio, mejor ciérralo",
    "Revisa los permisos que das a las aplicaciones y sitios web, especialmente el acceso a tu cámara o micrófono",
  ];
  //1.1 navegador web
  return (
    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div className={s.introSection}>
          <h2 className={s.sectionTitle}>Introducción</h2>
          <p className={s.introText}>
            Los navegadores web son herramientas esenciales para acceder a la
            información en línea. Un navegador te permite buscar, ver y
            organizar la información en Internet.
          </p>

          <h2 className={s.sectionTitle}>¿Qué es un navegador web?</h2>
          <p className={s.descriptionText}>
            Un navegador web es el programa que usas para explorar todo lo que
            hay en Internet. Es la herramienta que te permite ver videos en
            YouTube, revisar tus redes sociales y buscar información para tus
            tareas. Cada vez que escribes una dirección web, como
            www.google.com, el navegador te conecta instantáneamente con ese
            sitio.
            <br />
            Los navegadores web más populares son Google Chrome, que tiene un
            ícono circular de colores y Mozilla Firefox, con su famoso zorro
            naranja. Lo mejor es que son muy sencillos de usar: solo necesitas
            hacer clic en enlaces o escribir la dirección que quieres visitar.
            <br />
            Los navegadores te permiten hacer cosas muy útiles como guardar tus
            páginas favoritas, mantener varias páginas abiertas al mismo tiempo
            y descargar archivos de Internet a tu dispositivo. Es básicamente tu
            herramienta principal para acceder a todo el contenido que existe en
            Internet.
          </p>
          <div className={s.browserLogos}>
            <img className={s.browserLogo} src={google} alt="Google Chrome" />
            <img className={s.browserLogo} src={firefox} alt="FireFox" />
          </div>
        </div>

        <div className={s.safetySection}>
          <h1 className={s.mainTitle}>
            Navegación segura: Mantente protegido mientras usas Internet
          </h1>

          <p className={s.safetyIntro}>
            Navegar de forma segura en Internet es crucial hoy en día, ya que
            pasamos mucho tiempo conectados y manejamos información personal
            importante como contraseñas, datos bancarios y fotos. Por eso es
            importante saber cómo protegernos.
          </p>

          <div className={s.safetyTips}>
            <h2 className={s.sectionTitle}>
              No confíes en cualquier sitio web
            </h2>
            <p className={s.tipText}>
              Antes de entrar a una página nueva, fíjate si la dirección
              comienza con ``https://`` y tiene un candado en la barra de
              dirección - esto indica que es un sitio seguro. Evita hacer clic
              en enlaces que te lleguen por mensajes o emails si no esperabas
              recibirlos, aunque parezcan ser de tu banco o una tienda conocida.
            </p>

            <h2 className={s.sectionTitle}>Protege tus datos personales</h2>
            <p className={s.tipText}>
              No compartas información personal en sitios que no conozcas.
              Cuando una página te pide datos como tu nombre, dirección o número
              de tarjeta, asegúrate de que sea un sitio oficial. Las ventanas
              emergentes que prometen premios o te dicen que ``ganaste algo``
              suelen ser trucos para robar información.
            </p>

            <h2 className={s.sectionTitle}>Mantén todo actualizado</h2>
            <p className={s.tipText}>
              Tus navegadores y programas deben estar siempre con la última
              versión instalada. Estas actualizaciones no solo traen mejoras,
              sino que arreglan problemas de seguridad que podrían poner en
              riesgo tu información.
            </p>

            <h2 className={s.sectionTitle}>
              Consejos adicionales importantes:
            </h2>
            <ul className={s.tipsList}>
              {additionalTips.map((tip, i) => (
                <li key={i} className={s.tip}>
                  {tip}
                </li>
              ))}
            </ul>

            <div className={s.videoContainer}>
              <iframe
                className={s.videoEmbed}
                width="560"
                height="315"
                src="https://www.youtube.com/embed/cjSNVxtXY-U?rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className={s.extraContent}>
          <h3 className={s.sectionTitle}>Contenido extra:</h3>
          <a
            className={s.extraLink}
            href="https://latam.kaspersky.com/resource-center/threats/top-scams-how-to-avoid-becoming-a-victim"
          >
            ¿Cuáles son las principales estafas en línea y cómo evitarlas?
          </a>
        </div>

        <div className={s.conclusionSection}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.conclusionText}>
            Aprender a utilizar un navegador web de manera eficiente es el
            primer paso para aprovechar todo lo que Internet tiene para ofrecer.
            Ahora sabes que es un navegador y como navegar de forma segura. En
            la siguiente sección, aprenderás cómo realizar búsquedas avanzadas
            en Google para encontrar información precisa y confiable.
          </p>
          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/classes");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button
              className={s.button}
              src={flecha}
              onClick={() => {
                navigate("/InfoAccess");
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

export default Navigation;
