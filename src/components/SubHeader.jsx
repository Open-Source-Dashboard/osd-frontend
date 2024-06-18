import { Link } from 'react-router-dom';

const SubHeader = () => {
  return (
    <div className="flex items-center w-full h-full text-white">
      <Link to="/" className="flex items-center p-0 m-0 pb-1 bg-gray">
        <h1 className="ml-6 text-3xl font-bold text-pink">Donut Dashboard</h1>
        <div className="mx-6 sub-header">
          <h2>Virtually Sweet Rewards for Opensource Project Contributions</h2>
        </div>
      </Link>
    </div>
  );
};

export default SubHeader;
