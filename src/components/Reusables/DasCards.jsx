import { LockIcon, MenuIcon } from "lucide-react";
import React from "react";
import { Donut } from "../Graphs/Donut";

const DasCards = () => {
  return (
    <div
      className="card flex flex-col flex-[0.3]  rounded-3xl border-[2px] border-indigo-400 px-5 py-2 text-white"
      style={{
        background: "linear-gradient(110.33deg, #37346F 0%, #625CC8 100%)",
      }}
    >
      <div className="top flex gap-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <div
            className="icon  h-fit rounded-xl p-2 "
            style={{ backgroundColor: "rgb(177, 190, 255, 0.46)" }}
          >
            <LockIcon size={15} />
          </div>
          <h1 className="text-white text-[16px]">Hight-risk events</h1>
        </div>
        <MenuIcon />
      </div>
      <div className="flex  gap-5 bottom items-center justify-between">
        <div className="px-5">
          <h1 className="text-xl">29</h1>
          <p className="text-sm w-full">of 38 total</p>
        </div>
        <div className="donutchart">
          <Donut />
        </div>
      </div>
    </div>
  );
};

export default DasCards;
