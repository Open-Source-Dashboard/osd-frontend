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
    return 1; // TODO: fetch user donuts count from API
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

  return (
  <div className="flex-grow h-auto w-3/4 row-1-card shadow-lg shadow-gray-500/60">
      <h2 className="mb-2 text-xl font-bold mt-0">My Donuts</h2>

      <div className="flex items-center justify-center w-full">
        <div
          className="w-5/6 p-4 rounded-md shadow-inner"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/sprinkle_background.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-3 grid-rows-4 gap-2 mx-auto mb-3 place-items-center">
            {stampedDonuts.map((iconNumber, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center w-16 h-16 m-1 bg-orange-200 rounded-lg shadow-md shadow-lg shadow-gray-500/50"
                >
                  <div className="flex items-center justify-center w-16 h-16 p-1">
                    <ColorDonutIcon number={iconNumber} />
                  </div>
                </div>
              );
            })}
            {emptyDonuts.map((iconNumber, index) => {
              return (
                <div
                  key={index}
                  className="flex items-center justify-center w-16 h-16 p-1 bg-orange-100 rounded-lg shadow-md"
                >
                  <OutlineDonutIcon number={iconNumber} />
                </div>
              );
            })}
          </div>
          <div className="bg-white p-3 rounded-md shadow-md">
            <p className="text-xs italic text-center text-gray-800">
              Earn a donut for every opensource project commit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

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

export default StampCard;
