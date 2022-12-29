import React from "react";
import { useQuery } from "@apollo/client";
import CarRow from "./CarRow";
import { GET_CAR } from "../queries/carQueries";
import Spinner from "./Sprinner";
function Car() {
  const { loading, error, data } = useQuery(GET_CAR);
  if (loading) return <Spinner />;
  if (error) return <p>Error</p>;
  console.log(data);

  return (
    <div>
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
