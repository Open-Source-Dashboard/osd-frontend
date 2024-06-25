import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext";
import { RepoProvider } from "./api_calls/RepoContext";
import { UserProvider, useUserDispatch } from "./api_calls/UserContext"; // Assuming useUserDispatch is provided by UserContext
import AboutUs from "./views/AboutUs";
import Authentication from "./views/Authentication";
import Dashboard from "./views/Dashboard";
import Feedback from "./views/Feedback";
import PageNotFound from "./views/PageNotFound";
import StaticDashboard from "./views/StaticDashboard";
import netlify from "netlify-auth-providers";

function App() {
  const { user, setUser } = useAuth();
  const dispatch = useUserDispatch(); // This assumes you have a dispatch function to update user state in UserContext

  // Function to handle GitHub authentication
  const handleGitHubAuth = () => {
    const authenticator = new netlify.default({});

    authenticator.authenticate(
      { provider: "github", scope: "user" },
      async function (error, data) {
        if (error) {
          console.error("Error Authenticating with GitHub:", error);
        } else {
          console.log("Authenticated with GitHub. Access Token:", data.token);
          // Example: Update user context with GitHub username
          dispatch({ type: "SET_GITHUB_USERNAME", payload: data.username });
          setUser({ ...user, github_username: data.username }); // Update user state
        }
      }
    );
  };

  // Check if user is authenticated on component mount
  useEffect(() => {
    if (user && user.github_username) {
      // You may want to redirect or do something else here after successful authentication
    }
  }, [user]);

  return (
    <Router>
      <UserProvider>
        <RepoProvider>
          <div>
            <Routes>
              <Route
                path="/"
                element={user && user.github_username ? <Dashboard /> : <StaticDashboard />}
              />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/authentication" element={<Authentication handleGitHubAuth={handleGitHubAuth} />} />
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