import React from 'react'
import smm from '../../assets/banner12.jpg'
import './PCard.css'

const PCard = () => {
  return (
    <div>
        <div className="scard">
            <div className="imgBx">
                <img src={smm} alt="sample" />
            </div>
            <div className="contentBx">
                <h3>wireless headphone</h3>
                <h2 className='pricee'>
                    $40.<small>99</small>
                </h2>
                <li className='buy'>Add to Cart</li>
            </div>
        </div>
    </div>
  )
}

export default PCard