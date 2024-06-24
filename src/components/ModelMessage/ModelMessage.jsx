import React from 'react'

import { CiClock2 } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";

import ModelImg from '../../images/ModelMessageImg.png'

import './ModelMessage.css'

const ModelMessage = ({text, time}) => {
  return (
    <div className='model_message_wrapper'>
        <div className='model_img_wrapper'>
          <img src={ModelImg} alt="Client profile img" />
          <FaCircle />
        </div>
        <div className='model_message'>
            <span>Você <CiClock2 /> {time}</span>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default ModelMessage