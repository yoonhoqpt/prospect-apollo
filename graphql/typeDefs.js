// allows you to write gql in javascript
const {gql} = require('apollo-server-lambda');

// export this module as a schema for the apollo server written in gql
module.exports = gql`
type Message {
    text: String
    createdAt: String
    createdBy: String
}

input MessageInput {
    text: String
    username: String
}

type Query {
    message(id: ID!): Message
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
}
`