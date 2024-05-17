import React from "react";
import { FaGithub } from "react-icons/fa";

const teamMembers = [
  {
    pfp: process.env.PUBLIC_URL + "/tammy_do.png",
    name: "Tammy",
    linkedin: "https://www.linkedin.com/in/tammytdo/",
    github: "https://github.com/lana-z",
    donut: "Matcha Mochi Donut with Oreo",
  },
  {
    pfp: process.env.PUBLIC_URL + "/lana_zumbrunn.png",
    name: "Lana",
    linkedin: "https://www.linkedin.com/in/lanazumbrunn/",
    github: "https://github.com/tammytdo",
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
        <h1 className="mb-8 text-4xl font-bold">The Team</h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-violet-950">
              <div className="bg-grey-100">
                <div className="mb-4">
                  <img
                    src={member.pfp}
                    alt={`${member.name}'s GitHub Profile Pic`}
                    className="object-cover w-40 h-40 mx-auto bg-gray-200 rounded-full"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-orange-500">{member.name}</h3>
                <p className="mb-4 text-xl text-white-600">Favorite Donut: {member.donut}</p>
                
                <div className="flex justify-center mt-2 space-x-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-teal-500"
                  >
                    LinkedIn
                  </a>
                  <span className="text-gray-500">|</span>
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl text-teal-500"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mb-8 text-lg mt-14">
          <p className="mb-2">
            Interested in our work? 
          </p>
          <p className="mb-2">Visit our GitHub repository to learn more
            and contribute!</p>
          <a
            href="https://github.com/Open-Source-Dashboard/osd-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-4 text-yellow-500 "
          >
            <FaGithub className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
