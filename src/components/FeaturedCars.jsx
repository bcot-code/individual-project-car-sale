import React from 'react'
import CarCard from '../components/CarCard.jsx';


const FeaturedCars = ({cars}) => {
  if(!Array.isArray(cars)) {
    console.error("Expected 'cars' prop to be an array, but got:", cars);
    return null;
  }
  
  const featuredCars = cars.slice(0, 4); // Show only first 4 cars

  return (
    <section className='featured-section'>
        <h2>Featured Cars</h2>
        <div className='featured-grid' style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {featuredCars.map((car) =>(
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    </section>
  )
}

export default FeaturedCars