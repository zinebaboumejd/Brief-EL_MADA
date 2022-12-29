import { gql } from "@apollo/client";
const DELETE_CAR=gql`
mutation deleteBmw($id:ID!){
    deleteBmw(id:$id){
       id
        }
        }`
        export {DELETE_CAR}