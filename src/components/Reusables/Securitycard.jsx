import { Menu } from "lucide-react";
import React from "react";

const Securitycard = () => {
  return (
    <div
      style={{ backgroundColor: "rgba(55, 52, 111, 1)" }}
      className="flex-[0.2] h-[92px] text-white flex flex-col px-5 py-2 rounded-2xl justify-center "
    >
      <div className="top flex justify-between   items-center">
        <h1 className="text-sm">Web</h1>
        <Menu size={20} />
      </div>
      <div className="progress  w-[90%] h-2 bg-white rounded-sm mt-4">
        <div className="bg-cyan-400 w-[40%] h-2 rounded-sm" />
      </div>
      <p className="text-cyan-400 mt-1 text-sm">60%</p>
    </div>
  );
};

export default Securitycard;
