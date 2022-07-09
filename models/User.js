const { Schema, model } = require("mongoose");

// everything here is the schema and models for mongoose that
// reflects the schema from Apollo server's schema
const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: { type: String, unique: true },
    password: String,
    token: String
});

// export this module as a model named 'Message' that 
// uses the messageSchema as its schema
module.exports = model('User', userSchema);