import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import "./assets/main.css";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ManageStudents from "./Pages/ManageStudents";
import ManageStaff from "./Pages/ManageStaff";
import ManageYears from "./Pages/ManageYears";
import ManageTimetables from "./Pages/ManageTimetables";
import ManageGrades from "./Pages/ManageGrades";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Sidebar from "./Components/Sidebar";
import './App.css'

const App: React.FC = () => {

  return (
    <Router>
      <Sidebar>
        <Switch>
            <main>
              <Route path="/manage-students" component={ManageStudents} exact />
              <Route path="/manage-staff" component={ManageStaff} exact />
              <Route path="/manage-years" component={ManageYears} exact />
              <Route path="/manage-timetables" component={ManageTimetables} exact />
              <Route path="/manage-grades" component={ManageGrades} exact />
              <Route path="/login" component={Login} exact />
              <Route path="/register" component={Register} exact />
              <Redirect from='/' to='/manage-students' exact />
            </main>
          </Switch>
      </Sidebar>
    </Router>
  );
};

export default App;
