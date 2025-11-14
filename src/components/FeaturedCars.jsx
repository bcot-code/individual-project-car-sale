import React from 'react'
import CarCard from './CarCard';
import cars from '../data/cars';

const FeaturedCars = () => {
  return (
    <section>
        <h2>Featured Cars</h2>
        <div className='featured-grid'>
            {cars.slice(0,4).map((car)=>(
                <CarCard key={car.id} car={car} />
            ))}
        </div>
    </section>
  )
}

export default FeaturedCars