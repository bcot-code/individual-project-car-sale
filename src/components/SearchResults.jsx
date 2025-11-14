import React, {useState} from 'react'

const SearchResults = () => {
  const [price, setPrice] = useState(0);// State to hold the price range value

  // Function to update the price value based on the range input
  const updateValue = (value) => {
    setPrice(value);
  }
  return (
    <section className='search-results'>
    {/* HR Line Above Search Results */}
        <hr className='results-divider'/>
        <h3>Search results for <span>"Mercedes"</span></h3>

        <div className='price-range'>
            <label>Price by:</label>
            <span>${price} - $100,000</span>
            <input type="range" id="myRange" min="0" max="100000" value={price} onChange={(e) => updateValue(e.target.value)}/>
        </div>

        <div className='no-results'>
            <img 
                src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png"
                alt="No results found"
            />
            <h4>Could not find any matches related to your search.</h4>
            <p>Please change the filter or reset it below.</p>
            <button>Reset Filter</button>
        </div>
    </section>
  )
}

export default SearchResults