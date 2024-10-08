import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.jsx";
import { Context } from "./context/AuthContext.jsx";

function App() {
  return (
    <Context>
      <BrowserRouter>
        <Routes>
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </Context>
  );
}

export default App;
