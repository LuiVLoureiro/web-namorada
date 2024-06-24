import React from 'react'

import './SuporteForm.css'

const SuporteForm = () => {
    return (
        <div className='suporte_card'>
            <h4>suporte</h4>
            <form className='suporte_form'>
                <div>
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div>
                    <label htmlFor="telefone">Telefone:</label>
                    <input type="tel" id="telefone" name="telefone" required />
                </div>
                <div>
                    <label htmlFor="posicao">Posição:</label>
                    <select id="posicao" name="posicao" required>
                        <option value="usuário">Usuário</option>
                        <option value="modelo">Modelo</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>
                    <p>Ao clicar em enviar a mensagem, você concordará com os termos e condições, além da nossa politica de privacidade que explica como nos tratamos e coletamos os dados enviados.</p>
                </div>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default SuporteForm