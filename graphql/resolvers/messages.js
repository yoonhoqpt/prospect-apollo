// import the Message model
const Message = require('../../models/Message');

module.exports = {
    Mutation: {
        // 'messageinput' is defined in typeDefs.js 
        // this async function destructures javascript object
        async createMessage(_, {messageInput: {text, username} }){
            // using the Message mongoose model imported
            const newMessage = new Message({
                text: text,
                createdBy: username,
                createdAt: new Date().toISOString()
            });

            // the response saves the message
            const res = await newMessage.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            }
        }
    },

    Query: {
        // the object 'message' is defined in typeDefs.js
        message: (_, {ID}) => Message.findById(ID)
    }
}