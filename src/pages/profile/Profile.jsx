import s from "./Profile.module.css";
import { useAuth } from "../../context/AuthContext.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
const Profile = () => {
  const { user, level } = useAuth();

  return (
    <>
      <Navbar />

      <div className={s.profileContainer}>
        <div className={s.profileInfo}>
          <div className={s.userDetails}>
            <div className={s.detailRow}>
              <div className={s.labelContainer}>
                <span className={s.labelSpan}>Nombre de usuario:</span>
              </div>
              <span>{user.username}</span>
            </div>

            <div className={s.detailRow}>
              <div className={s.labelContainer}>
                <span className={s.labelSpan}>Correo:</span>
              </div>
              <span>{user.email}</span>
            </div>

            <div className={s.levelSubtitle}>
              Tu nivel no es solo un número, <br />
              es un poema escrito con esfuerzo, <br />
              una melodía de persistencia y esperanza
            </div>
            <h4 className={s.level}>NIVEL ACTUAL</h4>
            <div className={s.userLevel}>
              <div className={s.levelBox}>{level}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
