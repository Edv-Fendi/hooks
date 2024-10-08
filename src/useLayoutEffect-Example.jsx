import React, { useLayoutEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 600);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });

  const handleClick = () => {
    setCounted((counted) => [...counted, +counted.slice(-1) + 1]);
  };
  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <div ref={divRef} style={{ height: '200px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </>
  );
}

export default App;
