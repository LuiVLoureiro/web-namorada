import React from 'react'

import './ClientConfigPage.css'
import SideBar from '../../components/SideBar/SideBar'
import Pix from '../../images/PixPng.png'
import CardFlags from '../../images/CardsPng.png'

const ClientConfigPage = () => {
    return (
        <div className='explore_client'>
            <div className='explore_left_client'>
                <SideBar handleConfig='active_config' />
            </div>
            <div className='explore_right_client'>
                <div className='config_card'>
                    <h4>configurações</h4>
                    <div className='config'>
                        <p>Formas de Pagamento:</p>
                        <div>
                            <img src={Pix} alt="payment method img" />
                            <img src={CardFlags} alt="payment method img" />
                            <a href="#">editar</a>
                        </div>
                    </div>
                    <div className='config'>
                        <p>Arquivos:</p>
                        <a href="#">editar</a>
                    </div>
                    <div className='config'>
                        <p>Termos de Serviço:</p>
                        <a href="#">Ler</a>
                    </div>
                    <div className='config'>
                        <p>Taxas:</p>
                        <a href="#">Ler</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClientConfigPage