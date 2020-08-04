import React from 'react'
import './imagelinkform.css';

const imagelinkform = () => {
    return (
        <div>
            <p className='f3 white'>
                {'Detect the face'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center br4 ba b--near-white' type='text'/>
                    <button className='w-30 grow ba f4 link ph3 pv2 dib br-pill
                    white bg-blue'>Detect</button>     
                </div>
            </div>
        </div>
    );
}

export default imagelinkform;