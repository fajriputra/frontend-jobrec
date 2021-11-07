import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "pages/Register";
import LandingPage from "pages/LandingPage";
import Hire from "pages/Hire";
import ProfilePekerja from "pages/main/ProfilPekerja";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/hire" exact element={<Hire />} />
          <Route path="/profilePekerja" exact element={<ProfilePekerja />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
