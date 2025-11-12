import React from 'react'

const Header = () => {
  return (
    <header className='hero'>
        <div className='overlay'>
            <div className='nav'>
                <h1 className='logo'>Car Sale</h1>
                <div className='nav-links'>
                    <a href='#'>HOME</a>
                    <a href='#'>Find your car</a>
                    <button className=''>Contact</button>
                </div>
            </div>

            <div className='hero-content'>
                <h2>Browse our cars</h2>
                <div className='search-box'>
                    <input
                        type='text'
                        placeholder='Search by make, model, type...'
                    />
                    <button>🔍</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header