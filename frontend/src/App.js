import React, { useState } from 'react';
import './App.css';
import LoadingScreen from './components/LoadingScreen';
import BirthdayLanding from './components/BirthdayLanding';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <BirthdayLanding />
      )}
    </div>
  );
}

export default App;