import usersModel from "../Model/users";

export const getUsers = async (req, res ) => {
    try {
        const users = await usersModel.find({})

        if(!users){ res.status(404).json({error: 'Data not found'})
        res.status(200).json(users)
        } 

    } catch (error) {
        res.status(404).json({error: "Error while fetching data..."})
    }
}


export const getUser = async ( req, res ) => {
     try {
        
        const { userID } = req.query;
        if ( userID ){
           const user = await usersModel.findById(userID)
            return res.status(200).json(user)
        }
        res.status(404).json({msg: "Specify an userID na oga! "})
     } catch (error) {
        res.status(404).json({error: "Couldn't fetch the user! "})
     }
}


export const postUsers =  async (req, res ) =>{
    
    try {
        const formData = req.body;
        if(!formData) return res.status(404).json({error: "Omo ope you've submitted an empty form o!"});
        usersModel.create(formData, (error, data) => {
            return res.status(200).json({data})
        })
    } catch (error) {
        res.status(400).json({error})
    }
}

export const updateUser = async (req, res ) => {
    try {
        const { userID } = req.query;
        const formData = req.body;
        if( formData && userID ) {
         const user = await usersModel.findByIdAndUpdate(userID, formData );
            res.status(200).json( user )
        }
        res.status(404).json({error: "user not found!"});
    } catch (error) {
        res.status(404).json({error: "Couldn't update ya records o!" })
    }
}

export const deleteUser = async ( req, res ) => {

     try {
    const { userID } = req.query;
    if (userID){
    await usersModel.findByIdAndDelete(userID)
    return res.status(200).json({ deleted : userID})
    }
        return res.staus(404).json({msg: "Provide a specific userID biko! "})
     } catch (error) {
        res.status(404).json({error: "Couldn't delete the record bro! "})
     }
}