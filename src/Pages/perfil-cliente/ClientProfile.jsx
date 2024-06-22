import React from 'react'

import user from '../../images/user-profile-img.png'

import SideBar from '../../components/SideBar/SideBar'
import LastOrderCard from '../../components/LastOrderCard/LastOrderCard'
import TimeCard from '../../components/TimeCard/TimeCard'
import FavoriteModelCard from '../../components/FavoriteModelCard/FavoriteModel'
import './ClientProfile.css'
import FavoriteModel from '../../components/FavoriteModelCard/FavoriteModel'

const ClientProfile = () => {
  return (
    <div className='explore_client'>
      <div className='explore_left_client'>
        <SideBar />
      </div>
      <div className='explore_right_client'>
        <div className='profile_wrapper'>
          <div className='info_wrapper'>
            <div className='profile'>
              <img src={user} alt="user image" />
              <p>Nome_Usuario</p>
            </div>
            <div className='client_info'>
              <p>Nome Completo: <span>José da Silva Alves Fonseca Cardoso</span></p>
              <p>Email: <span>josealvesfonseca@teste.com</span></p>
              <p>Senha: <span>****************</span></p>
              <p>Telefone: <span>(097) 9234-5678</span></p>
              <a href="#" className='edit_btn'>editar</a>
            </div>
          </div>
          <div className='order_info'>
            <LastOrderCard />
            <TimeCard />
            <FavoriteModel />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClientProfile