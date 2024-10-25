//import s from "./Navigation.module.css";
import google from "/public/google.png";
import firefox from "/public/firefox.jpg";
import Navbar from "../../components/navbar/Navbar";
const Navigation = () => {
  const additionalTips = [
    "Usa contraseñas diferentes para cada sitio web y que sean difíciles de adivinar",
    "Activa la verificación en dos pasos cuando esté disponible",
    "Ten cuidado con las redes WiFi públicas, evita hacer compras o acceder a tu banco cuando uses estas redes",
    "No descargues archivos de sitios que no sean confiables",
    "Si un sitio te pide instalar algo para ver un video o recibir un premio, mejor ciérralo",
    "Revisa los permisos que das a las aplicaciones y sitios web, especialmente el acceso a tu cámara o micrófono",
  ];

  return (
    <>
      <Navbar />
      <h2 style={{ paddingTop: "70px" }}>Introducción</h2>
      <p>
        Los navegadores web son herramientas esenciales para acceder a la
        información en línea. Un navegador te permite buscar, ver, y organizar
        la información en Internet.
      </p>
      <img src={google} alt="Google Chrome" />
      <img src={firefox} alt="Google Chrome" />
      <h2>¿Qué es un navegador web?</h2>
      <p>
        Un navegador web es el programa que usas para explorar todo lo que hay
        en Internet. Es la herramienta que te permite ver videos en YouTube,
        revisar tus redes sociales y buscar información para tus tareas. Cada
        vez que escribes una dirección web, como www.google.com, el navegador te
        conecta instantáneamente con ese sitio.
        <br />
        Los más populares son Google Chrome, que tiene un ícono circular de
        colores, y Mozilla Firefox, con su famoso zorro naranja. Lo mejor es que
        son muy sencillos de usar: solo necesitas hacer clic en enlaces o
        escribir la dirección que quieres visitar.
        <br />
        Los navegadores te permiten hacer cosas muy útiles como guardar tus
        páginas favoritas, mantener varias páginas abiertas al mismo tiempo y
        descargar archivos de Internet a tu dispositivo. Es básicamente tu
        herramienta principal para acceder a todo el contenido que existe en
        Internet.
      </p>
      <div>
        <h1>Navegación segura: Mantente protegido mientras usas Internet</h1>

        <p>
          Navegar de forma segura en Internet es crucial hoy en día, ya que
          pasamos mucho tiempo conectados y manejamos información personal
          importante como contraseñas, datos bancarios y fotos. Por eso es
          importante saber cómo protegernos.
        </p>

        <h2>No confíes en cualquier sitio web</h2>
        <p>
          Antes de entrar a una página nueva, fíjate si la dirección comienza
          con ``https://`` y tiene un candado en la barra de dirección - esto
          indica que es un sitio seguro. Evita hacer clic en enlaces que te
          lleguen por mensajes o emails si no esperabas recibirlos, aunque
          parezcan ser de tu banco o una tienda conocida.
        </p>

        <h2>Protege tus datos personales</h2>
        <p>
          No compartas información personal en sitios que no conozcas. Cuando
          una página te pide datos como tu nombre, dirección o número de
          tarjeta, asegúrate de que sea un sitio oficial. Las ventanas
          emergentes que prometen premios o te dicen que ``ganaste algo`` suelen
          ser trucos para robar información.
        </p>

        <h2>Mantén todo actualizado</h2>
        <p>
          Tus navegadores y programas deben estar siempre con la última versión
          instalada. Estas actualizaciones no solo traen mejoras, sino que
          arreglan problemas de seguridad que podrían poner en riesgo tu
          información.
        </p>

        <h2>Consejos adicionales importantes:</h2>
        <ul>
          {additionalTips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
        <p>
          contenido extra:
          <a
            style={{ color: "blue" }}
            href="https://latam.kaspersky.com/resource-center/threats/top-scams-how-to-avoid-becoming-a-victim"
          >
            ¿Cuáles son las principales estafas en línea y cómo evitarlas?
          </a>
        </p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/cjSNVxtXY-U"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h2>Conclusión</h2>
        <p>
          Aprender a utilizar un navegador web de manera eficiente es el primer
          paso para aprovechar todo lo que Internet tiene para ofrecer. Ahora
          sabes que es un navegador y como navegar de forma segura.{" "}
          <a style={{ color: "red" }} href="">
            En la siguiente sección, aprenderás cómo realizar búsquedas
            avanzadas en Google para encontrar información precisa y confiable.
          </a>
        </p>
      </div>
    </>
  );
};

export default Navigation;
