import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import SignIn from "./components/SignIn.jsx";
import SignUp from "./components/SignUp.jsx";
function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
      </Routes>
  );
}

export default App
