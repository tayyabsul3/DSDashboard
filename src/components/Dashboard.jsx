import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import DasCards from "./Reusables/DasCards";
import { Graph } from "./Graphs/Graph";
import { Menu } from "lucide-react";
import { BChart } from "./Graphs/Barchart";
import EnviCard from "./Reusables/EnviCard";

const Dashboard = () => {
  return (
    <div className="transition-all duration-300 ease-in-out body py-5 px-16 flex flex-col gap-5 h-[85vh] overflow-y-auto">
      <h1 className="text-white text-3xl  tracking-wide">Dashboard</h1>
      <div className="flex flex-col gap-5">
        {/* cards */}
        <div className="flex items-center gap-5">
          <DasCards />
          <DasCards />
          <DasCards />
          <DasCards />
        </div>
        {/* graphs */}
        <div className="flex gap-5 w-full">
          <div className="flex flex-col gap-5 flex-[0.7]">
            <div className="flex-[0.8]">
              <Graph />
            </div>
            <div className="sidegraphs flex gap-5 w-full flex-1s">
              <div className="flex-[0.5]">
                <Accordion
                  type="single"
                  collapsible
                  className="text-white w-full px-5 flex flex-col gap-1  py-5 rounded-2xl text-[12px] border-[1px] border-blue-500 "
                  style={{ backgroundColor: "rgba(55, 52, 111, 1)" }}
                >
                  <div className="flex justify-between text-2xl mb-2 px-5">
                    <h1>Learn to Use</h1>
                    <Menu />
                  </div>
                  <AccordionItem
                    value="item-1"
                    style={{ borderBottom: "none" }}
                    className="border-[1px] rounded-2xl m-0 border-blue-500  px-2  mb-1"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      What are quick Safetica NXT improvement?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-2"
                    style={{ borderBottom: "none" }}
                    className="border-[1px] rounded-2xl m-0 border-blue-500  px-4 mb-1"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      Optimize Safetica NXT?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem
                    value="item-3"
                    style={{ borderBottom: "none" }}
                    className="border-[1px] rounded-2xl m-0 border-blue-500  px-4 mb-1"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      Maintaining company dynamism?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem
                    value="item-4"
                    style={{ borderBottom: "none" }}
                    className="border-[1px] rounded-2xl m-0 border-blue-500  px-4 mb-1"
                  >
                    <AccordionTrigger className="hover:no-underline">
                      Sustaining company dynamism?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              <div
                className="text-white flex-[0.5] px-5 flex flex-col gap-1  py-5 rounded-2xl text-[12px] border-[1px] border-blue-500 "
                style={{ backgroundColor: "rgba(55, 52, 111, 1)" }}
              >
                <div>
                  <div className="flex justify-between flex-col gap-1 text-2xl mb-2">
                    <div className=" flex justify-between w-full items-center">
                      <h1>Get One-time Report</h1>
                      <Menu />
                    </div>
                    <p className="text-sm">1 June 2024 - 30 June 2024</p>
                  </div>
                  <div>
                    <BChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-fit h-full rounded-2xl p-5 flex-[0.3]"
            style={{ backgroundColor: "rgba(55, 52, 111, 1)" }}
          >
            <div className=" flex justify-between w-full items-center px-5 mb-5 text-white text-xl">
              <h1>Enviromental Settings</h1>
              <Menu />
            </div>
            <div className="cards flex flex-col gap-5">
              <EnviCard />
              <EnviCard />
              <EnviCard />
              <EnviCard />
            </div>
          </div>
        </div>
      </div>

      {/* <Graph /> */}
    </div>
  );
};

export default Dashboard;
