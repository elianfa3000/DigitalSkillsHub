import s from "./Dashboard.module.css";
import Navbar from "../../components/navbar/Navbar.jsx";
import Book from "../../public/Book.jsx";
import User from "../../public/User.jsx";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const navigate = useNavigate();

  const classs = () => {
    return navigate("/classes");
  };
  const profile = () => {
    return navigate("/profile");
  };
  return (
    <>
      <Navbar />
      <div className={s.all}>
        <div className={s.a1} onClick={classs}>
          <div className={s.svg}>
            <Book />
          </div>
          <h2 className={s.title}>Mis Clases</h2>
          <p className={s.description}>Explora tus clases y aprende</p>
        </div>

        <div className={s.a2} onClick={profile}>
          <div className={s.svg}>
            <User />
          </div>
          <h2 className={s.title}>Mi Perfil</h2>
          <p className={s.description}>Perfil personal</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
