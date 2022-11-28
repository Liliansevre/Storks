import React from "react";
import Chart from "chart.js";
import axios from "axios";
import { useState, useEffect } from "react"


const CardBarChart = () => {
  const [data, setData] = useState([])
  const [isLoading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const hasWindow = typeof window !== 'undefined';

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());


  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }


  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);


  // FETCH DATA

  const fetchData = async () => {
    try {
      setLoading(true)

      // console.log('Starting FETCH')
      const response = await axios.get('https://storks.vercel.app/api/prediction/recosagefemme')
      const datas = response.data

      // console.log('Data : ', datas)
      if (datas) setData(datas)
      // console.log(datas)


    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    // console.log('Component mounted')
    fetchData();
  }, [])




  useEffect(() => {
    let config = {
      type: "line",
      data: {
        labels: data['Année'],
        datasets: [
          // {
          //   label: 'Nombre de maternités',
          //   backgroundColor: "#ed64a6",
          //   borderColor: "#ed64a6",
          //   data: data['Nombre de maternités'],
          //   fill: false,
          //   // barThickness: 8,
          //   yAxisID : 'y1',
          //   // stack: "combined"
          // },
          {
            label: 'Nombre RECOMMANDÉ de sage-femmes par établissement',
            backgroundColor: "#ed64b7",
            borderColor: "#ed64b7",
            data: data['Recommandation'],
            fill: false,
            borderWidth : 5,
            yAxisID : 'y1',
            // stack: "combined"
          },
          {
            label: 'Nombre de sage-femmes en Gironde',
            fill: false,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: data['Total'],
            type : "bar",
            yAxisID: 'y2',
            // stack: "combined"
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          point:{
            radius: 0
            }
        },
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              id : "y1",
              display: true,
              position: 'left',
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
              // ticks: {
              //   max: 13,
              //   min: 10
              // }
            },
            {
              id : "y2",
              display: true,
              position: 'right',
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, [data, windowDimensions]);
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                Maternités
              </h6>
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Sage-femmes et nombre de maternités
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardBarChart;
