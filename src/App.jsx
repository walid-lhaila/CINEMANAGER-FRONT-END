import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="Navbar" element={<NavBar/>} />
      </Routes>
  );
}

export default App
