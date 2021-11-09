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

import { ToastContainer } from "react-toastify";
import CompanyRoute from "components/Routes/CompanyRoute";
import PrivateRoute from "components/Routes/PrivateRoute";
import WorkerRoute from "components/Routes/WorkerRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <PrivateRoute
            path="/reset-password"
            exact
            component={ResetPassword}
          />
          <PrivateRoute
            path="/confirm-password"
            exact
            component={ConfirmPassword}
          />
          <Route path="/" exact component={LandingPage} />
          <CompanyRoute path="/home" exact component={Home} />
          <CompanyRoute path="/hire" exact component={Hire} />
          <PrivateRoute
            path="/profilePekerja"
            exact
            component={ProfilePekerja}
          />
          <WorkerRoute
            path="/edit-profile-worker"
            exact
            component={EditProfileWorker}
          />
          <CompanyRoute
            path="/profilePerusahaan"
            exact
            component={ProfilePerusahaan}
          />
          <CompanyRoute
            path="/editProfileRecruiter"
            exact
            component={EditProfileRecruiter}
          />
        </Switch>
      </Router>
      <ToastContainer pauseOnHover={false} autoClose={2000} />
    </div>
  );
}

export default App;
