/* eslint-disable react/prop-types */
import React, { forwardRef, useImperativeHandle, useLayoutEffect, useRef, useState } from 'react';
import './App.css';

function App() {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();

  useLayoutEffect(() => {
    const now = Date.now();
    while (Date.now() < now + 600);
    divRef.current.divRef.scrollTop = divRef.current.divRef.scrollHeight;
  });

  const handleClick = () => {
    setCounted((counted) => [...counted, +counted.slice(-1) + 1]);
    divRef.current.handleClick();
  };
  return (
    <>
      <button onClick={handleClick}>Count {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef} />
    </>
  );
}

export default App;

// eslint-disable-next-line react/prop-types
export const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [rand, setRand] = useState('0.5');
  const divRef = useRef();
  const handleClick = () => {
    setRand(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleClick,
    divRef: divRef.current,
  }));

  return (
    <div ref={divRef} style={{ height: '200px', width: '100px', overflowY: 'scroll' }}>
      {counted.map((counted) => {
        return (
          <p onClick={handleClick} key={`c-${counted}`}>
            {counted} --- {rand}
          </p>
        );
      })}
    </div>
  );
});
