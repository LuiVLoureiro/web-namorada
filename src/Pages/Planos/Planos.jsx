import React from 'react'

import SideBar from '../../components/SideBar/SideBar'

import "./Planos.css"
import PlanCard from '../../components/PlanCard/PlanCard'

const Planos = () => {
    return (
        <div className='explore_client'>
            <div className='explore_left_client'>
                <SideBar handlePlanos='active_planos' />
            </div>
            <div className='explore_right_client'>
                <div className='planos'>
                    <PlanCard minutes={'5 minutos'} price={'0,00'} description={'Teste Gratuito Único'} />
                    <PlanCard minutes={'10 minutos'} price={'5,00'} description={'Todas as modelos'} />
                    <PlanCard minutes={'30 minutos'} price={'10,00'} description={'Todas as modelos'} />
                    <PlanCard minutes={'1 hora'} price={'15,00'} description={'Todas as modelos'} />
                    <PlanCard minutes={'3 horas'} price={'20,00'} description={'Todas as modelos'} />
                    <PlanCard minutes={'1 dia'} price={'25,00'} description={'Todas as modelos'} />
                </div>
            </div>
        </div>
    )
}

export default Planos