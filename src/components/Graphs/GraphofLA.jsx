"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { date: "2024-04-05", desktop: 3, mobile: 290 },
  { date: "2024-04-06", desktop: 1, mobile: 340 },
  { date: "2024-04-07", desktop: 5, mobile: 180 },
  { date: "2024-04-08", desktop: 2, mobile: 320 },
  { date: "2024-04-09", desktop: 4, mobile: 110 },
  { date: "2024-04-10", desktop: 1, mobile: 190 },
  { date: "2024-04-11", desktop: 4, mobile: 350 },
  { date: "2024-04-12", desktop: 2, mobile: 210 },
  { date: "2024-04-13", desktop: 2, mobile: 380 },
  { date: "2024-04-14", desktop: 5, mobile: 220 },
  { date: "2024-04-15", desktop: 3, mobile: 170 },
  { date: "2024-04-08", desktop: 2, mobile: 320 },
  { date: "2024-04-09", desktop: 4, mobile: 110 },
  { date: "2024-04-10", desktop: 1, mobile: 190 },
  { date: "2024-04-11", desktop: 4, mobile: 350 },
  { date: "2024-04-12", desktop: 2, mobile: 210 },
  { date: "2024-04-13", desktop: 2, mobile: 380 },
  { date: "2024-04-14", desktop: 5, mobile: 220 },
  { date: "2024-04-15", desktop: 3, mobile: 170 },
  { date: "2024-04-01", desktop: 2, mobile: 150 },
  { date: "2024-04-02", desktop: 1, mobile: 180 },
  { date: "2024-04-03", desktop: 3, mobile: 120 },
  { date: "2024-04-04", desktop: 2, mobile: 260 },
  { date: "2024-04-05", desktop: 3, mobile: 290 },
  { date: "2024-04-06", desktop: 1, mobile: 340 },
  { date: "2024-04-07", desktop: 5, mobile: 180 },
  { date: "2024-04-08", desktop: 2, mobile: 320 },
  { date: "2024-04-02", desktop: 1, mobile: 180 },
  { date: "2024-04-03", desktop: 3, mobile: 120 },
  { date: "2024-04-04", desktop: 2, mobile: 260 },
];

const chartConfig = {
  views: {
    label: "Logs",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

const desktopValues = chartData.map((data) => data.desktop);
const minDesktop = Math.min(...desktopValues);
const maxDesktop = Math.max(...desktopValues);
export function GraphofLA() {
  return (
    <Card className="bg-transparent text-white border-none linear_g_1 rounded-2xl px-5">
      <CardHeader className="flex flex-col items-stretch space-y-0 p-0 sm:flex-row">
        <div className="flex flex-1  flex-col justify-center gap-2 px-6 py-5 sm:py-6">
          <CardTitle className="font-normal">Logs Viewer</CardTitle>
          <CardDescription>{new Date().toLocaleString()}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="px-2 sm:p-6">
        <ChartContainer config={chartConfig} className="h-[10rem] w-full ">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient id="colorMobile" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#1A8299" />
                <stop offset="100%" stopColor="#2CD9FF" />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} strokeDasharray="2 5" />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={true}
              tickMargin={8}
              minTickGap={32}
              tickCount={11}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }}
            />
            <YAxis
              dataKey="desktop"
              tickLine={true}
              axisLine={true}
              tickMargin={8}
              domain={[minDesktop, maxDesktop]}
              ticks={[0, 1, 2, 3, 4]}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="tooltip-content w-[150px] bg-slate-700 text-white" // Set background to black and text to white
                  nameKey="views"
                  labelFormatter={(value) => {
                    return value;
                  }}
                />
              }
            />
            <Bar
              dataKey={"desktop"}
              fill="url(#colorMobile)"
              radius={6}
              barSize={30}
              className="hover:bg-transparent"
              onMouseOver={(e) => {
                e.target.style.fill = "transparent";
              }}
              onMouseOut={(e) => {
                e.target.style.fill = "url(#colorMobile)";
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

// "use client";

// import * as React from "react";
// import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
// } from "@/components/ui/chart";
// const chartData = [
//   { date: "2024-04-01", desktop: 2, mobile: 150 },
//   { date: "2024-04-02", desktop: 1, mobile: 180 },
//   { date: "2024-04-03", desktop: 3, mobile: 120 },
//   { date: "2024-04-04", desktop: 2, mobile: 260 },
//   { date: "2024-04-05", desktop: 3, mobile: 290 },
//   { date: "2024-04-06", desktop: 1, mobile: 340 },
//   { date: "2024-04-07", desktop: 5, mobile: 180 },
//   { date: "2024-04-08", desktop: 2, mobile: 320 },
//   { date: "2024-04-09", desktop: 4, mobile: 110 },
//   { date: "2024-04-10", desktop: 1, mobile: 190 },
//   { date: "2024-04-11", desktop: 4, mobile: 350 },
//   { date: "2024-04-12", desktop: 2, mobile: 210 },
//   { date: "2024-04-13", desktop: 2, mobile: 380 },
//   { date: "2024-04-14", desktop: 5, mobile: 220 },
//   { date: "2024-04-15", desktop: 3, mobile: 170 },
//   { date: "2024-04-04", desktop: 2, mobile: 260 },

//   { date: "2024-04-10", desktop: 1, mobile: 190 },
//   { date: "2024-04-11", desktop: 4, mobile: 350 },
//   { date: "2024-04-12", desktop: 2, mobile: 210 },
//   { date: "2024-04-13", desktop: 2, mobile: 380 },
//   { date: "2024-04-14", desktop: 5, mobile: 220 },
// ];

// const chartConfig = {
//   views: {
//     label: "logs",
//     color: "#1A8299s",
//   },
//   desktop: {
//     label: "Desktop",
//     color: "white",
//   },
// };

// export function GraphofLA() {
//   // background: linear-gradient(180deg, #2CD9FF 0%, #1A8299 100%);

//   return (
//     <Card className="bg-transparent text-white border-none linear_g_1 rounded-2xl p-5">
//       <CardHeader className="flex flex-col items-stretch space-y-0  p-0 sm:flex-row">
//         <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
//           <CardTitle>Logs</CardTitle>
//           <CardDescription>{Date.now()}</CardDescription>
//         </div>
//       </CardHeader>

//       <CardContent className="px-2 sm:p-6">
//         <ChartContainer config={chartConfig} className="h-[10rem] w-full">
//           <BarChart
//             accessibilityLayer
//             data={chartData}
//             margin={{
//               left: 12,
//               right: 12,
//             }}
//           >
//             <defs>
//               <linearGradient id="colorMobile" x1="0" y1="0" x2="1" y2="0">
//                 <stop offset="0%" stopColor="#1A8299" />
//                 <stop offset="100%" stopColor="#2CD9FF" />
//               </linearGradient>
//             </defs>
//             <CartesianGrid vertical={false} />
//             <XAxis
//               dataKey="date"
//               tickLine={false}
//               axisLine={false}
//               tickMargin={8}
//               minTickGap={32}
//               tickCount={11}
//               tickFormatter={(value) => {
//                 const date = new Date(value);
//                 return date.toLocaleDateString("en-US", {
//                   month: "short",
//                   day: "numeric",
//                 });
//               }}
//             />
//             <YAxis
//               dataKey="desktop"
//               tickLine={true}
//               axisLine={true}
//               tickMargin={8}
//               tickCount={2}
//               tickFormatter={(value) => value}
//             />
//             <ChartTooltip
//               content={
//                 <ChartTooltipContent
//                   className="w-[150px] bg-white text-black"
//                   nameKey="views"
//                   labelFormatter={(value) => {
//                     return value;
//                   }}
//                 />
//               }
//             />
//             <Bar
//               dataKey={"desktop"}
//               fill="url(#colorMobile)"
//               radius={6}
//               barSize={40}
//               className="hover:bg-transparent"
//             />
//           </BarChart>
//         </ChartContainer>
//       </CardContent>
//     </Card>
//   );
// }
