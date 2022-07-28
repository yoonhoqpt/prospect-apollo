// import the Post model
const Post = require('../../models/Post');

module.exports = {
    Mutation: {
        // 'createPost' is defined in typeDefs.js 
        // this async function destructures javascript object
        async createPost(_, {postInput: {companyName, jobTitle, location, remote, salaryMin, salaryMax, ExperienceLevel, interviewNum, jobDesc} }){
            // using the Post mongoose model imported
            const newPost = new Post({
                companyName: companyName,
                jobTitle: jobTitle,
                location: location,
                remote: remote,
                salaryMin: salaryMin,
                salaryMax: salaryMax,
                ExperienceLevel: ExperienceLevel,
                interviewNum: interviewNum,
                jobDesc: jobDesc,
                createdAt: new Date().toISOString()
            });

            // the response saves the Post
            const res = await newPost.save();
            console.log(res);
            return {
                id: res.id,
                ...res._doc
            }
        }
    },

    Query: {
        // the object 'post' is defined in typeDefs.js
        async getPost (_, {companyName}){
            const post = await Post.findOne({ companyName });
            // check if the entered password is the same as the encrypted password            

            return {
                id: post.id,
                ...post._doc
            }
        }                    
    }
}