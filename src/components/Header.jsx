import React,{ useEffect, useState} from 'react'

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    
    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);


  return (
    <header className="hero">
      <div className="overlay">
        <div className="nav">
          <h1 className="logo" onClick={() => window.location.href = '/'}>Car Sale</h1>

        {/* BURGER MENU (mobile) */}
          <div 
            className={`burger${menuOpen ? ' open' : ''}`}
            onClick={()=> setMenuOpen(!menuOpen)}
            >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          
          <div className={`nav-links${menuOpen ? ' active' : ''}`}>
            <a href="#">Home</a>
            <a href="#">Find your car</a>
            <button>Contact</button>
          </div>
        </div>

        <div className="hero-content">
          <h2>Browse our cars</h2>

          {/* SEARCH & DARK MODE WRAPPER */}
          <div className="search-section">
            {/* SEARCH BOX */}
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by make, model, type..."
              />
              <button className='search-btn'>🔍</button>
            </div>

            {/* DARK MODE BUTTON */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="dark-toggle-btn"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header