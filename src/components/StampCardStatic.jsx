import { lazy, Suspense } from 'react';

const StampCard = () => {
  const stampedDonuts = Array.from({ length: 4 }, () => Math.floor(Math.random() * 6) + 1);
  const emptyDonuts = Array.from({ length: 2 }, () => Math.floor(Math.random() * 6) + 1);

  return (
    <div className='flex-grow h-auto row-1-card '>
      <div className='w-full p-4 bg-gray-100 rounded-sm shadow-inner'>
        <h2 className='mb-2 text-xl font-bold text-center text-gray-800'>
          My Donut Rewards</h2>
        <div className='grid grid-cols-3 grid-rows-2 gap-2 mx-auto'>
          {stampedDonuts.map((iconNumber, index) => (
            <div key={index} className='w-16 h-16 bg-white rounded-full shadow-md'>
              <DonutIcon type="Color" number={iconNumber} />
            </div>
          ))}
          {emptyDonuts.map((iconNumber, index) => (
            <div key={index} className='flex items-center justify-center w-16 h-16 rounded-full'>
              <DonutIcon type="Outline" number={iconNumber} />
            </div>
          ))}
        </div>
        <p className='mt-3 text-xs italic text-center text-gray-800 '>This is a static display of your rewards.</p>
      </div>
    </div>
  );
};

const DonutIcon = ({ type, number }) => {
  const componentName = `${type}${number}`;
  const Component = lazy(() =>
    import(`./DonutIcons`).then((module) => ({
      default: module[componentName],
    }))
  );
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
};

export default StampCard;
