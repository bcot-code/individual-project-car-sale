import React, {useState} from 'react'
import { useSearchParams } from 'react-router-dom';
import cars from '../data/cars';
import CarCard from '../components/CarCard';
import Categories from '../components/Categories';


const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [price, setPrice] = useState(250000);// State to hold the price range value

  // Function to update the price value based on the range input
  const updateValue = (value) => {
    setPrice(Number(value));
  }
  // Filter cars based on query (search in make and model, case insensitive) and price
  const filteredCars = cars.filter(car =>
    (car.make.toLowerCase().includes(query.toLowerCase()) ||
    car.model.toLowerCase().includes(query.toLowerCase())) &&
    car.price <= price
  );

  return (
    <section className='search-results'>
      <div>
        <h1 className="logo" onClick={() => window.location.href = '/'}>Car Sale</h1>
      </div>
    {/* HR Line Above Search Results */}
        <hr className='results-divider'/>
        <h3>Search results for <span>"{query}"</span></h3>
        <div className='price-range'>
            <label>Max price:</label>
            <span>Up to ${price}</span>
            <input type="range" id="myRange" min="0" max="250000" value={price} onInput={(e) => updateValue(e.target.value)}/>
        </div>

        <div>
            {filteredCars.length > 0 ? (
          <div className='car-cards'>
            {filteredCars.map(car => <CarCard key={car.id} car={car} />)}
          </div>
            ) : ( query && (
          <div className='no-results'>
             <img 
                src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
                alt="No results found"
              />
            <h4>Could not find any matches related to your search.</h4>
            <p>Please change the filter or reset it below.</p>
            <button onClick={() => setPrice(250000)}>Reset Filter</button>
          </div>
        )
      )}
      </div> 
      <button className='back-to-top' onClick={() => window.location.href = '/'}>Back Home</button> 
    </section>
  )
}

export default SearchResults
