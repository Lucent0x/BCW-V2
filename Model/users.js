 import mongoose, { models, model, Schema } from "mongoose";

 const userSchema = new Schema ({
    fName : String,
    lName : String,
    password: String,
    dob : String,
    pay : Number
 })

 const usersModel = models.users ||  mongoose.model('users', userSchema)

 export default usersModel