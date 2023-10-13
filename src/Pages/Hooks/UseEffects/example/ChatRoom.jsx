import React from 'react'
import useChatRecord from './useChatRecord'
import getChatRoomConnection from './getChatRoomConnection'

const ChatRoom = ({roomId}) => {
    const serverUrl = 'https://server.com'
    const {connection} = useChatRecord(roomId,serverUrl)
    // const {connection}= getChatRoomConnection(roomId,serverUrl)
  return (
    <div>connection ID: {connection}</div>
  )
}

export default React.memo(ChatRoom)