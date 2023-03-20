import mongoose, {Schema}  from "mongoose";
interface IformData extends mongoose.Document{
    __id: string;
        data: {
            names: String[];
            birthdates: String[];
            togetherdate: string;
        }
    
   
}
const formSchema = new mongoose.Schema({
    
    __id: String,
        data: {
        names: Array,
        birthdates: Array,
        togetherdate: String,
    }
});

const FormData = mongoose.model<IformData>('FormData', formSchema)

export default FormData;