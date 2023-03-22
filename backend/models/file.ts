import mongoose, {Schema}  from "mongoose";
interface IformData extends mongoose.Document{
    user: String;
        data: {
            names: String[];
            birthdates: String[];
            togetherdate: String;
        }
    
   
}
const formSchema = new mongoose.Schema({
    
    user: String,
        data: {
        names: Array,
        birthdates: Array,
        togetherdate: String,
    }
});

const FormData = mongoose.model<IformData>('FormData', formSchema)

export default FormData;