import React from 'react'
import './ClienteRegister.css'

import google from '../../images/google.svg'
import facebook from '../../images/facebook.svg'
import { useNavigate } from 'react-router-dom'

const ClientRegister = () => {
  const navigate = useNavigate()

  const navigateToLogin = (e) => {
    e.preventDefault()
    navigate('/login/')
  }

  return (
    <div className='main-content'> 
      <div className='register_wrapper'>
        <h1>Criar conta</h1>
        <p>Crie uma conta para entrar no melhor site de webnamoro da internet</p>
        <form onSubmit={navigateToLogin}>
          <input type="email" name="email" required id="email" placeholder='Digite seu email...' />
          <input type="text" name="name" required id="fullName" placeholder='Digite seu nome completo...' />
          <input type="password" name="password" required id="password" placeholder='Digite sua senha...' />
          <input type="password" name="confirmPassword" required id="confirmPassword" placeholder='Confirme sua senha...' />
          <input type="number" name="phoneNumber" required id="phoneNumber" placeholder='Seu Celular ou Telefone...' />
          <div className='termos-privacidade'>
            <input type="checkbox" name="privacyTerms" id="privacyTerms" required/>
            <label htmlFor="privacyTerms">
              Ao se cadastrar no site, você atesta que leu e concorda com nossos 
              <span> Termos</span> e <span>Privacidade</span> e confirma que tem pelo menos <span>18 anos de Idade</span>
            </label>
          </div>
          <input type="submit" value="Entrar" />
        </form>
        <div className='register_ways'>
          <hr />
          <p>Outras formas de Cadastro</p>
          <hr />
        </div>
        <div className='register_ways_icons'>
          <a href="#">
            <img src={google} alt="google img" />
          </a>
          <a href="#">
            <img src={facebook} alt="facebook img" />
          </a>
        </div>
      </div>
      <div className='client_side_background'></div>
    </div>
  )
}

export default ClientRegister
