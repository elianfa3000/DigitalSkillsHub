import "./App.css";
import { Context } from "./context/AuthContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Navigation from "./pages/navigation/Navigation.jsx";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
