import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import flecha from "../../public/flecha.png";
import { useAuth } from "../../context/AuthContext.jsx";
import s from "./WebSecurity.module.css";
const WebSecurity = (data) => {
  const navigate = useNavigate();
  const { level } = useAuth();
  const test1 = () => {
    console.log(level);

    if (level === 1) {
      navigate("/test1");
    }
    if (level === 2 || level === 3) {
      navigate("/useInformation");
    }
  };
  return (
    //1.3    Uso básico de dispositivos - Seguridad en línea

    <>
      <Navbar outside={data} />
      <div className={s.container}>
        <div>
          <h2 className={s.sectionTitle}>Introducción</h2>
          <p className={s.introText}>
            La seguridad en línea es fundamental para proteger tu información
            personal mientras navegas por Internet. En esta sección, aprenderás
            a crear contraseñas seguras, reconocer enlaces y correos
            sospechosos, proteger tu privacidad de forma general y asegurarte de
            que los sitios web que visitas son seguros.
          </p>

          <h2 className={s.sectionTitle}>Contraseñas Seguras</h2>
          <p className={s.tipText}>
            Tener una contraseña fuerte es el primer paso para proteger tu
            información. Una buena contraseña debe ser difícil de adivinar y
            única para cada cuenta.
          </p>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>
            ¿Qué hace que una contraseña sea segura?
          </h2>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Longitud:</strong> Lo ideal es que una contraseña tenga al
              menos 12 caracteres.
            </li>
            <li className={s.tipText}>
              <strong>Combinación de caracteres:</strong> Utiliza una
              combinación de letras (mayúsculas y minúsculas), números y
              símbolos.
            </li>
            <li className={s.tipText}>
              <strong>Evita palabras comunes:</strong> No uses palabras como
              "contraseña" o "123456". Son fáciles de adivinar.
            </li>
            <li className={s.tipText}>
              <strong>Evita información personal:</strong> No incluyas tu
              nombre, fecha de nacimiento o cualquier dato fácil de adivinar.
            </li>
          </ul>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/boQKl5BkPfs?si=lak71jO8h6_8GHBu?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className={s.sectionTitle}>Uso de Autenticación en Dos Pasos</h2>
          <p className={s.tipText}>
            La autenticación en dos pasos (2FA) es una capa extra de seguridad
            que puedes activar en la mayoría de las cuentas. Este sistema
            requiere que, además de la contraseña, ingreses un código que se
            envía a tu teléfono o correo electrónico. Así, aunque alguien
            adivine tu contraseña, no podrá acceder sin el código.
          </p>

          <h2 className={s.sectionTitle}>Protección Contra Malware</h2>
          <p className={s.tipText}>
            El malware es un software malicioso diseñado para dañar o robar
            información de tu dispositivo. Aprender a identificar y evitar
            malware es crucial para mantenerte seguro en línea.
          </p>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>
            Cómo Reconocer Enlaces y Correos Electrónicos Sospechosos (Phishing)
          </h2>
          <p className={s.tipText}>
            El phishing es una técnica utilizada para robar información
            personal, como contraseñas o datos bancarios. Los estafadores envían
            correos o mensajes que parecen legítimos, pero intentan engañarte
            para que ingreses tus datos en sitios falsos.
          </p>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Desconfía de mensajes urgentes:</strong> Correos que piden
              "actuar ahora" o que te advierten de una "emergencia" suelen ser
              intentos de phishing.
            </li>
            <li className={s.tipText}>
              <strong>Revisa la dirección del remitente:</strong> Los correos
              fraudulentos a menudo tienen direcciones de correo extrañas o con
              pequeños cambios, como soporte@paypa1.com en lugar de paypal.com.
            </li>
            <li className={s.tipText}>
              <strong>No hagas clic en enlaces sin verificar:</strong> Si un
              correo parece sospechoso, no hagas clic en ningún enlace ni
              descargues archivos adjuntos.
            </li>
          </ul>
          <div className={s.videoContainer}>
            <iframe
              className={s.videoEmbed}
              width="560"
              height="315"
              src="https://www.youtube.com/embed/M2HaMR3H0Cg?si=Jeqc9jLPVqfHnxjP?rel=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div>
          <h2 className={s.sectionTitle}>Privacidad en Internet</h2>
          <p className={s.tipText}>
            Mantener tu privacidad en Internet no solo depende de protegerte en
            redes sociales, sino también de adoptar prácticas seguras de
            navegación en general. Aquí te damos algunos consejos clave para
            proteger tu privacidad:
          </p>

          <h2 className={s.sectionTitle}>
            Consejos para Proteger tu Privacidad
          </h2>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>No compartas información personal innecesaria:</strong>{" "}
              Evita divulgar tu dirección, número de teléfono o datos familiares
              en sitios web o aplicaciones.
            </li>
            <li className={s.tipText}>
              <strong>Controla los permisos de las aplicaciones:</strong> Antes
              de instalar una aplicación, revisa qué permisos solicita y
              asegúrate de que no acceda a información innecesaria.
            </li>
            <li className={s.tipText}>
              <strong>Usa la navegación en modo privado o incógnito:</strong>{" "}
              Esta opción no guarda tu historial ni cookies. Úsala cuando
              necesites navegar sin dejar rastro en el dispositivo.
            </li>
            <li className={s.tipText}>
              <strong>
                Desactiva la geolocalización en apps y dispositivos:
              </strong>
              Solo permite el acceso a tu ubicación cuando sea estrictamente
              necesario.
            </li>
          </ul>
        </div>
        <div>
          <h2 className={s.sectionTitle}>Reconocimiento de Sitios Seguros</h2>
          <p className={s.tipText}>
            No todos los sitios web son seguros para navegar, especialmente
            cuando se trata de ingresar información personal. Aquí tienes
            algunos consejos para reconocer sitios seguros:
          </p>

          <h2>Consejos para Reconocer Sitios Seguros</h2>
          <ul style={{ marginLeft: "20px" }}>
            <li className={s.tipText}>
              <strong>Busca el icono del candado:</strong> En la barra de
              direcciones, el ícono de candado indica que el sitio web usa una
              conexión segura (HTTPS). Esto significa que tu información está
              encriptada.
            </li>
            <li className={s.tipText}>
              <strong>Verifica la URL del sitio:</strong> Asegúrate de que la
              dirección sea correcta y no tenga errores (como{" "}
              <strong style={{ color: "red" }}>faceboook.com</strong> en lugar
              de
              <strong style={{ color: "red" }}> facebook.com</strong>).
            </li>
            <li className={s.tipText}>
              <strong>
                Evita sitios web con demasiadas ventanas emergentes (pop-ups):
              </strong>
              Estos sitios suelen ser menos seguros y, a veces, contienen
              malware.
            </li>
          </ul>
        </div>
        <h2 className={s.sectionTitle}>Practica lo aprendido</h2>
        <div className={s.videoContainer}>
          <iframe
            src="https://kahoot.it/challenge/?quiz-id=a36ef1da-c2e7-4f6a-9d4d-085cceed50f5&single-player=true"
            width="640"
            height="800"
          >
            Cargando...
          </iframe>
        </div>
        <div className={s.safetyTips}>
          <h3 className={s.subTitle}>contenido extra:</h3>
          <a
            className={s.more}
            target="_blank"
            rel="noopener noreferrer"
            href="https://blog.hubspot.es/website/como-saber-sitio-web-seguro"
          >
            Web segura: 9 claves
          </a>
        </div>
        <div className={s.safetyTips}>
          <h2 className={s.sectionTitle}>Conclusión</h2>
          <p className={s.tipText}>
            Ahora que has aprendido cómo proteger tu información en Internet,
            estás listo para navegar de manera segura. Recuerda crear
            contraseñas fuertes, mantener tus dispositivos protegidos contra
            malware y tomar precauciones para proteger tu privacidad. ¡Cuida tu
            seguridad mientras exploras todo lo que Internet tiene para ofrecer!
          </p>

          <div className={s.buttonGroup}>
            <button
              className={s.button}
              onClick={() => {
                navigate("/InfoAccess");
              }}
            >
              <img className={s.left} src={flecha} alt="<--" />
            </button>
            <button className={s.button} src={flecha} onClick={test1}>
              <img className={s.right} src={flecha} alt="-->" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebSecurity;
