import './App.css'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import SignIn from "./components/Auth/SignIn.jsx";
import SignUp from "./components/Auth/SignUp.jsx";
import ForgetPassword from "./components/Auth/ForgetPassword.jsx";
import Home from "./components/Home/Home.jsx";
import MovieDetails from "./components/Details/MovieDetails.jsx";
import Reservation from "./components/Reservations/Reservation.jsx";
import MyReservation from "./components/Reservations/MyReservation.jsx";
import NewPassword from "./components/Auth/NewPassword.jsx";
function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/UseForgetPassword" element={<ForgetPassword />} />
          <Route path="/NewPassword/:token" element={<NewPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/myReservation" element={<MyReservation />} />
      </Routes>
  );
}

export default App
