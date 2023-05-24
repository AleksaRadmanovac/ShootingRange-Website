import React, { useState } from 'react';
import HomePage from './Pocetna';
import InfoPage from './Info';

const App = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname);

  return (
    <div>
      {currentUrl === '/' && <HomePage />}
      {currentUrl === '/info' && <InfoPage />}
    </div>
  );
};

export default App;