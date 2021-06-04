import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./assets/main.css";
import { Calendar, CheckSquare, Clock, Menu, User, Users } from "react-feather";
import { Link } from "react-router-dom";

// Be sure to include styles at some point, probably during your bootstraping
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import ManageStudents from "./Pages/ManageStudents";
import ManageStaff from "./Pages/ManageStaff";
import ManageYears from "./Pages/ManageYears";
import ManageTimetables from "./Pages/ManageTimetables";
import ManageGrades from "./Pages/ManageGrades";
import Dashboard from "./Pages/Dashboard";

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen md:flex">
        {/* Mobile menu */}
        <div className='bg-blue-900 text-blue-100 flex justify-between md:hidden'>
          {/* Logo */}
          <a href="/" className="block p-4 text-white font-bold">
            Cafe
          </a>

          {/* Menu Button */}
          <button className='mobile-menu-button p-4 focus:outline-none focus:bg-blue-600'><Menu className='h-5 w-5' /></button>
        </div>
        {/* Sidebar */}
        <div className="sidebar bg-blue-900 text-white w-64 space-y-6 py-7 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
          <Link className="flex items-center space-x-2 px-2 ml-2 hover:text-white hover:no-underline" to="/">
            <span className="text-2xl font-bold">School Management System</span>
          </Link>

          <nav>
            <Link
              to="/manage-students"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <Users className='w-6 h-6 flex mr-2' />
              <span>Students</span>
            </Link>
            <Link
              to="/manage-staff"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <User className='w-6 h-6 flex mr-2' />
              Staff
            </Link>
            <Link
              to="/manage-years"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <Calendar className='w-6 h-6 flex mr-2' />
              Years
            </Link>
            <Link
              to="/manage-timetables"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <Clock className='w-6 h-6 flex mr-2' />
              Timetables
            </Link>
            <Link
              to="/manage-grades"
              className="flex items-center block py-2.5 px-4 transition duration-200 hover:bg-blue-800 hover:text-white hover:no-underline"
            >
              <CheckSquare className='w-6 h-6 flex mr-2' />
              Grades
            </Link>
          </nav>
        </div>

        {/* Content */}
        <div className="flex-1 p-10">
          <Switch>
            <main>
              <Route path="/manage-students" component={ManageStudents} exact />
              <Route path="/manage-staff" component={ManageStaff} exact />
              <Route path="/manage-years" component={ManageYears} exact />
              <Route path="/manage-timetables" component={ManageTimetables} exact />
              <Route path="/manage-grades" component={ManageGrades} exact />
              <Route path='/' component={Dashboard} exact />
            </main>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
