import { lazy, Suspense, useState, useEffect, useCallback } from "react";
import { useAuth } from "../auth/AuthContext";

const StampCardStatic = () => {
  const github_username = "My Donuts";
  const date_joined = Date.now();
  const formattedDate = new Date(date_joined).toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });

  const [stampedDonuts, setStampedDonuts] = useState([]);
  const [emptyDonuts, setEmptyDonuts] = useState([]);

  const getUserDonutsCount = useCallback(() => {
    return 10;
  }, []);

  useEffect(() => {
    const totalDonuts = getUserDonutsCount();
    const stampedDonutsArray = new Array(totalDonuts)
      .fill("")
      .map(() => Math.floor(Math.random() * 6) + 1);
    setStampedDonuts(stampedDonutsArray);

    const emptyDonutsArray = new Array(12 - totalDonuts)
      .fill("")
      .map(() => Math.floor(Math.random() * 6) + 1);
    setEmptyDonuts(emptyDonutsArray);
  }, [getUserDonutsCount]);

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
        <div
          className="relative w-full p-1 bg-center bg-cover rounded-md shadow-inner"
          style={{
            backgroundImage: `url(/sprinkles-colorful-background.jpeg)`,
          }}
        >
          <div className="relative bg-white rounded-md">
            <div className="flex flex-row justify-between">
              <h2 className="p-1 m-0 text-xl font-bold text-left ml-2 text-pink">
                {github_username}
              </h2>
              <p className="text-gray text-sm p-1 mt-1">Joined {formattedDate}</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full border-orange-light border-t-2 border-dotted"></div>
          </div>

          <div className="grid grid-cols-6 grid-rows-2 gap-1 mx-auto mb-2 ml-2 mr-2 place-items-center">
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
                className="flex items-center justify-center rounded-lg shadow-md shadow-gray-500/50 h-11 w-11"
              >
                <OutlineDonutIcon number={iconNumber} />
              </div>
            ))}
          </div>

          <div className="relative mt-2 bg-white rounded-md">
            <div className="absolute bottom-0 left-0 w-full ml-2 mr-2 border-orange-light border-t-2 border-dotted"></div>
          </div>
          <p className="p-2 text-sm italic text-center text-gray">
            Earn a donut for every open-source commit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StampCardStatic;
