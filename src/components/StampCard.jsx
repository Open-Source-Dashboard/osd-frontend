import { lazy, Suspense, useState, useEffect } from 'react';

const StampCard = () => {
  const [userDonutsCount, setUserDonutsCount] = useState(0);
  const [stampedDonuts, setStampedDonuts] = useState([]);
  const [emptyDonuts, setEmptyDonuts] = useState([]);

  useEffect(() => {
    setUserDonutsCount(getUserDonutsCount());
  }, []);

  useEffect(() => {
    randomizeStampedDonutsIcons(userDonutsCount);
  }, [userDonutsCount]);

  useEffect(() => {
    randomizeEmptyDonutsIcons(12 - stampedDonuts.length);
  }, [stampedDonuts]);

  function getUserDonutsCount() {
    return 3; // TODO: fetch user donuts count from API
  }

  function randomizeStampedDonutsIcons(numberOfStamps) {
    const stampsArray = new Array(numberOfStamps).fill('');
    stampsArray.forEach((_, index) => {
      stampsArray[index] = Math.floor(Math.random() * 6) + 1;
    });
    setStampedDonuts(stampsArray);
  }

  function randomizeEmptyDonutsIcons(numberOfEmptyDonuts) {
    const emptyDonutsArray = new Array(numberOfEmptyDonuts).fill('');
    emptyDonutsArray.forEach((_, index) => {
      emptyDonutsArray[index] = Math.floor(Math.random() * 6) + 1;
    });
    setEmptyDonuts(emptyDonutsArray);
  }

  return (
    <div className='flex flex-col p-6 bg-white rounded-lg shadow-md'>
      <h2 className='mb-4 text-xl font-bold'>Donut Card</h2>
      {/* <p>
        Donut images representing stamps and greyed donuts to represent future
        commits
      </p> */}
      <div className='grid grid-cols-4 grid-rows-3 gap-2'>
        {stampedDonuts.map((iconNumber, index) => {
          return (
            <div key={index}>
              <ColorDonutIcon number={iconNumber} />
            </div>
          );
        })}
        {emptyDonuts.map((iconNumber, index) => {
          return (
            <div key={index}>
              <OutlineDonutIcon number={iconNumber} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const OutlineDonutIcon = ({ number }) => {
  const componentName = `Outline${number}`;
  const Component = lazy(() =>
    import('./DonutIcons').then((module) => ({
      default: module[componentName],
    }))
  );
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

const ColorDonutIcon = ({ number }) => {
  const componentName = `Color${number}`;
  const Component = lazy(() =>
    import('./DonutIcons').then((module) => ({
      default: module[componentName],
    }))
  );
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Component />
      </Suspense>
    </div>
  );
};

export default StampCard;
