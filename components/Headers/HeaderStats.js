import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import CardStatsWithoutChart from "components/Cards/CardStatsWithoutChart.js"

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-blueGray-800 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStatsWithoutChart
                  statSubtitle="TRAFFIC"
                  statTitle="350,897"
                  statArrow="up"
                  statPercent="3.48"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  iconName="/img/alerte.png"
                  statIconColor="bg-black"
                  statNumber="1200"
                  statPercentage="45"
                  id={["1",]}

                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="NEW USERS"
                  statTitle="2,356"
                  statArrow="down"
                  statPercent="3.48"
                  statPercentColor="text-red-500"
                  statDescripiron="Since last week"
                  iconName="/img/population-annuelle.png"
                  requete="populationAnnuelle"
                  message="Poucentage d'augmentation"
                  statIconColor="bg-black"
                  id={["2",]}
                  number = {["5",]}

                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="SALES"
                  statTitle="924"
                  statArrow="down"
                  statPercent="1.10"
                  statPercentColor="text-orange-500"
                  statDescripiron="Since yesterday"
                  iconName="/img/taux-nat.png"
                  requete="tauxNat"
                  message="Taux de natalité"
                  statIconColor="bg-black"
                  id = {["3",]}
                  number = {["6",]}

                />
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <CardStats
                  statSubtitle="PERFORMANCE"
                  statTitle="49,65%"
                  statArrow="up"
                  statPercent="12"
                  statPercentColor="text-emerald-500"
                  statDescripiron="Since last month"
                  iconName="/img/age-moyen.png"
                  requete="agemoyen"
                  message="Age moyen des mères"
                  statIconColor="bg-black"
                  id = {["4",]}
                  number = {["7",]}

                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
