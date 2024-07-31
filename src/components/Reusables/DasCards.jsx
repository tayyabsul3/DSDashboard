import { LockIcon } from "lucide-react";
import React, { useEffect } from "react";
import { Donut } from "../Graphs/Donut";
import { GoKebabHorizontal } from "react-icons/go";

const DasCards = ({ dasCard }) => {
  useEffect(() => {
    // Make API call to get radialColor and percentage
    // Then update radialColor and percentage state here
  }, []);

  const { name, icon, gradient, radialColor, percentage, total, outOf } =
    dasCard;
  return (
    <div
      className="card flex flex-col w-full  sm:w-fit 2xl:w-[24%] rounded-3xl  border-indigo-400 p-3 lg:p-5 pb-0  text-white"
      style={{
        background: gradient,
      }}
    >
      <div className="top flex lg:gap-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="icon dascard_icon_bg  h-fit rounded-xl p-2 ">
            {icon}
          </div>
          <h1 className="text-white text-lg whitespace-nowrap ">{name}</h1>
        </div>
        <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
      </div>
      <div className="flex  items-center justify-between ">
        <div className="flex items-center my-5 gap-5 sm:flex-col sm:gap-0 sm:items-start  px-5 ">
          <h1 className="text-xl">{total}</h1>
          <p className="text-sm w-full whitespace-nowrap">of {outOf} total</p>
        </div>
        <div className="donutchart hidden md:flex ">
          <Donut radialColor={radialColor} percentage={percentage} />
        </div>
      </div>
    </div>
  );
};

export default DasCards;
