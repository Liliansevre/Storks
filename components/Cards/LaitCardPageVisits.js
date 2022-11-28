import React from "react";

// components

export default function CardPageVisits() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 border-0">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
              <h3 className="font-semibold text-base text-blueGray-700">
                Organisation des équipes
              </h3>
            </div>
            <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
              {/* <button
                className="bg-indigo-500 text-white active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
              >
                See all
              </button> */}
            </div>
          </div>
        </div>
        <div className="block w-full overflow-x-auto">
          {/* Projects table */}
          <table className="items-center w-full bg-transparent border-collapse">
            <thead>
              <tr>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Équipe
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Heures effectuées
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Membres
                </th>
                <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Taux d'occupation
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  10-17 JANV
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  120h
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  87,10%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                17-24 JANV
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  124h
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  91,20%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  24-31 JANV
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  117,8h
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-orange-500 mr-4"></i>
                  85,40%
                </td>
              </tr>
              <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  01-07 FEV
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  122h
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-up text-emerald-500 mr-4"></i>
                  89,04%
                </td>
              </tr>
              {/* <tr>
                <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">
                  /argon/profile.html
                </th>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  1,795
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                <div className="flex">
                    <img
                      src="/img/team-1-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow"
                    ></img>
                    <img
                      src="/img/team-2-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-3-800x800.jpg"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                    <img
                      src="/img/team-4-470x470.png"
                      alt="..."
                      className="w-8 h-8 rounded-full border-2 border-blueGray-50 shadow -ml-4"
                    ></img>
                  </div>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <i className="fas fa-arrow-down text-red-500 mr-4"></i>
                  46,53%
                </td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
