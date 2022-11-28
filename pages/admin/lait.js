import React from "react";
import axios from "axios";

// components

import LaitCardLineChart from "components/Cards/LaitCardLineChart.js";
import LaitCardBarChart from "components/Cards/LaitCardBarChart.js";
import LaitCardPageVisits from "components/Cards/LaitCardPageVisits.js";
import LaitCardSocialTraffic from "components/Cards/LaitCardSocialTraffic.js";

// layout for page

import Admin from "layouts/Admin.js";


export default function Dashboardlait() {

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          <LaitCardLineChart />
        </div>
        <div className="w-full xl:w-4/12 px-4">
          <LaitCardBarChart />
        </div>
      </div>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
          {/* <LaitCardPageVisits /> */}
        </div>
        <div className="w-full px-4">
          <LaitCardSocialTraffic />
        </div>
      </div>
    </>
  );
}

Dashboardlait.layout = Admin;
