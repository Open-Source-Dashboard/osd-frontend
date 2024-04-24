import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import AboutUs from "./views/AboutUs";
import MapOfUsers from "./views/MapOfUsers";
import Feedback from "./views/Feedback";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./auth/Login";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/projects/:id" element={<MapOfUsers />} />
          <Route path="/github/callback" element={<Login />} />
          <Route path="*" element={<Feedback /> } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;