// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import PLoader from './components/PLoader'; // Updated import with the new file name

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 5 seconds
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(loadingTimeout);
  }, []); // Empty dependency array ensures that useEffect runs only once on component mount

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        {/* Conditionally render the loader based on the loading status */}
        {isLoading ? <PLoader /> : (
          <>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className='relative z-0'>
              <Contact />
              <StarsCanvas />
            </div>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
