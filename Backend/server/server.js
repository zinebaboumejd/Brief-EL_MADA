const express = require('express');
require('dotenv').config();
const colos=require("colors")
const port=process.env.PORT || 5000
const schema=require('./schema/schema')
const {graphqlHTTP} =require('express-graphql')
const mongoose = require('mongoose');
const app = express();
const connectDB = require('../config/db');

connectDB();

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
// graphiql:process.env.NODE_ENV==='development'

}))

app.listen(port,console.log(`Server running on port ${port}`));

