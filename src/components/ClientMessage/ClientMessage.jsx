import React from 'react'

import { CiClock2 } from "react-icons/ci";
import { FaCircle } from "react-icons/fa6";

import userImg from '../../images/user-profile-img.png'

import './ClientMessage.css'

const ClientMessage = ({text, time}) => {
  return (
    <div className='client_message_wrapper'>
        <div className='client_message'>
            <span>Você <CiClock2 /> {time}</span>
            <p>{text}</p>
        </div>
        <div className='client_img_wrapper'>
          <img src={userImg} alt="Client profile img" />
          <FaCircle />
        </div>
    </div>
  )
}

export default ClientMessage