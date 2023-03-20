import mongoose  from "mongoose";

const fileSchema = new mongoose.Schema({
    myFile: String,
});

export default mongoose.models.files  || mongoose.model('File', fileSchema);