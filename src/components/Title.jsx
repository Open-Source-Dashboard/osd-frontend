import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="flex items-center w-full h-full text-white ">
      <Link to="/" className="flex items-center ">
        <h1 className="text-3xl font-bold text-teal-300">
          Donut Dashboard
        </h1>
        <div className="ml-6 subtitle">
          Virtually Sweet Rewards for Opensource Project Contributions
        </div>
      </Link>
    </div>
  );
};

export default Title;