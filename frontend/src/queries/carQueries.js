import { gql } from "@apollo/client";
const GET_CAR=gql`
query getCar{
    bmws{
        id
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
        const GET_CAR_BY_ID=gql`
        query getCarById($id:ID!){
            bmw(id:$id){
                id
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

        export {GET_CAR,GET_CAR_BY_ID}