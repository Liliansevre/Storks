import React from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useState, useEffect } from "react"
import Image from 'next/image'


export default function CardStats({
  statIconColor,
  iconName,
  statNumber,
  statPercentage,
  id
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
      const response = await axios.get('https://storks.vercel.app/api/alertemater')

      // console.log('Data : ', datas)
      console.log(response.data);
      setData(response.data)
      // console.log(data)


    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    // console.log('Component mounted')
    fetchData();
  }, [])

  return (
    <div className="relative bg-red-400 mb-6 flex flex-row w-full break-words min-w-0 bg-white justify-between items-center rounded-lg">
      <div className="flex flex-col rounded-lg p-4">
        <div
          className={
            "text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 rounded-lg " +
            statIconColor
          }
        >

          <img src={iconName}/>
        </div>
        <div className="mt-5">
          <p className="text-3xl font-bold">{data.length}</p>
          <p>Nombre d'alerte</p>
        </div>
      </div>
      <div className = "flex flex-col p-4">
        {data.map(alerte=>{
               return (
                <>
                <div key={alerte.value}>
                  <h1>{alerte.name}</h1>
                  <p className="mb-1 font-semibold">+ {alerte.value}%</p>
               </div>
               </>
               )
        })}

      </div>
      {/* LE PUTAIN DE TAILWINCSS NE MARCHE PAS !!!!!!!! */}
      {/* relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700 */}
      {/* <CardLineChartForCard keyProp={id}/>
              {console.log(<CardLineChartForCard keyProp={id}/>)} */}
    </div>
  );
}
