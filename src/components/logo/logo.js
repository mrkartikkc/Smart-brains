import React from 'react'
import Tilt from 'react-tilt'
import brain from './brain.png'
import './logo.css'

const logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2" 
            options={{ max : 30 }} 
            style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner">
                <img alt='logo' src={brain}></img>
            </div>
            </Tilt>
        </div>
    );
}

export default logo;