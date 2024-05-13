import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import AboutUs from "./views/AboutUs";
import MapOfUsers from "./views/MapOfUsers";
import Feedback from "./views/Feedback";
import Authentication from "./views/Authentication";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Login from "./auth/Login";
import CarouselModal from "./components/GetStartedModal";
import { RepoProvider } from "./api_calls/RepoContext";  

function App() {
  const [repoData, setRepoData] = React.useState([]);

  return (
    <Router>
      <RepoProvider> 
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/projects/:id" element={<MapOfUsers />} />
            <Route path="/github/callback" element={<Login />} />
            <Route path="*" element={<Feedback /> } />
            <Route path="/authentication" element={<Authentication />} />
          </Routes>
          <Footer />
        </div>
      </RepoProvider>
    </Router>
  );
}

export default App;
