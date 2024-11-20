import "./App.css";
import { Context } from "./context/AuthContext.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/signup/SignUp.jsx";
import SignIn from "./pages/signin/SignIn.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Navigation from "./pages/navigation/Navigation.jsx";
import InfoAccess from "./pages/InfoAccess/InfoAccess.jsx";
import WebSecurity from "./pages/webSecurity/WebSecurity.jsx";
import UseInformation from "./pages/useInformation/UseInformation.jsx";
import ProductivityTools from "./pages/productivityTools/ProductivityTools.jsx";
import CriticalThinking from "./pages/criticalThinking/CriticalThinking.jsx";
import Dashboard from "./pages/dashboard/Dashboard.jsx";
import ClassesPage from "./pages/classesPage/ClassesPage.jsx";
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
import ProtectedOne from "./routes/ProtectedOne.jsx";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classes" element={<ClassesPage />} />

            <Route element={<ProtectedOne />}>
              <Route path="/navigation" element={<Navigation />} />
              <Route path="/InfoAccess" element={<InfoAccess />} />
              <Route path="/webSecurity" element={<WebSecurity />} />
              <Route path="/useInformation" element={<UseInformation />} />
              <Route
                path="/productivityTools"
                element={<ProductivityTools />}
              />
              <Route path="/criticalThinking" element={<CriticalThinking />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
