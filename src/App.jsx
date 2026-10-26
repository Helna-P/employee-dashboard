
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeForm from "./pages/EmployeeForm";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-dark bg-primary shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            Employee Portal
          </NavLink>

          <div className="navbar-nav ms-auto flex-row gap-3">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/employee-form"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active fw-bold" : ""}`
              }
            >
              Employee Form
            </NavLink>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


