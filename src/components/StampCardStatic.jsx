import { lazy, Suspense, useState, useEffect } from "react";

const StampCard = () => {
  const [userDonutsCount, setUserDonutsCount] = useState(1); 
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
    randomizeStampedDonutsIcons(userDonutsCount);
  }, [userDonutsCount]);

  useEffect(() => {
    getUserDonutBoxCount();
  }, [userDonutBoxCount]);

  useEffect(() => {
    randomizeEmptyDonutsIcons(12 - stampedDonuts.length);
  }, [stampedDonuts]);

  function getUserDonutsCount() {
    return 20; 
  }

  function getUserDonutBoxCount() {
    return Math.floor(userDonutsCount / 12);
  }

  function randomizeStampedDonutsIcons(numberOfStamps) {
    const stampsArray = new Array(numberOfStamps).fill("");
    stampsArray.forEach((_, index) => {
      stampsArray[index] = Math.floor(Math.random() * 12) + 1;
    });
    setStampedDonuts(stampsArray);
  }

  function randomizeEmptyDonutsIcons(numberOfEmptyDonuts) {
    const emptyDonutsArray = new Array(numberOfEmptyDonuts).fill("");
    emptyDonutsArray.forEach((_, index) => {
      emptyDonutsArray[index] = Math.floor(Math.random() * 6) + 1;
    });
    setEmptyDonuts(emptyDonutsArray);
  }

  const OutlineDonutIcon = ({ number }) => {
    const componentName = `Outline${number}`;
    const Component = lazy(() =>
      import("./DonutIcons").then((module) => ({
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
      import("./DonutIcons").then((module) => ({
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
  
  return (
    <div className="flex-grow w-3/4 h-auto p-0 bg-transparent border-none row-1-card no-shadow">
      <div className="flex items-center justify-center w-full ">
      <div
        className="relative w-5/6 p-3 bg-center bg-cover rounded-md shadow-inner"
        style={{ backgroundImage: `url(/sprinkles-colorful-background.jpeg)` }}
      >
          <div className="relative p-2 bg-white border-none rounded-md">
            <h2 className="mt-0 mb-0 text-2xl font-bold text-center text-gray-800">
              My Donuts
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-md"></div>
          </div>

          <div className="grid grid-cols-3 grid-rows-4 gap-1 mx-auto mb-2 place-items-center">
            {stampedDonuts.map((iconNumber, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 m-1 bg-teal-200 rounded-lg shadow-md shadow-lg shadow-gray-500/50"
              >
                <div className="flex items-center justify-center w-16 h-16 p-1">
                  <ColorDonutIcon number={iconNumber} />
                </div>
              </div>
            ))}
            {emptyDonuts.map((iconNumber, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-16 h-16 p-1 bg-teal-100 rounded-lg shadow-md"
              >
                <OutlineDonutIcon number={iconNumber} />
              </div>
            ))}
          </div>
          
          <div className="relative mt-2 bg-white border-none rounded-md">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-b-md"></div>
          </div>
            <p className="pt-2 italic text-center text-gray-700 text-s">
              Earn a donut for every opensource commit.
            </p>
            <p className="p-1 text-xs italic text-center text-orange-600">
              12 donuts equals a donut box!
            </p>
        </div>
      </div>
    </div>
  );
};

export default StampCard;
