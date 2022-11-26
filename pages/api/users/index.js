// import conn from '../../../Database/connection'
// import getUsers from '../../../Database/controller'

// const Handler = async ( req, res ) => {
//     conn().catch( ()=> res.status(405).json({error: "Internal Server Error"}))
//     const {method} = req

//     switch ( method ){
//         case 'GET' :
//          getUsers(req, res)
//         break;
//         case  'POST' :
//         res.status(200).json({method, name: 'POST Request'})
//         break;
//         case  'PUT' :
//         res.status(200).json({method, name: 'PUT Request'})
//         break;
//         case  'DELETE' :
//         res.status(200).json({method, name: 'DELETE Request'})
//         break;
//         default:
//             res.setHeader('Allow' ['GET', 'POST', 'PUT', 'DELETE'])
//             res.status(405).end(`${method}  Request Not Allowed `)
//     }

// }

// export default Handler;