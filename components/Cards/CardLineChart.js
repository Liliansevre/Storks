import React from "react";
import Chart from "chart.js";
import axios from "axios";
import { useState, useEffect } from "react"

const CardLineChart = () => {
  const [data, setData] = useState([])
  const [dataPredi, setDataPredi] = useState([])
  const [dataTotal, setDataTotal] = useState([])

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

  // useEffect(() => {
  //   if (data, dataPredi){

  //   }
  // })

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [hasWindow]);



  ///// FETCH DATA NAISSANCES

  // FETCH NAISSANCES


  const fetchDataNaissances = async () => {
    try {
      setLoading(true)

      // console.log('Starting FETCH')
      const response = await axios.get('https://storks.vercel.app/api/nbnaissances')
      const datas = response.data

      // console.log('Data : ', datas)
      if (datas) setData(datas)
      // console.log(datas)

      const predi = await axios.get('https://storks.vercel.app/api/prediction/predinaissance/')
      const dataprediction = predi.data

      if (dataprediction) {
        // console.log('ok');
        setDataPredi(dataprediction)
        // console.log('done');
        // console.log([...data['Année'],...dataPredi['Naissances par an']])
      //   setDataTotal({
      //   'Année' : [...data['Année'],...dataPredi['Année']],
      //   'Naissances par an' : [...data['Naissances par an'],...dataPredi['Naissances par an']]
      // })
      // console.log(dataTotal); 
      }



    } catch (err) {
      setError(err)
    }
  }


  useEffect(() => {
    // console.log('Component mounted')
    fetchDataNaissances();
  }, [])




  useEffect(async () => {
    // console.log('Component mounted')
    // await fetchData();
    // console.log(data);
    var config = {
      type: "line",
      data: {
        labels: dataPredi['Année'],
        datasets: [
          {
            label: 'Prédiction', 
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: dataPredi['Naissances par an'],
            borderDash: [4, 4],
            borderWidth : 5,
            fill: false,
            order : 2
          },
          {
            label: 'Naissances par an',
            backgroundColor: "#fff",
            borderColor: "#fff",
            data: data['Naissances par an'],
            borderWidth : 5,
            fill: false,
            order: 1,
          }
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
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          display: true,
          labels: {
            fontColor: "white",
          },
          align: "end",
          position: "bottom",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        scales: {
          xAxes: [
            {
              offset: true,
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Month",
                fontColor: "white",
              },
              gridLines: {
                display: false,
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(0, 0, 0, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
                fontColor: "white",
              },
              gridLines: {
                borderDash: [3],
                borderDashOffset: [3],
                drawBorder: false,
                color: "rgba(255, 255, 255, 0.15)",
                zeroLineColor: "rgba(33, 37, 41, 0)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    // console.log(data);
    // console.log(dataPredi);
    // console.log(dataTotal);
    
    var ctx = document.getElementById("line-chart").getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [data, dataPredi, dataTotal, windowDimensions]);
  return (
    <>
      {/* {data.map(data => <h1 key ={data.name}>{data.name}</h1>)} */}
      {/* <h1>{data}</h1> */}

      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Vue globale
              </h6>
              <h2 className="text-white text-xl font-semibold">Nombre de naissances</h2>
            </div>
          </div>
        </div>
        <div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas id="line-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  );
}



export default CardLineChart;