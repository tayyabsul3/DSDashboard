import { LockIcon, MenuIcon } from "lucide-react";
import React from "react";

const EnviCard = () => {
  return (
    <div className="card text-white border-[1px] border-blue-600 rounded-2xl p-4 flex flex-col w-fit">
      <div className="top flex  items-center justify-between ">
        <div className="flex items-center gap-5 ">
          <div className="icon bg-indigo-400 h-fit rounded-xl p-2 ">
            <LockIcon size={15} />
          </div>
          <h1 className="text-white text-[16px]">Hight-risk events</h1>
        </div>
        <MenuIcon />
      </div>
      <p className="text-sm w-[90%] py-2">
        Activate Email notifications for risky events to be informed
      </p>
      <a href="#" className="underline">
        Read more
      </a>
    </div>
  );
};

export default EnviCard;
