import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Register";
import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import ConfirmPassword from "pages/ConfirmPassword";
import Home from "pages/Home";
import Hire from "pages/Hire";
import ProfilePekerja from "pages/main/ProfilPekerja";
import ProfilePerusahaan from "pages/main/ProfilPerusahaan";
import EditProfileRecruiter from "pages/EditProfile/Recruiter";
import EditProfileWorker from "pages/EditProfile/Worker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/reset-password" exact element={<ResetPassword />} />
          <Route path="/confirm-password" exact element={<ConfirmPassword />} />
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/home" exact element={<Home />} />
          <Route path="/hire" exact element={<Hire />} />
          <Route path="/profilePekerja" exact element={<ProfilePekerja />} />
          <Route
            path="/profilePerusahaan"
            exact
            element={<ProfilePerusahaan />}
          />
          <Route
            path="/editProfileRecruiter"
            exact
            element={<EditProfileRecruiter />}
          />
          <Route
            path="/edit-profile-worker"
            exact
            element={<EditProfileWorker />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
