import "./App.css";
import { Context } from "./context/AuthContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Navigation from "./pages/navigation/Navigation.jsx";
import InfoAccess from "./pages/InfoAccess/InfoAccess.jsx";
import WebSecurity from "./pages/webSecurity/WebSecurity.jsx";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/navigation" element={<Navigation />} />
          <Route path="/InfoAccess" element={<InfoAccess />} />
          <Route path="/webSecurity" element={<WebSecurity />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
