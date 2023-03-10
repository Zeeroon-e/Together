import mongoose from 'mongoose';

let userSchema = mongoose.Schema();

userSchema = new  mongoose.Schema({
    email: String,
    password: String
});

export default userSchema;