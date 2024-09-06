import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div >
      <Link to="/" className="flex items-center w-full rounded-md bg-gray">
        <h1 className="mt-2 ml-4 text-3xl font-bold text-pink">Donut Dashboard</h1>
        <div className="pb-2 mx-6 sub-header">
          <h2 className="text-sm md:text-xl"> Virtually Sweet Rewards for Opensource Project Contributions</h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;
