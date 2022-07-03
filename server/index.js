const express = require('express');
const colors = require('colors');
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const schema  = require("./schema/schema")
const connectDB = require("./config/db")

const PORT = process.env.PORT || 5900;

const app = express();

//Connect to database
connectDB();

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql:true

}))


app.listen(PORT, console.log('Server running on PORT',PORT))
