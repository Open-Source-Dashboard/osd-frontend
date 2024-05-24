import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import AboutUs from "./views/AboutUs";
import Authentication from "./views/Authentication";
import Dashboard from "./views/Dashboard";
import Feedback from "./views/Feedback";
import StaticDashboard from "./views/StaticDashboard";
import { useAuth } from "./auth/AuthContext";
import { RepoProvider } from "./api_calls/RepoContext";
// import { UserProvider } from "./api_calls/UserContext";
// import MapOfUsers from "./views/MapOfUsers";


function App() {
  const { user } = useAuth();
  console.log('user from App.jsx', user);
  console.log('user access_token from App.jsx', user.access_token);

  let github_username = user['github_username']
  console.log('github_username', github_username);

  return (
    <Router>
      {/* <UserProvider> */}
      <RepoProvider>
        <div>
          <NavBar />
          <Routes>
          <Route path="/" element={user && user.github_username ? <Dashboard /> : <StaticDashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/authentication" element={<Authentication />} />
            <Route path="*" element={<Feedback />} />
          </Routes>
          <Footer />
        </div>
      </RepoProvider>
      {/* </UserProvider> */}
    </Router>
  );
}

export default App;
