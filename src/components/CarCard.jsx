import React from 'react'

const CarCard = ({ car }) => {
  return (
    <div className='car-card'>
        <img 
          src={car.image} 
          alt={`${car.make} ${car.model}`} 
          className="car-image"
        />
        <div className="car-info">
          <h3>{car.make} {car.model}</h3>
          <p>{car.year} • {car.mileage} miles</p>
          <p>${car.price.toLocaleString()}</p>
          <button className="view-details">View Details</button>
        </div>
    </div>
  )
}

export default CarCard