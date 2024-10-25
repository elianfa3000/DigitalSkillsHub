import s from "./SignIn.module.css";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Svg1 from "../../../public/Svg1.tsx";
import { useAuth } from "../../context/AuthContext.jsx";

const SignIn = () => {
  const navigate = useNavigate();
  //
  const { signin, isAuthenticated, authErrors } = useAuth();
  //
  const { register, handleSubmit } = useForm();
  //
  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    await signin(values);
  });
  //
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
      console.log("ggggggg");
    }
  }, [isAuthenticated]);
  return (
    <>
      <Navbar />

      <div className={s.containerForm}>
        <form className={s.form} onSubmit={onSubmit}>
          <h3 className={s.titel}>Sing in</h3>

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
                text="ingresa el correo que utilizaste previamente como tu identificador"
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
                text="ingresa la contraseña que utilizaste previamente para ingresar a su cuenta"
              />
            </div>
          </div>
          <div className={s.errors}>
            {authErrors.map((error, i) => (
              <p key={i}>{error}</p>
            ))}
          </div>
          <button className={s.button} type="submit">
            boton
          </button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
