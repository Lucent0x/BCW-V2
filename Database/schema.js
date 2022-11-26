import mongoose from "mongoose";

const kittenSchema =  new mongoose.Schema ({
    name: String
});

//
const KittenModel = mongoose.models('kittens') || mongoose.model('kittens', kittenSchema)

export default KittenModel;