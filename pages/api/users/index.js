import conn from '../../../Database/connection'
import { deleteUser, getUsers, postUsers, updateUser  } from'../../../Database/controller'

const Handler = async ( req, res ) => {
    conn().catch( ()=> res.status(405).json({error: "Internal Server Error"}))
    const {method} = req

    switch ( method ){
        case 'GET' :
         getUsers( req, res )
        break;
        case  'POST' :
        postUsers( req, res )
        break;
        case  'PUT' :
        updateUser( req, res )
        break;
        case  'DELETE' :
            deleteUser(req, res )
        break;
        default:
            res.setHeader('Allow' ['GET', 'POST', 'PUT', 'DELETE'])
            res.status(405).end(`${method}  Request Not Allowed `)
    }

}

export default Handler;