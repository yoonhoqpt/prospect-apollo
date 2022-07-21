const { Schema, model } = require("mongoose");

// everything here is the schema and models for mongoose that
// reflects the schema from Apollo server's schema
const postSchema = new Schema({
    companyName: String,
    jobTitle: String,
    location: String,
    remote: String,
    salaryMin: Number,
    salaryMax: Number,    
    ExperienceLevel: String,
    interviewNum: Number,
    jobDesc: String,
});

// export this module as a model named 'Message' that 
// uses the messageSchema as its schema
module.exports = model('Post', postSchema);