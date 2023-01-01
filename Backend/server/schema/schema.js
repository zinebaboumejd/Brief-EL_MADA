const Bmw=require("../models/Bmw.js");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType
} = require("graphql");
//  Bmw type
const BmwType = new GraphQLObjectType({
  name: "Bmw",
  fields: () => ({
    id: { type: GraphQLID },
    Brand_name: { type: GraphQLString },
    IPR: { type: GraphQLString },
    Designation: { type: GraphQLString },
    Status: { type: GraphQLString },
    Number: { type: GraphQLString },
    Office: { type: GraphQLString },
    Nice_classification: { type: GraphQLString },
    Owner: { type: GraphQLString },
  }),
});






const RootQuery = new GraphQLObjectType({
  name: "RoueQueryType",
  fields: {
    bmws: {
      type: new GraphQLList(BmwType),
      resolve(parent, args) {
        return Bmw.find({});
      },
    },
    
    bmw: {
      type: BmwType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Bmw.findById(args.id);
      },
    },


  },
});

// Mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a BMW
    addBmw: {
      type: BmwType,
      args: {
        Brand_name: { type: GraphQLNonNull(GraphQLString) },
        IPR: { type: GraphQLNonNull(GraphQLString) },
        Designation: { type: GraphQLNonNull(GraphQLString) },
        Status: { type: GraphQLNonNull(GraphQLString) },
        Number: { type: GraphQLNonNull(GraphQLString) },
        Office: { type: GraphQLNonNull(GraphQLString) },
        Nice_classification: { type: GraphQLNonNull(GraphQLString) },
        Owner: { type: GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const bmw = new Bmw({
          Brand_name: args.Brand_name,
          IPR: args.IPR,
          Designation: args.Designation,
          Status: args.Status,
          Number: args.Number,
          Office: args.Office,
          Nice_classification: args.Nice_classification,
          Owner: args.Owner,
        });

        return bmw.save();

      },
    },
    
    // Update a BMW
    updateBmw: {
      type: BmwType,
      args: {
        id: { type: GraphQLNonNull(GraphQLID) },
        Brand_name: { type: GraphQLString },
        IPR: { type: GraphQLString },
        Designation: { type: GraphQLString },
        Status: { type: GraphQLString },
        Number: { type: GraphQLString },
        Office: { type: GraphQLString },
        Nice_classification: { type: GraphQLString },
        Owner: { type: GraphQLString},
      },
      resolve(parent, args) {
        return Bmw.findByIdAndUpdate(
          args.id,
          {
            Brand_name: args.Brand_name,
            IPR: args.IPR,
            Designation: args.Designation,
            Status: args.Status,
            Number: args.Number,
            Office: args.Office,
            Nice_classification: args.Nice_classification,
            Owner: args.Owner,
          },
          { new: true }
        );
      },
    },
   
  // Delete a BMW
  deleteBmw: {
    type: BmwType,
    args: {
      id: { type: GraphQLNonNull(GraphQLID) },
    },
    resolve(parent, args) {
      return Bmw.findByIdAndDelete(args.id);
    },
  },
  
  },
});
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation,
});