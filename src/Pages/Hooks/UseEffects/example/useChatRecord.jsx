import { useEffect, useState } from 'react'

const useChatRecord = (roomId,serverUrl) => {
    const [connection,setConnection] = useState(``)
    useEffect(()=>{
        const options = {
            roomId,
            serverUrl
        }
        const createConnection = options => `${roomId} - ${serverUrl}`
        setConnection(createConnection(options))
        
    },[roomId, serverUrl])
  return {
    connection
  }
}

export default useChatRecord