import mongoose from "mongoose"

const conn = async ( ) =>{
    try{
   const connection =  mongoose.connect(process.env.MONGODB)
   if (connection.readyState == 1){
     console.log('DB Connected')
   }

    }catch(error){
        return Promise.reject(err)
    }
}

export default conn;