import React from 'react'

import './TimeCard.css'

const TimeCard = () => {
    return (
        <div className='order_card'>
            <p className='time_title'>Tempo Restante:</p>
            <p className='remaining_time'>00:30:00</p>
            <a href="/planos/">ver planos</a>
        </div>
    )
}

export default TimeCard