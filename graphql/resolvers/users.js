// import the Message model
const User = require('../../models/User');
const { ApolloError } = require('apollo-server-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    Mutation: {       
        // this async function destructures javascript object
        async registerUser(_, {registerInput: {firstName, lastName, email, password} }){
           // check if the given email already exists in the database
            const oldUser = await User.findOne({ email });
           // throw error if it does
            if (oldUser) {
                throw new ApolloError('A user is already registered with the email ' + email, 'USER_ALREADY_EXISTS');
            }
           // encrypt password
            var encryptedPassword = await bcrypt.hash(password, 10);
           // build out the mongoose model (User)
            const newUser = new User({
                firstName: firstName,
                lastName: lastName,
                email: email.toLowerCase(),
                password: encryptedPassword
            });
           // create the JWT
            const token = jwt.sign(
                { user_id: newUser._id, email },
                'UNSAFE_STRING',
                {
                    expiresIn: "2h"
                }
            );

            newUser.token = token;

           // save user in the MongoDB
           const res = await newUser.save();
           return {
            id: res.id,
            ...res._doc
           }
        },
        async loginUser(_, {loginInput: {email, password} }) {
            // check if the user exists with the given email
            const user = await User.findOne({ email });
            // check if the entered password is the same as the encrypted password
            if(user && (await bcrypt.compare(password, user.password))){
                // create a new token
                const token = jwt.sign(
                    { user_id: user._id, email },
                    'UNSAFE_STRING',
                    {
                        expiresIn: "2h"
                    }
                );
                // attach token to user model that we found above
                user.token = token;

                return {
                    id: user.id,
                    ...user._doc
                }
             } else {
                    // if the user doesn't exist return error
                    throw new ApolloError('Email or password is incorrect', 'INCORRECT_PASSWORD')
                }
            }                     
            
        },

    Query: {
        // the object 'user' is defined in typeDefs.js
        user: (_, {ID}) => User.findById(ID)
    }
}