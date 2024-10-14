import "./SingUp.css";
import Navbar from "../../components/navbar/Navbar";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext";
import Svg1 from "../../../public/Svg1";

const SingUp = () => {
  const { user } = useAuth();
  console.log(user);
  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit((value) => {
    console.log(value);
  });

  return (
    <>
      <Navbar />

      <div className="containerForm">
        <form onSubmit={onSubmit}>
          <h3 className="titel">Sing up</h3>

          <label htmlFor="name">NOMBRE</label>
          <div className="input-container">
            <input
              id="name"
              placeholder="Ingrese su nombre"
              type="text"
              {...register("names", { required: true })}
            />
            <div className="Svg1">
              <Svg1
                id="1"
                text={
                  "ingresa el nombre que utilizarás como tu identificador / usuario"
                }
              />
            </div>
          </div>

          <label htmlFor="email">CORREO</label>
          <div className="input-container">
            <input
              id="email"
              placeholder="Ingrese un correo"
              type="email"
              {...register("email", { required: true })}
            />
            <div className="Svg1">
              <Svg1
                id="2"
                text="ingresa el correo que utilizarás como tu identificador"
              />
            </div>
          </div>

          <label htmlFor="password">CONTRASEÑA</label>
          <div className="input-container">
            <input
              id="password"
              placeholder="Ingrese contraseña"
              type="password"
              {...register("password", { required: true })}
            />
            <div className="Svg1">
              <Svg1
                id="3"
                text="ingresa la contraseña que utilizarás para ingresar a su cuenta"
              />
            </div>
          </div>
          <button type="submit">boton</button>
        </form>
      </div>
    </>
  );
};

export default SingUp;
