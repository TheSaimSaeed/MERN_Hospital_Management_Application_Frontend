import React from 'react';
import Hero from '../Components/Hero';
import Biography from '../Components/Biography';
import Departments from '../Components/Departments';
import MessageForm from '../Components/MessageForm';

const Home = () => {
  return (
    <div>
      <Hero title={"Welcome from the Faisal Hospital FSD"}  imgURL={"/Images/hero.png"}/>
      <Biography imageUrl={"/Images/about.png"}/>
      <Departments/>
      <MessageForm/>
      
    </div>
  )
}

export default Home
