import s from "./ClassesPage.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import img1 from "../../public/webImage.jpg";
import img2 from "../../public/collaboration.png";
import img3 from "../../public/study.png";
import img4 from "../../public/mate.jpg";
import img5 from "../../public/sciences.jpg";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.jsx";
const ClassesPage = (data) => {
  const navigation = useNavigate();
  const { level /* update*/ } = useAuth();
  {
    /*  const up = () => {
    update({ level: 8 });
  };*/
  }
  return (
    <>
      <Navbar outside={data} />

      <div className={s.all}>
        <div
          className={`${s.menuItem} ${s.item1}`}
          onClick={() => navigation("/introOne")}
        >
          <img src={img1} alt="" className={s.img} />
          <h2 className={s.title}>Conceptos introductorios</h2>
        </div>

        <div
          className={s.menuItem}
          onClick={() => navigation("/introLanguage")}
        >
          {!(level >= 4) && (
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
          <h2 className={s.title}>Lengua y Literatura</h2>
        </div>

        <div
          className={s.menuItem}
          onClick={() => navigation("/introSciences")}
        >
          {!(level >= 5) && (
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
          <img src={img5} alt="" className={s.img} />
          <h2 className={s.title}>Ciencias Naturales</h2>
        </div>
        <div className={s.menuItem} onClick={() => navigation("/introMat")}>
          {!(level >= 6) && (
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
          <img src={img4} alt="" className={s.img} />
          <h2 className={s.title}>Matemáticas</h2>
        </div>
        <div className={s.menuItem} onClick={() => navigation("/introSocial")}>
          {!(level >= 7) && (
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
          <h2 className={s.title}>Estudios Sociales</h2>
        </div>
      </div>
      {/*   <button>
        <p onClick={up}>..</p>
      </button>*/}
    </>
  );
};

export default ClassesPage;
