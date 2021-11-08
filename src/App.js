import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/reset-password" exact component={ResetPassword} />
          <Route path="/confirm-password" exact component={ConfirmPassword} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/hire" exact component={Hire} />
          <Route path="/profilePekerja" exact component={ProfilePekerja} />
          <Route
            path="/profilePerusahaan"
            exact
            component={ProfilePerusahaan}
          />
          <Route
            path="/editProfileRecruiter"
            exact
            component={EditProfileRecruiter}
          />
          <Route
            path="/edit-profile-worker"
            exact
            component={EditProfileWorker}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
