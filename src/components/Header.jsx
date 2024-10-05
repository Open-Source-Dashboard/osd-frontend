import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div >
      <Link to="/" className="flex flex-col items-center w-full rounded-md bg-gray">
        <h1 className="flex mt-2 ml-4 text-3xl font-bold text-pink">Donut Dashboard</h1>
        <div className="sub-header">
          <h2 className="text-sm md:text-xl"> Virtually Sweet Rewards for Opensource Project Contributions</h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;
