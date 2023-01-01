import React from "react";
import { useQuery } from "@apollo/client";
import CarRow from "./CarRow";
import { GET_CAR } from "../queries/carQueries";
import Spinner from "./Sprinner";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
function Car() {
  const { loading, error, data } = useQuery(GET_CAR);
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  console.log(data);

  return (
    <div className="pt-24 container ">
         <button
        type="button"
        className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
     
          <a href="/add">
            <FaUser className='icon' />
          <div>Add  Car</div>
            </a> 
      </button>
      {!loading && !error && (
        <table className="table-auto  items-center">
          <thead className="text-xs font-semibold uppercase text-gray-800 bg-red-100">
            <tr>
              
              <th className="p-2">
                <div className="font-semibold text-left">Brand_name</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">IPR</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-left">Designation</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Status</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Number</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Office</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Nice_classNameification</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Owner</div>
              </th>
              <th className="p-2">
                <div className="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-gray-100">
            {data.bmws.map((car) => (
              <CarRow key={car.id} car={car} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Car;
