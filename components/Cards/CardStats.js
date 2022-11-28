import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react"


export default function CardStats({
  // statSubtitle,
  // statTitle,
  // statArrow,
  // statPercent,
  // statPercentColor,
  // statDescripiron,
  statIconName,
  statIconColor,
  statNumber,
  statPercentage,
  id,
  iconName,
  requete,
  message,
  number
}) {

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



  const fetchData = async () => {
    try {
      setLoading(true)

      // console.log('Starting FETCH')
      // console.log(requete)
      const response = await axios.get(`http://localhost:3000/api/${requete}`)
      setLoading(false)

      // console.log('Data : ', response.data)
      setData(response.data)
      // console.log(typeof data['Population Annuelle'].slice(-2))
      // console.log(response.data)


    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    // console.log('Component mounted')
    fetchData();
  }, [])


  useEffect(() => {
   document.getElementById(number[0]).textContent = data['Augmentation'] + '%'

    var config = {
      type: "line",
      data: {
        labels: data['Année'],
        datasets: [
          {
            label: 'Population Annuelle',
            backgroundColor: "#fff",
            borderColor: `${data['color-chart']}`,
            data: data['Data'],
            fill: false,
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
          text: "Sales Charts",
          fontColor: "white",
        },
        legend: {
          display: false,
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
              ticks: {
                fontColor: "rgba(255,255,255,.7)",
              },
              display: false,
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
              display: false,
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

    var ctx = document.getElementById(id[0]).getContext("2d");
    window.myLine = new Chart(ctx, config);
  }, [data, windowDimensions]);


  return (
    <div className={`relative bg-green-400 mb-6 flex flex-row ${data['taux']} w-full break-words min-w-0 justify-between items-center rounded-lg`} >
      <div className="flex flex-col rounded-lg p-4">
        <div
          className={
            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-lg " +
            statIconColor
          }
        >
          <img src={iconName} />
        </div>
        <div className="mt-5">
          {/* <p>{typeof data['Population Annuelle'].slice(-1)}</p> */}
          {/* <p className="mb-1 font-bold text-lg">{((parseInt(data['Population Annuelle'].slice(-1)) - parseInt(data['Population Annuelle'].slice(-2))) / parseInt(data['Population Annuelle'].slice(-2))) * 100}</p> */}
          <p id={number[0]}></p>
          <p className='font-semibold'>{message}</p>
        </div>
      </div>
      {/* LE PUTAIN DE TAILWINCSS NE MARCHE PAS !!!!!!!! */}
      <div className="p-2 flex flex-auto justify-center w-full" >
        {/* Chart */}
        < div className="flex w-1/2 h-1/6" >
          <canvas id={id[0]}></canvas>
        </div>
      </div >
    </div >
  )
}
