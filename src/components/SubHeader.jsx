import { Link } from 'react-router-dom';

const SubHeader = () => {
  return (
    <div className="flex items-center w-full h-full text-white">
      <Link to="/" className="flex items-center">
        <h1 className="text-3xl font-bold text-teal-300">Donut Dashboard</h1>
        <div className="ml-6 sub-header">
          <h2>Virtually Sweet Rewards for Opensource Project Contributions</h2>
        </div>
      </Link>
    </div>
  );
};

export default SubHeader;