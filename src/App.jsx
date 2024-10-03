import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import SignIn from "./components/Auth/SignIn.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import ForgetPassword from "./components/Auth/ForgetPassword.jsx";
import Home from "./components/Home/Home.jsx";
function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/ForgetPassword" element={<ForgetPassword />} />
          <Route path="/home" element={<Home />} />
      </Routes>
  );
}

export default App
