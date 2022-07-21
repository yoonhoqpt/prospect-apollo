const messagesResolvers = require('./messages');
const usersResolvers = require('./users');
const postResolvers = require('./posts');

module.exports = {
    Query: {
        ...messagesResolvers.Query,
        ...usersResolvers.Query,
        ...postResolvers.Query,
    },
    Mutation: {
        ...messagesResolvers.Mutation,
        ...usersResolvers.Mutation,
        ...postResolvers.Mutation,
    }
}