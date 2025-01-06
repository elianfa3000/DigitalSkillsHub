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
import Test1 from "./pages/test1/Test1.tsx";
import Test2 from "./pages/test2/Test2.tsx";
import Test3 from "./pages/test3/Test3.tsx";
import Teams from "./pages/teams/Teams.jsx";
import Congratulations from "./pages/congratulations/Congratulations.jsx";
import StudyTechniques from "./pages/studyTechniques/StudyTechniques.jsx";
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
      <BrowserRouter basename="/DigitalSkillsHub">
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Homepage outside={true} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Dashboard outside={true} />} />
            <Route path="/classes" element={<ClassesPage outside={true} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/navigation" element={<Navigation />} />
            <Route path="/InfoAccess" element={<InfoAccess />} />
            <Route path="/webSecurity" element={<WebSecurity />} />
            <Route path="/test1" element={<Test1 />} />
            <Route element={<ProtectedOne />}>
              <Route path="/useInformation" element={<UseInformation />} />
              <Route path="/studytechniques" element={<StudyTechniques />} />
              <Route path="/criticalThinking" element={<CriticalThinking />} />
              <Route path="/test2" element={<Test2 />} />
            </Route>

            <Route element={<ProtectedTwo />}>
              <Route
                path="/productivityTools"
                element={<ProductivityTools />}
              />
              <Route path="/teams" element={<Teams />} />
              <Route path="/test3" element={<Test3 />} />
              <Route path="/congratulations" element={<Congratulations />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
