import { Link } from 'react-router-dom';

const Title = () => {
  return (
    <div className="flex flex-col items-start w-full h-full text-white ">
      <Link to="/" className="flex flex-col ">
        <h1 className="text-3xl font-bold text-teal-300">
          Donut Dashboard
        </h1>
        <div className="mb-0 subtitle">
          Virtually Sweet Rewards for Opensource Project Contributions
        </div>
      </Link>
    </div>
  );
};

export default Title;