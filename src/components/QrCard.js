import React from 'react'
import Image from "./qr-code.png"

// styles
import './QrCard.css'

export default function QrCard() {
  return (
      <div className="wrapper">
        <div className='container'>
            <img className='qr-image' src={Image} alt="qr code" />
            <h2 className='qr-header'> Improve your front-end skills by building projects </h2>
            <p className='qr-info'> Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>

  )
}
