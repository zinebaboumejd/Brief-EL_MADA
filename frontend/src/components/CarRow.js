import React from 'react'

import {FaTrash} from 'react-icons/fa'

function CarRow({car}) {
  return (
    <div>
<tr>
                            <td class="p-2">
                                <input type="checkbox" class="w-5 h-5" value="id-1" />
                            </td>
                            <td class="p-2">
                                <div class="font-medium text-gray-800">
                                    {car.Brand_name}
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="text-left">{car.IPR}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-left font-medium text-green-500">
                                    {car.Designation}
                                </div>
                            </td>
                            <td class="p-2">
                                <div class="text-center">{car.Status}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-center">{car.Number}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-center">{car.Office}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-center">{car.Nice_classification}</div>
                            </td>
                            <td class="p-2">
                                <div class="text-center">{car.Owner}</div>
                            </td>
                           </tr>
                           <td>
                                 <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    <FaTrash/>
                                    </button>
                           </td>
    </div>
  )
}

export default CarRow