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
import ProtectedTwo from "./routes/ProtectedTwo.jsx";
import Profile from "./pages/profile/Profile.jsx";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
function App() {
  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  return (
    <Context>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/profile" element={<Profile />} />

            <Route element={<ProtectedOne />}>
              <Route
                path="/navigation"
                element={<Navigation outside={false} />}
              />
              <Route
                path="/InfoAccess"
                element={<InfoAccess outside={false} />}
              />
              <Route
                path="/webSecurity"
                element={<WebSecurity outside={false} />}
              />
            </Route>

            <Route element={<ProtectedTwo />}>
              <Route path="/useInformation" element={<UseInformation />} />
              <Route
                path="/productivityTools"
                element={<ProductivityTools />}
              />
            </Route>
            <Route path="/criticalThinking" element={<CriticalThinking />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
