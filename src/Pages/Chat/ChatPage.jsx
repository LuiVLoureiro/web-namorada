import React from 'react'

import SideBar from '../../components/SideBar/SideBar'

import './ChatPage.css'
import Messages from '../../components/Messages/Messages'
import ChatComponent from '../../components/ChatComponent/ChatComponent'

const ChatPage = () => {
  return (
    <div className='explore_client'>
      <div className='explore_left_client'>
        <SideBar handleMessages='active_mensagens' />
      </div>
      <div className='explore_right_client'>
        <div className='chat_wrapper'>
          <Messages />
          <ChatComponent />
        </div>
      </div>
    </div>
  )
}

export default ChatPage