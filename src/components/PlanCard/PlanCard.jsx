import React from 'react'

import './PlanCard.css'

const PlanCard = ({minutes, price, description}) => {
  return (
    <div className='plan_card'>
        <p className='minutes'>{minutes}</p>
        <div className='plan_caption'>
            <p className='price'>R$ {price}</p>
            <p className='plan_description'>{description}</p>
            <a className='
            assign-btn' href="/planos/">Assinar</a>
        </div>
    </div> 
  )
}

export default PlanCard