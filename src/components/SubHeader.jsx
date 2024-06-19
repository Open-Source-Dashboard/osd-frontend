import { Link } from 'react-router-dom';

const SubHeader = () => {
  return (
    <div className="flex items-center w-full h-full text-white">
      <div className="flex items-center">
        <h1 className="ml-1 text-4xl font-bold text-orange">Donut Dashboard</h1>
        <div className="pb-2 mx-6 sub-header">
          <h2 className="text-blue-white">Virtually Sweet Rewards for Opensource Project Contributions</h2>
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
