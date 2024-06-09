import React from 'react'
import { FaHeart } from 'react-icons/fa'

import model from '../../images/client_register_background.jpg'

import './ModelCard.css'

const ModelCard = () => {
  return (
    <div className='card'>
        <div className='img_wrapper'>
            <img src={model} alt="model image" />
            <FaHeart />
        </div>
        <div className='description'>
            <h4>Katelyn</h4>
            <p>Morena, 1,50 de Altura, Joga Tenis Gosta de passear e curtir um Shopping Joga Videogames e ama os animais</p>
        </div>
    </div>
  )
}

export default ModelCard