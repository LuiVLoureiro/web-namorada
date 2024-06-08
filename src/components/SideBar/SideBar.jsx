import React from 'react'

import arrowDown from "../../images/arrowdown.png"
import LogoImg from '../../images/logoImg.png'
import LogoText from '../../images/LogoText.png'
import user from '../../images/userimg.png'

import instagram from '../../images/instagramlogo.png'
import facebook from '../../images/facebooklogo.png'
import chat from '../../images/logochat.png'
import onlyfans from '../../images/onlyfanslogo.png'

import './SideBar.css'
import SideBarNav from '../SideBarNav/SideBarNav'


const SideBar = () => {
  return (
    <div>
        <div id='sidebar' className='sidebar'>
            <div className='top-sidebar'>
                <div className='logo_wrapper'>
                    <img src={LogoImg} alt="Logo img" />
                    <img src={LogoText} alt="Logo text" />
                </div>
                <div className='user_profile'>
                    <img src={user} alt="user img" />
                    <p>user_name</p>
                    <img src={arrowDown} alt="arrow-down" />
                </div>
                <SideBarNav />
            </div>
            <div className='social-media'>
                <a href="http://localhost:3000/explore">
                    <img src={instagram} alt="img" />
                </a>
                <a href="http://localhost:3000/explore">
                    <img src={facebook} alt="img" />
                </a>
                <a href="http://localhost:3000/explore">
                    <img src={onlyfans} alt="img" />
                </a>
                <a href="http://localhost:3000/explore">
                    <img src={chat} alt="img" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default SideBar