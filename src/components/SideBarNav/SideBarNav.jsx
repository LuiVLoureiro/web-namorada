import React from 'react'

import './SideBarNav.css'

const SideBarNav = () => {
  return (
    <div className='navbar'>
        <a href="/explore/">modelos</a>
        <a href="/planos/">planos</a>
        <a href="/perfil-cliente/">perfil</a>
        <a href="/chat/">mensagens</a>
        <a href="/configuracao-cliente/">configurações</a>
        <a href="/suporte/">suporte</a>
    </div>
  )
}

export default SideBarNav