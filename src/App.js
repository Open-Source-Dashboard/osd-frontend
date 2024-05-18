import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import StaticDashboard from "./views/StaticDashboard";
import AboutUs from "./views/AboutUs";
// import MapOfUsers from "./views/MapOfUsers";
import Feedback from "./views/Feedback";
import Authentication from "./views/Authentication";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import { RepoProvider } from "./api_calls/RepoContext";
import { UserProvider } from "./api_calls/UserContext";
import { useAuth } from "./auth/AuthContext";
import { AuthProvider } from "./auth/AuthContext";


function App() {
  const { user } = useAuth();

  return (
    <Router>
      <UserProvider>
      <RepoProvider>
        <div>
          <NavBar />
          <Routes>
          <Route path="/" element={user && user.github_username ? <Dashboard /> : <StaticDashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
            {/* <Route path="/projects/:id" element={<MapOfUsers />} /> */}
            <Route path="/github/callback" element={<Login />} />
            <Route path="*" element={<Feedback />} />
            <Route path="/authentication" element={<Authentication />} />
          </Routes>
          <Footer />
        </div>
      </RepoProvider>
      </UserProvider>
    </Router>
  );
}

export default App;
