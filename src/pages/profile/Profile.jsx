import { useState } from "react";
import s from "./Profile.module.css";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Profile = (data) => {
  const { register, handleSubmit } = useForm();
  const { user, level, update, errors } = useAuth();
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);

  const editedCorreo = () => {
    setIsEditingEmail(!isEditingEmail);
  };
  const editedPassword = () => {
    setIsEditingPassword(!isEditingPassword);
  };
  const saveCorreo = handleSubmit(async (values) => {
    setIsEditingEmail(!isEditingEmail);
    await update({ email: values.email });

    if (!errors) {
      window.location.reload();
    }
  });

  const savePassword = handleSubmit(async (values) => {
    setIsEditingPassword(!setIsEditingPassword);
    await update({ password: values.password });
  });
  return (
    <>
      <Navbar outside={data} />

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
              {isEditingEmail ? (
                <input type="text" {...register("email")} />
              ) : (
                <span>{user.email}</span>
              )}
              {isEditingEmail ? (
                <button onClick={saveCorreo} className={s.listoButton}>
                  Guardar
                </button>
              ) : (
                <button onClick={editedCorreo} className={s.editarButton}>
                  Editar
                </button>
              )}
            </div>

            <div className={s.detailRow}>
              <div className={s.labelContainer}>
                <span className={s.labelSpan}>Contraseña:</span>
              </div>
              {isEditingPassword ? (
                <input type="text" {...register("password")} />
              ) : (
                <span>{"*************"}</span>
              )}
              {isEditingPassword ? (
                <button onClick={savePassword} className={s.listoButton}>
                  Guardar
                </button>
              ) : (
                <button onClick={editedPassword} className={s.editarButton}>
                  Editar
                </button>
              )}
            </div>

            <div className={s.errors}>
              {errors.map((error, i) => (
                <p key={i}>{error}</p>
              ))}
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
