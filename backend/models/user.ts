import mongoose,{ Schema} from 'mongoose';

export interface IUser extends mongoose.Document {
    email: string; 
    password: string; 
  };

export const userSchema = new Schema({
    email: String,
    password: String,
  });

  const User = mongoose.model<IUser>('User', userSchema);

  export default User;