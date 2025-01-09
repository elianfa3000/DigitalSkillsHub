import { useNavigate } from "react-router-dom";
import s from "./Congratulations.module.css";

function Congratulations() {
  const navigate = useNavigate();

  return (
    <div className={s.container}>
      <div
        className={s.safetyTips}
        style={{ textAlign: "center", padding: "50px" }}
      >
        <h1>🎉 🎓 ¡Felicidades, Has Completado Todo el Curso! 🎓 🎉</h1>
        <p className={s.tipText}>
          ¡Increíble! Has finalizado con éxito todas las evaluaciones y
          completado todos los niveles de aprendizaje. Durante este proceso,
          mejoraste habilidades esenciales en competencias digitales,
          herramientas tecnológicas y aprendizaje en línea.
        </p>
        <p className={s.tipText}>
          ¡Tu esfuerzo, dedicación y constancia son dignos de admirar! Ahora
          cuentas con las herramientas para desenvolverte de forma segura y
          eficiente en entornos digitales. 🚀
        </p>

        <button onClick={() => navigate("/dashboard")} className={s.button}>
          Volver al inicio 🏠
        </button>
      </div>
    </div>
  );
}

export default Congratulations;
