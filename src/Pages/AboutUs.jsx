import React from 'react'
import Hero from '../Components/Hero'
import Biography from '../Components/Biography'

const AboutUs = () => {
  return (
    <div>
      <Hero title={"About Us"} imgURL={'/Images/signin.png'}/>
      <Biography imageUrl={"/Images/services.png"}/>
      
    </div>
  )
}

export default AboutUs;
