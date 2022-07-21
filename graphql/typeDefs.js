// allows you to write gql in javascript
const {gql} = require('apollo-server-lambda');

// export this module as a schema for the apollo server written in gql
module.exports = gql`
type Message {
    text: String
    createdAt: String
    createdBy: String
}
""" 
the schema "User" refers to the candidate account
"""
type User {
    firstName: String
    lastName: String
    email: String
    password: String
    token: String
}

type Post {
    companyName: String
    jobTitle: String
    location: String
    remote: String
    salaryMin: Int
    salaryMax: Int    
    ExperienceLevel: String
    interviewNum: Int
    jobDesc: String
}

input MessageInput {
    text: String
    username: String
}

input RegisterInput {
    firstName: String
    lastName: String
    email: String
    password: String
}

input LoginInput {
    email: String
    password: String
}

input PostInput {
    companyName: String
    jobTitle: String
    location: String
    remote: String
    salaryMin: Int
    salaryMax: Int    
    ExperienceLevel: String
    interviewNum: Int
    jobDesc: String
}

type Query {
    message(id: ID!): Message
    user(id: ID!): User
    post(id: ID!): Post
}

type Mutation {
    createMessage(messageInput: MessageInput): Message!
    registerUser(registerInput: RegisterInput): User
    loginUser(loginInput: LoginInput): User
    createPost(postInput: PostInput): Post!
}
`