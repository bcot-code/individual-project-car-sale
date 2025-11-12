import React from 'react'

const SearchResults = () => {
  return (
    <section>
        <h3>Search results for <span>"Fast"</span></h3>

        <div className='price-range'>
            <label>Price by:</label>
            <input type="range" min="0" max="100000" defaultValue="50000"/>
            <span>$0 - $100,000</span>
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