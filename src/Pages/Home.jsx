import React from 'react'
import Header from '../components/Header.jsx';
import FeaturedCars from '../components/FeaturedCars.jsx';
import Categories from '../components/Categories.jsx';
import SearchResults from '../components/SearchResults.jsx';
import Footer from '../components/Footer.jsx';

const Home = () => {
  return (
    <>
        <Header />
        <SearchResults />
        <Categories />
        <FeaturedCars />
        <Footer />
    </>
  )
}

export default Home