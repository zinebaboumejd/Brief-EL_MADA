import React from 'react'
import {gql,useQuery} from '@apollo/client'
import CarRow from './CarRow'
const GET_CAR=gql`
query getClients{
    bmws{
        Brand_name
        IPR
        Designation
        Status
        Number
        Office
        Nice_classification
        Owner
        }
        }`
function Bmw() {
    const {loading,error,data}=useQuery(GET_CAR)
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error</p>
    console.log(data)

  return (
    <div>
        {!loading && !error && (
            <table class="table-auto
            w-full">
                <thead class="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                        <th></th>
                        <th class="p-2">
                            <div class="font-semibold text-left">
Brand_name</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-left">IPR</div>
                        </th>
                        <th class="p-2">
                            <div class="font-semibold text-left">
Designation</div>
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
                    {/* {data.bmws.map((car)=>(
                        <CarRow car={car}/>
                    ))} */}
                    
                    
                </tbody>
            </table>



        ) }
    </div>
  )
}

export default Bmw