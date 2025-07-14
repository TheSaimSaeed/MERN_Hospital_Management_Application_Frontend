import React from 'react'

const Hero = ({ title, imgURL }) => {
    return (
        <div className='hero container'>
            <div className='banner'>
                <h1>{title}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit dolorem velit ratione? A nam provident fugit consequuntur dignissimos dolores sint!</p>

            </div>

            <div className="banner">
            <img src={imgURL} alt="hero" className='animated-image' />
            <span>
                <img src="/Images/Vector.png" alt="vector" />
            </span>
            </div>

        </div>
    )
}

export default Hero
