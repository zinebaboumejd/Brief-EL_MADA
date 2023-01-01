import { gql } from "@apollo/client";
const DELETE_CAR=gql`
mutation deleteBmw($id:ID!){
    deleteBmw(id:$id){
       id
        }
        }`

     
        const ADD_CAR=gql
        `mutation addBmw($Brand_name:String!,$IPR:String!,$Designation:String!,$Status:String!,$Number:String!,$Office:String!,$Nice_classification:String!,$Owner:String!){
            addBmw(Brand_name:$Brand_name,IPR:$IPR,Designation:$Designation,Status:$Status,Number:$Number,Office:$Office,Nice_classification:$Nice_classification,Owner:$Owner){
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
       
        export {ADD_CAR, DELETE_CAR}