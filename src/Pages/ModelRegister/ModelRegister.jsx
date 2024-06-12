import React from 'react'

import './ModelRegister.css'

import google from '../../images/google.svg'
import facebook from '../../images/facebook.svg'
import { useNavigate } from 'react-router-dom'

const ModelRegister = () => {
  const navigate = useNavigate()

  const navigateToLogin = (e) => {
    e.preventDefault()
    navigate('/login/')
  }

  return (
    <div className='main-content'>
      <div className='register_wrapper'>
        <h1>Criar conta</h1>
        <h2>ÁREA EXCLUSIVA PARA MODELOS</h2>
        <p>Crie uma conta para entrar no melhor site de webnamoro da internet</p>
        <form onSubmit={navigateToLogin}>
          <input type="email" required name="email" id="email" placeholder='Digite seu email...' />
          <input type="text" required name="name" id="fullName" placeholder='Digite seu nome completo...' />
          <input type="password" required name="password" id="password" placeholder='Digite sua senha...' />
          <input type="password" required name="confirmPassword" id="confirmPassword" placeholder='Confirme sua senha...' />
          <input type="text" required name="cpf" id="cpf" placeholder='Digite seu CPF...' />
          <div className='termos-privacidade'>
            <input type="checkbox" name="termos-privacidade" id="privacyTerms" required />
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
      <div className='model_side_background'></div>
    </div>
  )
}

export default ModelRegister
