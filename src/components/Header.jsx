import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div >
      <Link to="/" className="flex flex-col lg:flex-row items-center w-full rounded-md bg-gray">
        <h1 className="mt-3 lg:mt-0 lg:ml-4 text-3xl font-bold text-pink">Donut Dashboard</h1>
        <div className="sub-header lg:text-left lg:pl-6 xl:pl-10">
          <h2 className="text-sm md:text-xl"> Virtually Sweet Rewards for Opensource Project Contributions</h2>
        </div>
      </Link>
    </div>
  );
};

export default Header;
