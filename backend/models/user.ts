import mongoose,{ Schema, model } from 'mongoose';

// userSchema = new Schema({
//     email: String,
//     password: String
// });

export interface IUser extends mongoose.Document {
    email: string; 
    password: number; 
  };

export const userSchema = new Schema({
    email: String,
    password: Number,
  });

  const User = mongoose.model<IUser>('User', userSchema);
  
  export default User;