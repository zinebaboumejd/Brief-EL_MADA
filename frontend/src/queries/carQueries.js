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
        export {GET_CAR}