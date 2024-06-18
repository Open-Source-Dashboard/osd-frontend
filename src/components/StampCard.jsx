import { lazy, Suspense, useState, useEffect } from "react";
import { useAuth } from "../auth/AuthContext";

const StampCard = () => {
  const { user } = useAuth();
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
    const totalCommits = user?.user_model_data?.opensource_commit_count || 0;
    return totalCommits % 12;
  }

  function getUserDonutBoxCount() {
    return Math.floor(userDonutsCount / 12);
  }

  function randomizeStampedDonutsIcons(numberOfStamps) {
    const stampsArray = new Array(numberOfStamps).fill("");
    stampsArray.forEach((_, index) => {
      stampsArray[index] = Math.floor(Math.random() * 6) + 1;
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
        <Suspense fallback={<div>...</div>}>
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
        <Suspense fallback={<div>...</div>}>
          <Component />
        </Suspense>
      </div>
    );
  };

  return (
    <div className="h-auto p-0 bg-transparent border-none row-1-card no-shadow">
      <div className="flex items-center justify-center w-full">
        {/* <div className="relative w-full p-3 bg-center bg-cover rounded-md shadow-inner" style={{ backgroundImage: `url(/sprinkles-colorful-background.jpeg)` }}> */}
        <div className="relative w-full p-3 bg-center bg-cover rounded-md shadow-inner bg-mint">
          <div className="relative bg-white rounded-md">
            <h2 className="p-2 mt-0 mb-0 text-2xl font-bold text-center text-pink">
              My Donuts
            </h2>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-light rounded-b-md"></div>
          </div>

          <div className="grid grid-cols-6 grid-rows-2 gap-1 mx-auto mb-2 place-items-center">
            {stampedDonuts.map((iconNumber, index) => (
              <div
                key={index}
                className="flex items-center justify-center m-1 rounded-lg shadow-md bg-md-pink h-11 w-11 shadow-gray-500/50"
              >
                <div className="flex items-center justify-center h-11 w-11">
                  <ColorDonutIcon number={iconNumber} />
                </div>
              </div>
            ))}
            {emptyDonuts.map((iconNumber, index) => (
              <div
                key={index}
                className="flex items-center justify-center rounded-lg shadow-md bg-light-pink h-11 w-11"
              >
                <OutlineDonutIcon number={iconNumber} />
              </div>
            ))}
          </div>

          <div className="relative mt-2 bg-white rounded-md">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-light rounded-b-md"></div>
          </div>
          <div>
            <p className="pt-2 text-sm italic text-center text-blue">
              Earn a donut for every opensource commit.
            </p>
            <p className="p-1 pb-0 text-xs italic text-center text-blue">
              12 donuts equals a donut box!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StampCard;
