import { lazy, Suspense, useState, useEffect } from 'react';

const StampCard = () => {
  const [userDonutsCount, setUserDonutsCount] = useState(0);
  const [userDonutBoxCount, setUserDonutBoxCount] = useState(0);
  const [stampedDonuts, setStampedDonuts] = useState([]);
  const [emptyDonuts, setEmptyDonuts] = useState([]);

  useEffect(() => {
    setUserDonutsCount(getUserDonutsCount());
  }, []);

  useEffect(() => {
    setUserDonutBoxCount(getUserDonutBoxCount());
  }, []);

  useEffect(() => {
    randomizeStampedDonutsIcons(userDonutsCount); // TODO: Calculate the number of donuts to show
  }, [userDonutsCount]);

  useEffect(() => {
    getUserDonutBoxCount(); // TODO: Calculate the number of donut boxes to show
  }, [userDonutBoxCount]);

  useEffect(() => {
    randomizeEmptyDonutsIcons(12 - stampedDonuts.length);
  }, [stampedDonuts]);

  function getUserDonutsCount() {
    return 3; // TODO: fetch user donuts count from API 
  }

  function getUserDonutBoxCount() {
    return 2; // TODO: fetch user donut box count from API
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
    <div className='row-2-card'>
      <h2 className='mb-4 text-xl font-bold'>My Donuts</h2>
      {/* <p>
        Donut images representing stamps and greyed donuts to represent future
        commits
      </p> */}
      <div className='grid grid-cols-4 grid-rows-3 gap-2 mx-auto'>
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
