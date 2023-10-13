import { useEffect, useState } from 'react'

export const getChatRoomConnection = (roomId,serverUrl) =>{
    const createConnection = options => `${roomId} - ${serverUrl}`
    const connection = createConnection(roomId,serverUrl)
    return {
        connection
    }
}
// const useChatRecord = (roomId,serverUrl) => {
//     const [connection,setConnection] = useState(``)
//     useEffect(()=>{
//         const options = {
//             roomId,
//             serverUrl
//         }
//         const createConnection = options => `${roomId} - ${serverUrl}`
//         setConnection(createConnection(options))
        
//     },[roomId, serverUrl])
//   return {
//     connection
//   }
// }

export default getChatRoomConnection