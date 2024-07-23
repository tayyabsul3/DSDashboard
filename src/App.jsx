import "./App.css";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { BsFillBellFill, BsFillCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";

import LogsComponent from "./components/Logs";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import DataSecurity from "./components/DataSecurity";

function App() {
  const [dash, setdash] = useState(true);
  const [log, setlog] = useState(false);
  const [security, setsecurity] = useState(false);
  return (
    <div className="flex">
      <div className="sidebar  linear_g_1 w-[280px] h-screen flex flex-col px-6 ">
        <div className="logo w-full mx-auto pt-5 pb-8 flex justify-center items-center">
          <img
            src="./DASSOFT.png"
            alt="Logo"
            className="mx-auto mt-4 w-[90px]"
          />
        </div>
        <div class="h-px mb-5 bg-gradient-to-r from-transparent via-white to-transparent"></div>
        <div className="nav flex flex-col justify-items-start  ">
          <div>
            <button
              onClick={() => {
                setdash(true);
                setlog(false);
                setsecurity(false);
              }}
              className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                dash ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
              }`}
            >
              <span
                className={`p-2 rounded-xl ${
                  dash ? "bg-purple-600" : "bg-blue-950 text-purple-700"
                }`}
              >
                <IoIosHome size={18} />
              </span>
              <span>Dashboard</span>
            </button>
            <button
              onClick={() => {
                setdash(false);
                setlog(false);
                setsecurity(true);
              }}
              className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                security ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
              }`}
            >
              <span
                className={`p-2 rounded-xl ${
                  security ? "bg-purple-600" : "bg-blue-950 text-purple-700"
                }`}
              >
                <BiSolidLockOpenAlt size={18} />
              </span>
              <span>Data Security</span>
            </button>
            <button
              className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                log ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
              }`}
              onClick={() => {
                setdash(false);
                setlog(true);
                setsecurity(false);
              }}
            >
              <span
                className={`p-2 rounded-xl ${
                  log ? "bg-purple-600" : "bg-blue-950 text-purple-700"
                }`}
              >
                <BsFillCreditCardFill size={18} />
              </span>
              <span>Logs</span>
            </button>
            <button className="bg-transparent flex  items-center   text-white gap-4 text-[14px] py-4 rounded-3xl w-full px-4">
              <span className="bg-blue-950 text-purple-700 p-2 rounded-xl">
                <HiWrench size={18} />
              </span>
              <span>RTL</span>
            </button>
          </div>
          <div>
            <p className="text-white text-[13px] my-3 pl-4 ">ACCOUNT PAGES</p>
            <div>
              <button className="bg-transparent flex  items-center   text-white gap-5 text-[14px] py-4 rounded-3xl w-full px-4">
                <span className="bg-blue-950 text-purple-700 p-2 rounded-xl">
                  <BiSolidLockOpenAlt size={18} />
                </span>
                <span>Data Security</span>
              </button>
              <button className="bg-transparent flex  items-center   text-white gap-5 text-[14px] py-4 rounded-3xl w-full px-4">
                <span className="bg-blue-950 text-purple-700 p-2 rounded-xl">
                  <BsFillCreditCardFill size={18} />
                </span>
                <span>Logs</span>
              </button>
              <button className="bg-transparent flex  items-center   text-white gap-5 text-[14px] py-4 rounded-3xl w-full px-4">
                <span className="bg-blue-950 text-purple-700 p-2 rounded-xl">
                  <HiWrench size={18} />
                </span>
                <span>RTL</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main h-screen bg-blue-950 w-[87vw]">
        <div className="header w-full  h-[78px]  text-indigo-300 flex justify-between ">
          <p></p>
          <div className="flex items-center gap-14 pr-20">
            <div className="icons flex gap-10">
              <CiSearch size={30} className="hover:cursor-pointer" />
              <CgMenuGridO size={30} className="hover:cursor-pointer" />
            </div>
            <div className="profile flex gap-12 items-center">
              <button className="notification text-white flex gap-1 items-center  rounded-3xl px-2 py-1">
                <span>
                  <BsFillBellFill size={15} />
                </span>
                <span>15</span>
              </button>
              <button className="flex gap-1 items-center text-lg">
                <img src="./avatar.svg" alt="" />
                <p className="flex  items-center px-px">
                  <span>Pixel Warriorz</span>
                  <span>
                    <RiArrowDropDownLine />
                  </span>
                </p>
              </button>
            </div>
          </div>
        </div>
        {dash ? (
          <Dashboard />
        ) : log ? (
          <LogsComponent />
        ) : security ? (
          <DataSecurity />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
