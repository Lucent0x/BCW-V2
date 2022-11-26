import usersModel from "../Model/users";

const getUsers = async (req, res ) => {
    try {
        const users = await usersModel.find({})

        if(!users)   res.status(404).json({error: 'Data not found'})
        res.status(200).json(users)

    } catch (error) {
        res.status(404).json({error: "Error while fetching data..."})
    }
}

export default getUsers;