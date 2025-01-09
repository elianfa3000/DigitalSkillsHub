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
import Mathematics from "./pages/mathematics/Mathematics.jsx";
import Language from "./pages/language/Language.jsx";
import Sciences from "./pages/sciences/Sciences.jsx";
import SocialStudies from "./pages/socialStudies/SocialStudies.jsx";
import IntroMathematics from "./pages/mathematics/IntroMathematics.jsx";
import IntroSciences from "./pages/sciences/IntroSciences.jsx";
import IntroLanguage from "./pages/language/IntroLanguage.jsx";
import IntroSocialStudies from "./pages/socialStudies/IntroSocialStudies.jsx";
import IntroInfo from "./pages/intro/IntroInfo.jsx";
import TestMate from "./pages/testMate/TestMate.tsx";
import TestSciences from "./pages/testSciences/TestSciences.tsx";
import TestLanguage from "./pages/testLanguage/TestLanguage.tsx";
import TestStudies from "./pages/testStudies/TestStudies.tsx";
import IntroClasses from "./pages/classesPage/IntroClasses.jsx";
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
      <BrowserRouter /*basename="/DigitalSkillsHub"*/>
        <ScrollToTop />
        <Routes>
          <Route path="" element={<Homepage outside={true} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/introOne" element={<IntroInfo />} />
          <Route path="/introMat" element={<IntroMathematics />} />
          <Route path="/introSciences" element={<IntroSciences />} />
          <Route path="/introLanguage" element={<IntroLanguage />} />
          <Route path="/introSocial" element={<IntroSocialStudies />} />
          <Route path="/testMate" element={<TestMate />} />
          <Route path="/testSciences" element={<TestSciences />} />
          <Route path="/testLanguage" element={<TestLanguage />} />
          <Route path="/testStudies" element={<TestStudies />} />
          <Route path="/introClasses" element={<IntroClasses />} />

          <Route path="/mat" element={<Mathematics />} />
          <Route path="/language" element={<Language />} />
          <Route path="/sciences" element={<Sciences />} />
          <Route path="/socialS" element={<SocialStudies />} />
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
