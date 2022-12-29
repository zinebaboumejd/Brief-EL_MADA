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
    <div>
         <button

        type="button"
        class="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
      >
     
          <a href="/addcar">
            <FaUser className='icon' />
          <div>Add  Car</div>
            </a>
           
            
     
       
      </button>
      {!loading && !error && (
        <table class="table-auto  items-center">
          <thead class="text-xs font-semibold uppercase text-gray-800 bg-red-100">
            <tr>
              
              <th class="p-2">
                <div class="font-semibold text-left">Brand_name</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">IPR</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-left">Designation</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Status</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Number</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Office</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Nice_classification</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Owner</div>
              </th>
              <th class="p-2">
                <div class="font-semibold text-center">Action</div>
              </th>
            </tr>
          </thead>
          <tbody class="text-sm divide-y divide-gray-100">
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
