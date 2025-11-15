import React,{ useState } from 'react'
import FeaturedCars from './FeaturedCars'
import cars from '../data/cars.js';

const Categories = () => {
  const [filteredCars, setFilterCars] = useState(cars);
  // Filter cars by bodyType
  const filterCars = (type) => {
    const filtered = cars.filter((car) => car.bodyType === type);
    setFilterCars(filtered);
  };
  return (
    <section className='categories-section'>
        <h2>Categories</h2>
        <div className='categories-grid'>
            {['Sedan', 'SUV', 'Sports', 'Electric', 'Truck'].map((type) => (
                <button 
                  key={type} 
                  onClick={() => filterCars(type)}>{type}
                </button>
            ))}
        </div>
        {/* Featured Car based off selected categories */}
        <FeaturedCars cars={filteredCars} />
    </section>
  )
}

export default Categories