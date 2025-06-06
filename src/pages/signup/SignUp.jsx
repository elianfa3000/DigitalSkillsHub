import s from "./SignUp.module.css";
import Navbar from "../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import Svg1 from "../../public/Svg1";
import { useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";

const SingUp = (data) => {
  const navigate = useNavigate();
  //
  const { signup, errors, isAuthenticated } = useAuth();
  //
  const { register, handleSubmit } = useForm();
  //
  const onSubmit = handleSubmit(async (value) => {
    try {
      await signup(value);
      alert("✅ Registro exitoso");
    } catch (error) {
      //console.error("Error al registrar:", error);

      alert("❌ No se pudo completar el registro.");
    }
  });
  //

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);

  return (
    <>
      <Navbar outside={data} />

      <div className={s.containerForm}>
        <form className={s.form} onSubmit={onSubmit}>
          <h3 className={s.titel}>Sing up</h3>

          <label className={s.label} htmlFor="name">
            NOMBRE
          </label>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              id="name"
              placeholder="Ingrese su nombre"
              type="text"
              {...register("username", { required: true })}
            />
            <div className={s.Svg1}>
              <Svg1
                id="1"
                text={
                  "ingresa el nombre que utilizarás como tu identificador / usuario"
                }
              />
            </div>
          </div>

          <label className={s.label} htmlFor="email">
            CORREO
          </label>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              id="email"
              placeholder="Ingrese un correo"
              type="email"
              {...register("email", { required: true })}
            />
            <div className={s.Svg1}>
              <Svg1
                id="2"
                text="ingresa el correo que utilizarás como tu identificador"
              />
            </div>
          </div>

          <label className={s.label} htmlFor="password">
            CONTRASEÑA
          </label>
          <div className={s.inputContainer}>
            <input
              className={s.input}
              id="password"
              placeholder="Ingrese contraseña"
              type="password"
              {...register("password", { required: true })}
            />
            <div className={s.Svg1}>
              <Svg1
                id="3"
                text="ingresa la contraseña que utilizarás para ingresar a su cuenta"
              />
            </div>
          </div>
          <div className={s.errors}>
            {errors.map((error, i) => (
              <p key={i}>{error}</p>
            ))}
          </div>
          <button className={s.button} type="submit">
            REGISTRARSE
          </button>
          <NavLink
            style={{
              textDecoration: "none",
              textAlign: "center",
              marginTop: "20px",
            }}
            to="/signin"
          >
            Ingresa a tu cuenta
          </NavLink>
        </form>
      </div>
    </>
  );
};

export default SingUp;
