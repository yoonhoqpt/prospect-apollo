// import the apollo-server-lambda library
const { ApolloServer, gql } = require('apollo-server-lambda');

// importing typeDefs and resolvers
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

// importing the mongoose package
const mongoose = require('mongoose');

// MongoDB connection URI
const mongoURI = "mongodb+srv://react-mongodb-connect:prospect-admin@prospect.aik4t.mongodb.net/prospect-networks?retryWrites=true&w=majority";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
});

// initializing connection to the mongoDB database
mongoose.connect(mongoURI, {useNewUrlParser: true})
    .then (() => {
        // if connected to the database, log it in the console
        console.log('Successfully connected to the MongoDB database');        
    })
    // when getting back a response (res) from the server, log it in the console
    .then ((res) => {
        console.log(`Server running`)
    })

exports.graphqlHandler = server.createHandler();