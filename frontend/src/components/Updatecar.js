import React from 'react'
import { useQuery } from "@apollo/client";
import { GET_CAR_BY_ID } from "../queries/carQueries";
function Updatecar() {
    const { loading, error, data } = useQuery(GET_CAR_BY_ID);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    console.log(data);
    

  return (
    <div>
        Update car
        <div className="mx-auto w-full max-w-[550px] pt-24">
   
           
        
    <form  method="POST" 
    //  onSubmit={(e)=>onSubmit(e)}
    
     >  
   {data.bmws.map((car)=>(
       <div>
           <label for="Brand_name" className="mb-3 block text-base font-medium text-[#07074D]">
            Brand_name
            </label>
            <input
            type="text"
            name="Brand_name"
            id="Brand_name"
            value={car.Brand_name}
            // onChange={(e)=>hendleChange(e)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <label for="IPR" className="mb-3 block text-base font-medium text-[#07074D]">
            IPR
            </label>
            <input
            type="text"
            name="IPR"
            id="IPR"
            value={car.IPR}
            // onChange={(e)=>hendleChange(e)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <label for="Nice_classification" className="mb-3 block text-base font-medium text-[#07074D]">
            Nice_classification
            </label>
            <input
            type="text"
            name="Nice_classification"
            id="Nice_classification"
            value={car.Nice_classification}
            // onChange={(e)=>hendleChange(e)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
         </div>
    ))}

    <button
    type="submit"
    className="w-full py-3 mt-10 bg-[#6A64F1] rounded-md text-white text-lg focus:outline-none hover:bg-[#6A64F1] hover:shadow-none"
    >
    Update
    </button>


    
    </form>
  </div>
         </div>
  )
}

export default Updatecar