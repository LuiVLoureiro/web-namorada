import React from 'react'

import modelMessage from '../../images/ModelMessageImg.png'

import './Messages.css'


const Messages = () => {
    return (
        <div className='messages'>
            <h4>Mensagens <span>Recentes:</span></h4>
            <div className='message_chat'>
                <img src={modelMessage} alt="model img" />
                <p>Daniela</p>
            </div>
        </div>
    )
}

export default Messages