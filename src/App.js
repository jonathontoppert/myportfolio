import './App.scss';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import About from './components/About';
import Layout from './components/Layout';
import Loader from './components/Loader';
import Contact from './components/Contact';
function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const [showContent, setShowContent] = useState(false); 

  useEffect(() => {
    setLoading(true);
    setShowContent(false);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    if (!loading) {
      setTimeout(() => {
        setShowContent(true); 
      }, 500); 
    }
  }, [loading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={`page-content ${showContent ? 'show' : ''}`}>
            <NavBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/layout" element={<Layout />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </>
      )}
    </>
  );
}

export default App;
