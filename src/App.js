import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
import { RepoProvider } from "./api_calls/RepoContext";
import { UserProvider } from "./api_calls/UserContext";
import AboutUs from "./views/AboutUs";
import Authentication from "./views/Authentication";
import Dashboard from "./views/Dashboard";
import Feedback from "./views/Feedback";
import PageNotFound from "./views/PageNotFound";
import DashboardStatic from "./views/DashboardStatic";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <UserProvider>
        <RepoProvider>
          <div>
            <Routes>
              <Route
                path="/"
                element={user.github_username ? <Dashboard /> : <DashboardStatic />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/authentication" element={<Authentication />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </div>
        </RepoProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
