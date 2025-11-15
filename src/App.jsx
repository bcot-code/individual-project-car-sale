import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SearchResults from './Pages/SearchResults.jsx';
import Contact from './Pages/Contact.jsx';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      {/* HOMEPAGE */}
        <Route path="/" element={<Home />} />
      {/* SEARCH RESULTS PAGE */}
        <Route path="/find-cars" element={<SearchResults />} />
      {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />
      </Routes> 
    </BrowserRouter>
  )
}

export default App
