import React from 'react'

import { FaFolderOpen } from "react-icons/fa";
import { IoArrowUpOutline } from "react-icons/io5";

import './MessageSender.css'

const MessageSender = () => {
    return (
        <form className='message_sender'>
            <label htmlFor='file_input' className='file_input_label'>
                <FaFolderOpen className='file_icon' />
            </label>
            <input
                type='file'
                id='file_input'
                className='file_input'
            />
            <input
                type='text'
                className='text_input'
                placeholder='Escreva sua mensagem'
            />
            <button type='submit' className='send_button'><IoArrowUpOutline /></button>
        </form>
    )
}

export default MessageSender