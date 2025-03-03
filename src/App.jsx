import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import AdminSignUp from "./pages/AdminSignUp";
import AdminLogin from "./pages/AdminLogin";
import Sidebar from "./components/Sidebar";
import TeamManagerOverview from "./pages/TeamManagerOverview";
import PerformanceReports from "./pages/PerformanceReports";
import AdministrativeControl from "./pages/AdministrativeControl";
import AssignTask from "./pages/AssignTask";

// Layout for pages that require Sidebar
const Layout = ({ children }) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">{children}</div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Navigate to="/team-manager-overview" />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminSignUp" element={<AdminSignUp />} />

        {/* Dashboard Routes - With Sidebar */}
        <Route
          path="/team-manager-overview"
          element={
            <Layout>
              <TeamManagerOverview />
            </Layout>
          }
        />
        <Route
          path="/assign-task"
          element={
            <Layout>
              <AssignTask />
            </Layout>
          }
        />
        <Route
          path="/administrative-control"
          element={
            <Layout>
              <AdministrativeControl />
            </Layout>
          }
        />
        <Route
          path="/performance-reports"
          element={
            <Layout>
              <PerformanceReports />
            </Layout>
          }
        />


        {/* Remove catch-all redirect to login */}
        <Route path="*" element={<Navigate to="/AdminLogin" />} />
      </Routes>
    </Router>

  );
}

export default App;
