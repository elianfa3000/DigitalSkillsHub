import s from "./ClassesPage.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import img1 from "../../public/webImage.jpg";
import img2 from "../../public/collaboration.png";
import img3 from "../../public/study.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
import { updateLevel } from "../../api/auth.js";
const ClassesPage = () => {
  const navigation = useNavigate();
  const { level } = useAuth();
  const level2 = async () => {
    await updateLevel({ level: 3 });
  };
  return (
    <>
      <Navbar />
      <div className={s.all}>
        <div className={s.a1} onClick={() => navigation("/navigation")}>
          <img src={img1} alt="" className={s.img} />
          <h2 className={s.title}>NIVEL 1</h2>
        </div>

        <div className={s.a2} onClick={() => navigation("/useInformation")}>
          {!(level >= 2) && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 10,
                pointerEvents: "auto",
                cursor: "not-allowed",
              }}
            ></div>
          )}
          <img src={img2} alt="" className={s.img} />
          <h2 className={s.title}>NIVEL 2</h2>
        </div>

        <div className={s.a3}>
          {!(level >= 3) && (
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                zIndex: 10,
                pointerEvents: "auto",
                cursor: "not-allowed",
              }}
            ></div>
          )}
          <img src={img3} alt="" className={s.img} />
          <h2 className={s.title}>NIVEL 3</h2>
        </div>
      </div>
      <div>
        <button onClick={level2}>
          <h3>level 2</h3>
        </button>
      </div>
    </>
  );
};

export default ClassesPage;
