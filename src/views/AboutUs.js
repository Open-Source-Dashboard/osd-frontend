import React from 'react';


const teamMembers = [
  { pfp: '', name: 'Tammy', role: 'project role', linkedin: 'https://www.linkedin.com/in/tammytdo/', github: 'https://github.com/lana-z', donut: 'Mochi Donut with Matcha Glaze'},
  { pfp: '', name: 'Lana', role: 'project role', linkedin: 'https://www.linkedin.com/in/lanazumbrunn/', github: 'https://github.com/tammytdo', donut: 'Cream Bismarck with Chocolate Frosting'},
  { pfp: '', name: 'Andrea', role: 'project role', linkedin: 'https://www.linkedin.com/in/and-riley/', github: 'https://github.com/ariley215', donut: 'Vanilla Glazed with Sprinkles'},
];

const AboutUs = () => {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-r from-primary to-secondary">
      <div className="container mx-auto text-center">
        <h1 className="mb-8 text-4xl font-bold ">Our Team</h1>
        <div className="mb-8 text-lg">
          <p>Interested in our work? Visit our GitHub repository to learn more and contribute!</p>
          <a href="//https://github.com/orgs/Open-Source-Dashboard/repositories" target="_blank" rel="noopener noreferrer" className="inline-block p-4 mt-4">
            View our GitHub Repo
          </a>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => (

            <div key={index} className="p-6 rounded-lg shadow-lg bg-violet-950">
              <div className="bg-grey-100">
                <div className="mb-4">
                    {/* Display GitHub Profile Pic */}
                    <img src={member.pfp} alt={`${member.name}'s GitHub Profile Pic`} className="object-cover w-40 h-40 mx-auto bg-gray-200 rounded-full"/>
                </div>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-gray-600">Project Role: {member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <br/>
                <a href={member.github} target="_blank" rel="noopener noreferrer" >GitHub Profile</a>
                <p className="text-gray-600">Favorite Donut: {member.donut}</p>
          </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

