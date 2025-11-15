import React,{ useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.body.classList.toggle('dark-mode', darkMode);
    }, [darkMode]);

    const handleSearch = () => {
        if(query.trim()) return navigate(`/find-cars?query=${query}`);
    }

  return (
    <header className="hero">
      <div className="overlay">
        <div className="nav">
          <h1 className="logo" onClick={() => navigate('/')}>Car Sale</h1>

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
            <Link to="/">Home</Link>
            <Link to="/find-cars">Find your car</Link>
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
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              />
              <button className="search-btn" onClick={handleSearch}>🔍</button>
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