import React, { useEffect, useState } from 'react';
import axios from 'axios';

import arrowDown from "../../images/arrowdown.png";
import LogoImg from '../../images/logoImg.png';
import LogoText from '../../images/LogoText.png';
import user from '../../images/userimg.png';

import instagram from '../../images/instagramlogo.png';
import facebook from '../../images/facebooklogo.png';
import chat from '../../images/logochat.png';
import onlyfans from '../../images/onlyfanslogo.png';

import './SideBar.css';
import SideBarNav from '../SideBarNav/SideBarNav';

const SideBar = ({ handleModelos, handlePlanos, handlePerfil, handleMessages, handleConfig, handleSuporte }) => {
  const [userName, setUserName] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/check_session', { withCredentials: true })
      .then(response => {
        if (response.data.logged_in) {
          setUserName(response.data.nome);
        }
      })
      .catch(error => {
        console.error('Error fetching user name', error);
      });
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="menu-toggle" onClick={toggleSidebar}>
        ☰
      </div>
      <div id='sidebar' className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className='top-sidebar'>
          <div className='logo_wrapper'>
            <a href="/explore/">
              <img src={LogoImg} alt="Logo img" />
              <img src={LogoText} alt="Logo text" />
            </a>
          </div>
          <div className='user_profile'>
            <img src={user} alt="user img" />
            <p>{userName}</p>
            <img src={arrowDown} alt="arrow-down" />
          </div>
          <SideBarNav
            modelos={`${handleModelos}`}
            planos={`${handlePlanos}`}
            perfil={`${handlePerfil}`}
            mensagens={`${handleMessages}`}
            config={`${handleConfig}`}
            suporte={`${handleSuporte}`}
          />
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
    </>
  );
};

export default SideBar;
