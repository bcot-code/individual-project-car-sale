import React from 'react'
import Header from '../components/Header.jsx';
import carImage from '../assets/chris-liverani-HUJDz6CJEaM-unsplash.jpg';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
      <Header />
      <section className='home-hero'>
        <div className='hero-content'>
            <h1>Find Your Dream Car</h1>
            <p>Explore our extensive collection of vehicles and drive away in style.</p>
        </div>
        <div>
            <img src={carImage} alt="Hero Car" className='hero-image'/>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home