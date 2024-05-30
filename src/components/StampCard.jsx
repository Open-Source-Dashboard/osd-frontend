import { lazy, Suspense, useState, useEffect } from "react";

const StampCard = () => {
  const [userDonutsCount, setUserDonutsCount] = useState(1); // We give everyone a donut to start!
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
    return 4; // TODO: fetch user donuts count from API
  }

  function getUserDonutBoxCount() {
    return Math.floor(userDonutsCount / 12);
  }

  function randomizeStampedDonutsIcons(numberOfStamps) {
    const stampsArray = new Array(numberOfStamps).fill("");
    stampsArray.forEach((_, index) => {
      stampsArray[index] = Math.floor(Math.random() * 6) + 1; // Increase from 6 if add more donut designs
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
    <div className="h-auto p-0 bg-transparent border-none row-1-card no-shadow">
    <div className="flex items-center justify-center w-full ">
      <div
        className="relative w-full p-3 bg-center bg-cover rounded-md shadow-inner"
        style={{ backgroundImage: `url(/sprinkles-colorful-background.jpeg)` }}
      >
          <div className="relative bg-white border-none rounded-md">
            <h2 className="mt-0 mb-0 text-xl font-bold text-center text-gray-800">
              My Donuts
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200 rounded-b-md"></div>
          </div>

          <div className="grid grid-cols-6 grid-rows-2 gap-1 mx-auto mb-2 place-items-center">
            {stampedDonuts.map((iconNumber, index) => (
              <div
                key={index}
                className="flex items-center justify-center m-1 bg-teal-200 rounded-lg shadow-md shadow-lg h-11 w-11 shadow-gray-500/50"
              >
                <div className="flex items-center justify-center h-11 w-11">
                  <ColorDonutIcon number={iconNumber} />
                </div>
              </div>
            ))}
            {emptyDonuts.map((iconNumber, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-teal-100 rounded-lg shadow-md h-11 w-11"
              >
                <OutlineDonutIcon number={iconNumber} />
              </div>
            ))}
          </div>
          
          <div className="relative mt-2 bg-white border-none rounded-md">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-b-md"></div>
          </div>
            <p className="pt-2 text-sm italic text-center text-gray-700">
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
