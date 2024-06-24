import React from 'react'

import SuporteForm from '../../components/SuporteForm/SuporteForm'
import SideBar from '../../components/SideBar/SideBar'

import './SuportePage.css'


const SuportePage = () => {
    return (
        <div className='explore_client'>
            <div className='explore_left_client'>
                <SideBar />
            </div>
            <div className='explore_right_client'>
                <div className='suporte_card_area'>
                    <SuporteForm />
                </div>
            </div>
        </div>
    )
}

export default SuportePage