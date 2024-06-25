import React from 'react'

import SideBar from '../../components/SideBar/SideBar'
import { FaSearch } from 'react-icons/fa'

import './Explore.css'
import ModelCard from '../../components/ModelCard/ModelCard'

const Explore = () => {
  return (
    <div className='explore'>
        <div className='explore_left'>
          <SideBar handleModelos='active_modelos' />
        </div>
        <div className='explore_right'>
          <div className='explore_header'>
              <h3>Explore:</h3>
              <div className='explore_nav'>
                <ul>
                  <li><a href="#">
                    Populares</a>
                  </li>
                  <li>
                    <a href="#">Novas</a>
                  </li>
                  <li>
                    <a href="#">Top escolhas</a>
                  </li>
                  <li>
                    <a href="#">Favoritas</a>
                  </li>
                </ul>
              </div>
                <a href="#" className='search_btn'>Procurar <FaSearch /> </a>
          </div>
          <div className='explore_models'>
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
            <ModelCard />
          </div>
        </div>
    </div>
  )
}

export default Explore