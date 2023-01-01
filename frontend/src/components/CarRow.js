import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { DELETE_CAR } from "../mutations/carMutation";
import { GET_CAR } from "../queries/carQueries";
export default function CarRow({ car }) {
  const [deleteCar] = useMutation(DELETE_CAR, {
    variables: { id: car.id },
    refetchQueries: [{ query: GET_CAR }],
    // update(cache) {
    //   const data = cache.readQuery({ query: GET_CAR });
    //   console.log(data);
    //   cache.writeQuery({
    //     query: GET_CAR,
    //     data: {
    //       bmws: data.bmws.filter((car) => car.id !== car.id),
    //     },
    //   });
    // }
  });

  return (
    <tr>
      {/* <td>{car.id}</td> */}
      <td>{car.Brand_name}</td>
      <td>{car.IPR}</td>
      <td>{car.Designation}</td>
      <td>{car.Status}</td>
      <td>{car.Number}</td>
      <td>{car.Office}</td>
      <td>{car.Nice_classification}</td>
      <td>{car.Owner}</td>
      <td>
        <button className="
        bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={deleteCar}>Delete</button>
      </td>
      {/* edit */}
      <td>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >
          <Link to={`/update/${car.id}`}>Edit</Link>
    </button>
      </td>
    </tr>
  );
}
