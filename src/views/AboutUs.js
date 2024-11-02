import React from "react";
import { FaGithub } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const teamMembers = [
  {
    pfp: process.env.PUBLIC_URL + "/tammy_do.png",
    name: "Tammy",
    linkedin: "https://www.linkedin.com/in/tammytdo/",
    github: "https://github.com/tammytdo",
    donut: "Matcha Mochi with Oreo",
  },
  {
    pfp: process.env.PUBLIC_URL + "/lana_zumbrunn.png",
    name: "Lana",
    linkedin: "https://www.linkedin.com/in/lanazumbrunn/",
    github: "https://github.com/lana-z",
    donut: "Cream Bismarck with Chocolate Frosting",
  },
  {
    pfp: process.env.PUBLIC_URL + "/andrea_riley.jpeg",
    name: "Andrea",
    linkedin: "https://www.linkedin.com/in/and-riley/",
    github: "https://github.com/ariley215",
    donut: "Vanilla Glazed with Sprinkles",
  },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto text-center">
        <div className="mb-5">
          <Header />
        </div>
        <h1 className="mb-5 text-3xl font-bold text-pink">The Team</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-2 rounded-lg shadow-lg bg-gray">
              <h3 className="mb-2 text-xl font-bold text-left">{member.name}</h3>
              <div className="p-3 rounded-md bg-gray-md">
                <div className="mb-4">
                  <img
                    src={member.pfp}
                    alt={`${member.name}'s GitHub Profile Pic`}
                    className="object-cover w-40 h-40 mx-auto rounded-full"
                  />
                </div>
                <p className="mb-4 text-sm text-white-600">
                  Favorite Donut: {member.donut}
                </p>
                <div className="flex justify-center mt-2 space-x-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white"
                  >
                    LinkedIn
                  </a>
                  {/* <span className="text-sm text-white"></span> */}
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="m-8 text-lg">
          <p className="mb-2">Interested in our work?</p>
          <p className="mb-6">
            Visit our GitHub repository to learn more and contribute!
          </p>
          <a
            href="https://github.com/orgs/Open-Source-Dashboard/repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 text-pink"
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </a>
        </div>
        <Footer />
      </div>
    </div >
  );
};

export default AboutUs;
