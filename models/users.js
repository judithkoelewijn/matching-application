
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    interests: {
        type: String,
        required: true
    },

  

}, { timestamps: true});

const User = mongoose.model("User", userSchema);
export default User;
