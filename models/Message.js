const { Schema, model } = require("mongoose");

// everything here is the schema and models for mongoose that
// reflects the schema from Apollo server's schema
const messageSchema = new Schema({
    text: String,
    createdAt: String,
    createdBy: String
});

// export this module as a model named 'Message' that 
// uses the messageSchema as its schema
module.exports = model('Message', messageSchema);