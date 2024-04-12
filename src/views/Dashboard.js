import React from "react";

const Dashboard = () => {
    return (
      <div className="min-h-screen bg-purple-200">
        <header className="bg-white shadow">
          <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          </div>
        </header>

        {/* Main content */}
        <main className="py-6">
          {/* Row 1: User Info & Stats */}
          <div className="px-4 mx-auto mb-4 max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* User Info - Replace with actual component or content */}
              <div className="p-4 bg-green-200 rounded-lg shadow-md">
                <p>User info goes here</p>
              </div>

              {/* User Stats - Replace with actual component or content */}
              <div className="grid grid-cols-1 gap-4 md:col-span-2 lg:grid-cols-2">
                <div className="p-4 bg-blue-200 rounded-lg shadow-md">
                  <p>Stats component or content goes here</p>
                </div>

                <div className="p-4 bg-purple-200 rounded-lg shadow-md">
                  <p>Another stats component or content</p>
                </div>
              </div>
            </div>
          </div>

          {/* Placeholder divs. Replace with actual components/content */}
          <div className="px-4 mx-auto mb-4 max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4 bg-red-200 rounded-lg shadow-md lg:col-span-2">
                <p>Top 20 Open Source Active Projects list goes here</p>
              </div>
              <div className="p-4 bg-green-200 rounded-lg shadow-md">
                <p>Featured Project of the month etc.</p>
              </div>
            </div>
          </div>

          <div className="px-4 mx-auto mb-4 max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="p-4 bg-yellow-200 rounded-lg shadow-md">
                <p>Link to user's starred GitHub pages</p>
              </div>
              <div className="p-4 bg-teal-200 rounded-lg shadow-md">
                <p>Latest Contributors</p>
              </div>
            </div>
          </div>
        </main>

      </div>
    );
};

export default Dashboard;