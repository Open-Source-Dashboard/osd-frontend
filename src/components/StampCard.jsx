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
    <div className="flex-grow h-auto w-3/4 row-1-card border-none bg-transparent no-shadow p-0">
      <div className="flex items-center justify-center w-full ">
        <div
          className="w-5/6 p-3 rounded-md shadow-inner relative"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/sprinkles-colorful-background_405506-117.jpeg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            boxShadow: "0px 0px 1px 1pt #4536CE",
          }}
        >
          <div className="relative bg-white rounded-md p-2 border-none">
            <h2 className="mb-0 text-2xl font-bold mt-0 text-gray-800 text-center">
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
          
          <div className="relative bg-white rounded-md border-none mt-2">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-300 rounded-b-md"></div>
          </div>
            <p className="text-s text-center italic text-gray-700 pt-2">
              Earn a donut for every opensource commit.
            </p>
            <p className="text-xs italic text-center text-orange-600 p-1">
              12 donuts equals a donut box!
            </p>
        </div>
      </div>
    </div>
  );
};

export default StampCard;
