import './App.css'
import {Routes, Route, Navigate} from "react-router-dom";
import LandingPage from "./components/LandingPage.jsx";
import SignIn from "./Pages/Auth/SignIn.jsx";
import SignUp from "./Pages/Auth/SignUp.jsx";
import ForgetPassword from "./Pages/Auth/ForgetPassword.jsx";
import Home from "./Pages/Home/Home.jsx";
import Dashboard from "./Pages/Admin/Dashboard.jsx"
import MovieDetails from "./Pages/Details/MovieDetails.jsx";
import Reservation from "./Pages/Reservations/Reservation.jsx";
import MyReservation from "./Pages/Reservations/MyReservation.jsx";
import NewPassword from "./Pages/Auth/NewPassword.jsx";
import Categories from "./Pages/Admin/Categories.jsx";
function App() {

  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/signIn" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/UseForgetPassword" element={<ForgetPassword />} />
          <Route path="/NewPassword/:token" element={<NewPassword />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/myReservation" element={<MyReservation />} />

          <Route path="/admin/Dashboard" element={<Dashboard />} />
          <Route path="/admin/addCategory" element={<Categories />} />
      </Routes>
  );
}

export default App
