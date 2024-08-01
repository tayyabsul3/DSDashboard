import React, { useState } from "react";
import { LuFilter } from "react-icons/lu";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { GraphofLA } from "./Graphs/GraphofLA";
import { BsSearch } from "react-icons/bs";

import { PlusCircle } from "lucide-react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropright,
  IoMdCloseCircle,
  IoMdCloseCircleOutline,
} from "react-icons/io";
import { FaGreaterThan, FaLessThan } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import LogStatus from "./Reusables/LogStatus";
const LogsAnalysis = () => {
  const [isLogTypeOpen, setIsLogTypeOpen] = useState(false);
  const [levelOPen, setlevelOPen] = useState(true);

  const [isNodeNameOpen, setIsNodeNameOpen] = useState(false);
  const [isIpAddressOpen, setIsIpAddressOpen] = useState(false);
  const [isMachineTypeOpen, setIsMachineTypeOpen] = useState(false);
  const [isVendorOpen, setIsVendorOpen] = useState(false);
  return (
    <div className="body py-5 px-16 flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-3xl  mt-5">Logs Analysis</h1>

      <div className="graphs flex flex-col gap-5">
        <div className="flex-1">
          {/* <Graphlogs /> */}
          <GraphofLA />
        </div>
      </div>

      {/* Middle section of Fiilters */}

      <div className="linear_g_1 p-2 px-5 text-white flex items-center rounded-2xl gap-2">
        <h1 className="text-2xl">Filters :(3)</h1>
        <p className="bg-gray-700 p-2 px-5 rounded-lg  text-lg">Level</p>
        <button className="text-lg flex gap-2 items-center text-green-500  border-[1px]  border-green-500 py-1 px-6 rounded-xl">
          <span>Debug</span>
          <IoMdCloseCircleOutline />
        </button>
        <button className="text-lg flex gap-2 items-center text-blue-500  border-[1px]  border-blue-500 py-1 px-6 rounded-xl">
          <span>Alert</span>
          <IoMdCloseCircleOutline />
        </button>
        {/* <LogStatus status={}/> */}

        <button className="text-lg flex gap-2 items-center text-purple-500  border-[1px]  border-purple-500 py-1 px-6 rounded-xl">
          <span>Error</span>
          <IoMdCloseCircleOutline />
        </button>
      </div>

      {/* Table and main filters */}

      <div className=" flex gap-5">
        {/* MAin filters */}
        <div className="flex-[0.2] flex flex-col gap-3 linear_g_1 text-white p-5 rounded-2xl">
          <div className="flex gap-2 ">
            <LuFilter size={30} />
            <h1 className="text-2xl">Filter</h1>
          </div>
          <div className="search flex gap-2 w-full px-2 py-2 border-blue-950 text-gray-500 border-2 rounded-xl items-center">
            <input
              type="text"
              className="bg-transparent px-2 text-medium  outline-none border-none"
              placeholder="Search"
            />
            <BsSearch size={20} />
          </div>
          <div className="filters text-blue-100">
            <div className="w-64 p-4 ">
              <div className="mb-4">
                <h2
                  className="text-xl  flex items-center gap-5  cursor-pointer"
                  onClick={() => setIsLogTypeOpen(!isLogTypeOpen)}
                >
                  {isLogTypeOpen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  Log Type (1)
                </h2>
                {isLogTypeOpen && (
                  <div className="mt-2 w-[60%] whitespace-nowrap mx-auto  animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox " />
                      <span className="ml-2">Alert</span>
                      <span className="ml-auto text-sm ">12</span>
                    </label>
                    <label className="flex items-center mt-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked
                      />
                      <span className="ml-2">Debug</span>
                      <span className="ml-auto text-sm ">9</span>
                    </label>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl  flex items-center gap-5  cursor-pointer"
                  onClick={() => setlevelOPen(!levelOPen)}
                >
                  {levelOPen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  Level (9)
                </h2>
                {levelOPen && (
                  <div className="mt-2 w-[60%] whitespace-nowrap mx-auto  animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Alert</span>
                      <span className="ml-auto text-sm ">12</span>
                    </label>
                    <label className="flex items-center mt-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Debug</span>
                      <span className="ml-auto text-sm ">9</span>
                    </label>
                    <label className="flex items-center mt-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Emergency</span>
                      <span className="ml-auto text-sm ">9</span>
                    </label>
                    <label className="flex items-center mt-2">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Error</span>
                      <span className="ml-auto text-sm ">11</span>
                    </label>
                    <button className="mt-2 w-[60%] whitespace-nowrap  animate-accordion-down items-center gap-1 cursor-pointer text-blue-50 flex text-sm">
                      <span>
                        <PlusCircle size={15} />
                      </span>
                      <span>Show more</span>
                    </button>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl flex items-center gap-5 cursor-pointer"
                  onClick={() => setIsNodeNameOpen(!isNodeNameOpen)}
                >
                  {isNodeNameOpen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  Node Name (1){" "}
                </h2>
                {isNodeNameOpen && (
                  <div className="mt-2 w-[60%] whitespace-nowrap mx-auto animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">dev-aus-rmat-01</span>
                    </label>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl flex items-center gap-5 cursor-pointer"
                  onClick={() => setIsIpAddressOpen(!isIpAddressOpen)}
                >
                  {isIpAddressOpen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  IP Address (1){" "}
                </h2>
                {isIpAddressOpen && (
                  <div className="mt-2 w-[60%] whitespace-nowrap mx-auto animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">192.168.1.1</span>
                    </label>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl flex items-center gap-5 cursor-pointer"
                  onClick={() => setIsMachineTypeOpen(!isMachineTypeOpen)}
                >
                  {isMachineTypeOpen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  Machine Type (1){" "}
                </h2>
                {isMachineTypeOpen && (
                  <div className="mt-2 w-[60%] whitespace-nowrap mx-auto animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Server</span>
                    </label>
                  </div>
                )}
              </div>
              <div className="mb-4">
                <h2
                  className="text-xl flex items-center gap-5  cursor-pointer"
                  onClick={() => setIsVendorOpen(!isVendorOpen)}
                >
                  {isVendorOpen ? (
                    <IoMdArrowDropdown size={22} />
                  ) : (
                    <IoMdArrowDropright size={22} />
                  )}
                  Vendor (1){" "}
                </h2>
                {isVendorOpen && (
                  <div className="mt-2 w-[60%]  mx-auto animate-accordion-down">
                    <label className="flex items-center">
                      <input type="checkbox" className="form-checkbox" />
                      <span className="ml-2">Cisco</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Table */}

        <div className="linear_g_1 flex-[0.8] table p-5 rounded-2xl">
          <Table className="text-gray-300">
            <TableHeader>
              <TableRow className="border-b-gray-400 hover:bg-transparent">
                <TableHead className="text-gray-200">Date and Time</TableHead>
                <TableHead className="text-gray-200">Source</TableHead>
                <TableHead className="text-gray-200">
                  <div className="search flex gap-2  justify-between w-full px-4 py-4 mb-2 border-blue-950 text-gray-500 border-2 rounded-xl items-center">
                    <input
                      type="text"
                      className="bg-transparent px-2 text-medium  outline-none border-none"
                      placeholder="Search by keyword"
                    />
                    <BsSearch size={20} />
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-b-gray-600 hover:bg-gray-800">
                <TableCell>
                  <div>
                    <p>10/6/13</p>
                    <p>03:48 am</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>dev-aus-rmat-01</p>
                    <p>
                      SyslogGen %ASA-3-613004: Internal error: memory allocation
                      failure
                    </p>
                  </div>
                </TableCell>
                <TableCell className="flex  w-full">
                  <div className="flex items-center gap-5 mx-auto">
                    <button className="text-lg text-blue-500  border-[1px]  border-blue-500 py-1 px-6 rounded-xl">
                      Alert
                    </button>
                    <FaGreaterThan size={15} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b-gray-600 hover:bg-gray-800">
                <TableCell>
                  <div>
                    <p>10/6/13</p>
                    <p>03:48 am</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>dev-aus-rmat-01</p>
                    <p>
                      SyslogGen %ASA-3-613004: Internal error: memory allocation
                      failure
                    </p>
                  </div>
                </TableCell>
                <TableCell className="flex  w-full">
                  <div className="flex items-center gap-5 mx-auto">
                    <button className="text-lg text-green-500  border-[1px]  border-green-500 py-1 px-6 rounded-xl">
                      Debug
                    </button>
                    <FaGreaterThan size={15} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b-gray-600 hover:bg-gray-800">
                <TableCell>
                  <div>
                    <p>10/6/13</p>
                    <p>03:48 am</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>dev-aus-rmat-01</p>
                    <p>
                      SyslogGen %ASA-3-613004: Internal error: memory allocation
                      failure
                    </p>
                  </div>
                </TableCell>
                <TableCell className="flex  w-full">
                  <div className="flex items-center gap-5 mx-auto">
                    <button className="text-lg text-purple-500  border-[1px]  border-purple-500 py-1 px-6 rounded-xl">
                      Error
                    </button>
                    <FaGreaterThan size={15} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b-gray-600 hover:bg-gray-800">
                <TableCell>
                  <div>
                    <p>10/6/13</p>
                    <p>03:48 am</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>dev-aus-rmat-01</p>
                    <p>
                      SyslogGen %ASA-3-613004: Internal error: memory allocation
                      failure
                    </p>
                  </div>
                </TableCell>
                <TableCell className="flex  w-full">
                  <div className="flex items-center gap-5 mx-auto">
                    <button className="text-lg text-blue-500  border-[1px]  border-blue-500 py-1 px-6 rounded-xl">
                      Alert
                    </button>
                    <FaGreaterThan size={15} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b-gray-600 hover:bg-gray-800">
                <TableCell>
                  <div>
                    <p>10/6/13</p>
                    <p>03:48 am</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>dev-aus-rmat-01</p>
                    <p>
                      SyslogGen %ASA-3-613004: Internal error: memory allocation
                      failure
                    </p>
                  </div>
                </TableCell>
                <TableCell className="flex  w-full">
                  <div className="flex items-center gap-5 mx-auto">
                    <button className="text-lg text-purple-500  border-[1px]  border-purple-500 py-1 px-6 rounded-xl">
                      Error
                    </button>
                    <FaGreaterThan size={15} />
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="border-b-gray-600 hover:bg-gray-800">
                <TableCell>
                  <div>
                    <p>10/6/13</p>
                    <p>03:48 am</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>dev-aus-rmat-01</p>
                    <p>
                      SyslogGen %ASA-3-613004: Internal error: memory allocation
                      failure
                    </p>
                  </div>
                </TableCell>
                <TableCell className="flex  w-full">
                  <div className="flex items-center gap-5 mx-auto">
                    <button className="text-lg text-green-500  border-[1px]  border-green-500 py-1 px-6 rounded-xl">
                      Debug
                    </button>
                    <FaGreaterThan size={15} />
                  </div>
                </TableCell>
              </TableRow>

              {/* Add more rows as needed */}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default LogsAnalysis;
