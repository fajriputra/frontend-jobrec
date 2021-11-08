import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Register";
import LandingPage from "pages/LandingPage";
import Login from "pages/Login";
import ResetPassword from "pages/ResetPassword";
import ConfirmPassword from "pages/ConfirmPassword";
import Home from "pages/Home";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
