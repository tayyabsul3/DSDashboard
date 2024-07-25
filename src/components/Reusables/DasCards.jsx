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
      className="card flex flex-col 2xl:flex-[0.3]   rounded-3xl  border-indigo-400 p-5 pb-0 2xl:pb-5 text-white"
      style={{
        background: gradient,
      }}
    >
      <div className="top flex gap-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="icon dascard_icon_bg  h-fit rounded-xl p-2 ">
            {icon}
          </div>
          <h1 className="text-white text-lg">{name}</h1>
        </div>
        <GoKebabHorizontal style={{ transform: "rotate(90deg)" }} />
      </div>
      <div className="flex  items-center justify-between ">
        <div className=" px-5">
          <h1 className="text-xl">{total}</h1>
          <p className="text-sm w-full">of {outOf} total</p>
        </div>
        <div className="donutchart">
          <Donut radialColor={radialColor} percentage={percentage} />
        </div>
      </div>
    </div>
  );
};

export default DasCards;
