import React from 'react'

import './LastOrderCard.css'

const LastOrderCard = () => {
    return (
        <div className='order_card'>
            <p className='last_payment'>Ultimo Pagamento:</p>
            <p className='last_payment_price'>R$ 10,00</p>
            <a href="#">ver planos</a>
        </div>
    )
}

export default LastOrderCard