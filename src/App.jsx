import "./App.css";
import { BiSolidLockOpenAlt } from "react-icons/bi";
import { IoIosHome } from "react-icons/io";
import { BsBell, BsFillCreditCardFill } from "react-icons/bs";
import { HiWrench } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import { CgMenuGridO } from "react-icons/cg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoDotFill } from "react-icons/go";
import LogsComponent from "./components/Logs";
import { useState } from "react";
import Dashboard from "./components/Dashboard";
import DataSecurity from "./components/DataSecurity";
import { FaNoteSticky, FaUser } from "react-icons/fa6";
import { IoRocketSharp } from "react-icons/io5";
import Auth from "./components/Auth/Auth";

function App() {
  const [dash, setdash] = useState(false);
  const [log, setlog] = useState(false);
  const [security, setsecurity] = useState(false);
  const [other, setother] = useState(false);
  const [profile, setprofile] = useState(false);
  const [signIn, setsignIn] = useState(true);
  const [signup, setsignup] = useState(false);
  return (
    <div className="flex">
      <div className="sidebar   sideANDheaderbg w-[280px] h-screen flex flex-col px-6 ">
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
                  dash ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
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
                  security ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
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
                  log ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
                }`}
              >
                <BsFillCreditCardFill size={18} />
              </span>
              <span>Logs</span>
            </button>
            <button
              className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                other ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
              }`}
            >
              <span
                className={`p-2 rounded-xl ${
                  other ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
                }`}
              >
                <HiWrench size={18} />
              </span>
              <span>RTL</span>
            </button>
          </div>
          <div>
            <p className="text-white text-[13px] my-3 pl-4 ">ACCOUNT PAGES</p>
            <div>
              <button
                className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                  profile ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
                }`}
              >
                <span
                  className={`p-2 rounded-xl ${
                    profile ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
                  }`}
                >
                  <FaUser size={18} />
                </span>
                <span>Profile</span>
              </button>
              <button
                className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                  signIn ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
                }`}
              >
                <span
                  className={`p-2 rounded-xl ${
                    signIn ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
                  }`}
                >
                  <FaNoteSticky
                    size={18}
                    style={{ transform: "rotate(270deg)" }}
                  />
                </span>
                <span>Sign in</span>
              </button>
              <button
                className={`flex items-center text-white gap-4 text-[14px] py-2 rounded-2xl w-full px-3 ${
                  signup ? "nav_btn_bg" : "bg-transparent py-4 rounded-3xl"
                }`}
              >
                <span
                  className={`p-2 rounded-xl ${
                    signup ? "bg-blue-600" : "nav_btn_bg_2 text-blue-600"
                  }`}
                >
                  <IoRocketSharp size={18} />
                </span>
                <span>Sign up</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="main h-screen  w-[87vw]">
        <div className="header  w-full  h-[5.5rem]  text-indigo-300 flex justify-between ">
          <p></p>
          <div className="flex items-center gap-14 pr-20">
            <div className="icons flex gap-10">
              <CiSearch size={30} className="hover:cursor-pointer" />
              <CgMenuGridO size={30} className="hover:cursor-pointer" />
            </div>
            <div className="profile flex gap-12 items-center">
              <button
                className="notification text-blue-600 flex gap-1 items-center  rounded-xl p-4"
                style={{ position: "relative" }}
              >
                <span>
                  <BsBell size={20} />
                </span>
                <span
                  style={{ position: "absolute", right: "2px", top: "2px" }}
                >
                  <GoDotFill className="text-red-700" />
                </span>
              </button>
              <button className="flex gap-3 items-center text-lg">
                <img src="./profile.png" alt="profile" />
                <p className="flex  items-center px-px gap-1">
                  <span>Pixel Warriorz</span>
                  <span>
                    <RiArrowDropDownLine size={30} />
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
        ) : signIn ? (
          <Auth />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
