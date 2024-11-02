import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Feedback = () => {
  const { user } = useAuth();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const feedbackData = {
      from_name: user.github_username,
      reply_to: email,
      message: message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        feedbackData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setFeedbackSent(true);
          setMessage("");
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-primary to-secondary">
      <Header />
      <div className="container mx-auto text-center">
        <h1 className="mb-5 text-3xl font-bold text-pink">Give Feedback</h1>
        {feedbackSent ? (
          <div className="text-lg font-semibold text-pink">
            <br/>
            <p className="mb-8">Thanks for your message!</p>
            <p>
              Go back to <Link to="/" className="text-white">Donut Dashboard home</Link>
            </p>
          </div>
        ) : (
          <div className="w-2/3 p-2 mx-auto rounded-lg shadow-lg bg-gray">
            <form onSubmit={handleSubmit} className="space-y-6 text-left">
              <div>
                <label
                  htmlFor="name"
                  className="block p-1 text-lg font-bold text-white"
                  style={{ fontFamily: '"Baloo 2", cursive' }}
                >
                  From
                </label>
                <input
                  type="text"
                  id="name"
                  value={user.github_username}
                  readOnly
                  className="w-full p-3 text-white rounded-md bg-gray-md"
                  placeholder="Login to add your GitHub username here..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block p-1 text-lg font-bold text-white"
                  style={{ fontFamily: '"Baloo 2", cursive' }}
                >
                  Email (optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 text-white rounded-md bg-gray-md"
                  placeholder="Your email..."
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block p-1 mb-0 text-lg font-bold text-white"
                  style={{ fontFamily: '"Baloo 2", cursive' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="8"
                  className="w-full p-3 text-white rounded-md bg-gray-md"
                  placeholder="Your feedback..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="p-3 mt-0 rounded-md bg-gray-md">
                <button
                  type="submit"
                  className="w-1/3 p-3 text-left text-white rounded-md shadow-md text-md bg-gray hover:text-pink"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Feedback;
