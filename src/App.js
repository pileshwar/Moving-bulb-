import React, { useRef } from 'react';
import './App.css';

function App() {
  const lightRef = useRef(null);
  const shadowRef = useRef(null);
  const filamentsRef = useRef(null);

  const toggleLight = () => {
    if (lightRef.current && shadowRef.current && filamentsRef.current) {
      lightRef.current.classList.toggle('off');
      shadowRef.current.classList.toggle('off');
      filamentsRef.current.classList.toggle('off');
    }
  };

  return (
    <>
      <div className="container">
        <div ref={lightRef} className="bulb" onClick={toggleLight}>
          <div ref={filamentsRef} className="filaments"></div>
        </div>
      </div>
      <div className="floor">
        <div ref={shadowRef} className="shadow"></div>
      </div>
    </>
  );
}

export default App;
