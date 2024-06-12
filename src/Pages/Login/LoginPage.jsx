import React from 'react'
import { useNavigate } from 'react-router-dom';

import './LoginPage.css'

import google from '../../images/google.svg'
import facebook from '../../images/facebook.svg'

const LoginPage = () => {
  const navigate = useNavigate()

  const navigateToExplore = () => {
    navigate('/explore/');
  }

  return (
    <div className='main-content'> 
      <div className='login_wrapper'>
        <h1>Login</h1>
        <p>Faça o login para entrar no melhor site de webnamoro da internet</p>
        <form onSubmit={navigateToExplore}>
          <input type="email" name="email" required id="email" placeholder='Digite seu email' />
          <input type="password" name="password" required id="password" placeholder='Digite sua senha' />
          <input type="submit" value="Entrar" />
        </form>
        <div className='new-users'>
          <a href="/client-register/">Novo por aqui? Cadastre-se como usuário</a>
          <a href="/model-register/">Nova por aqui? Cadastre-se como modelo</a>
        </div>
        <div className='login_ways'>
          <hr />
          <p>Outras formas de Login</p>
          <hr />
        </div>
        <div className='login_ways_icons'>
          <a href="#">
            <img src={google} alt="google img" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook img" />
          </a>
        </div>
      </div>
      <div className='login_side_background'></div>
    </div>
  )
}

export default LoginPage