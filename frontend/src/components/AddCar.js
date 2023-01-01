import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import {ADD_CAR} from "../mutations/carMutation"
import { useQuery } from "@apollo/client";
import { Navigate } from "react-router-dom";

function AddCar() {
  const [data, setData] = useState({
    Brand_name: "",
    Designation: "",
    IPR: "",
    Number: "",
    Office: "",
    Nice_classification: "",
    Owner: "",
    Status: "",
  });

  const hendleChange = (e) => {
const newdata={...data};
newdata[e.target.id]=e.target.value;
setData(newdata)
console.log(newdata)
  };
 
  // addcar 
  const [addCar] = useMutation(ADD_CAR);
 
  const onSubmit = (e) => {
    e.preventDefault();
    
    addCar({
      variables: {
        Brand_name: data.Brand_name,
        Designation: data.Designation,
        IPR: data.IPR,
        Number: data.Number,
        Office: data.Office,
        Nice_classification: data.Nice_classification,
        Owner: data.Owner,
        Status: data.Status,
      },
    });
  
  };

  

  return (
    <div>
<div className="mx-auto w-full max-w-[550px] pt-24">
    <form  method="POST" onSubmit={(e)=>onSubmit(e)}>
    
      <div className="mb-3">
        <label
          for="Brand_name"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
         Brand_name
        </label>
        <input
          type="text"
          name="Brand_name"
          id="Brand_name"
          onChange={(e)=>hendleChange(e)}

          placeholder="Brand_name"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-3">
        <label
          for="IPR"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
        IPR
        </label>
        <input
          type="IPR"
          name="IPR"
          id="IPR"
          onChange={(e)=>hendleChange(e)}
          placeholder="IRP"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-3">
        <label
          for="Nice_classification"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Designation
        </label>
        <input
          type="text"
          name="Nice_classification"
          id="Nice_classification"
          onChange={(e)=>hendleChange(e)}
          placeholder="Nice_classification"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div className="mb-3">
        <label
          for="Designation"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Designation
        </label>
        <input
          type="text"
          name="Designation"
          id="Designation"
          onChange={(e)=>hendleChange(e)}
          placeholder="Designation"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-3">
        <label
          for="Status"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Status
        </label>
        <input
          type="text"
          name="Status"
          onChange={(e)=>hendleChange(e)}
          id="Status"
          placeholder="Status"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-3">
        <label
          for="Number"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Number
        </label>
        <input
          type="text"
          name="Number"
          id="Number"
          placeholder="Number"
          onChange={(e)=>hendleChange(e)}
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="mb-3">
        <label
          for="Office"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Office
        </label>
        <input
          type="text"
          name="Office"
          id="Office"
          onChange={(e)=>hendleChange(e)}
          placeholder="Office"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
    
      <div className="mb-3">
        <label
          for="Owner"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          Owner
        </label>
        <input
          type="text"
          name="Owner"
          id="Owner"
          onChange={(e)=>hendleChange(e)}
          placeholder="Owner"
          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>

      <div>
        <button

        type="submit"
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>

    </div>
  );
}

export default AddCar;
