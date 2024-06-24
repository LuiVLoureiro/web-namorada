import React from 'react'
import ClientMessage from '../ClientMessage/ClientMessage'
import ModelMessage from '../ModelMessage/ModelMessage'

import './ChatComponent.css'

const ChatComponent = () => {
  return (
    <div className='ChatComponent_messages_wrapper'>
      <ModelMessage time='17 min' text='"Você já reparou como o pôr do sol é bonito quando estamos juntos? Parece que o céu fica ainda 
      mais colorido só para nós."' />
      <ClientMessage time='16 min' text='"Eu reparo sim, é como se o mundo inteiro ficasse mais belo quando estou ao seu lado. 
      Cada momento com você é especial."' />
    </div>
  )
}

export default ChatComponent