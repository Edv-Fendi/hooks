import React, { useState } from 'react';
import './App.css';
import { useMyhook } from './customHooks/useMyHook';

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [increment, setIncrement] = useState(100);
  useMyhook(() => setCounter((counter) => counter + 1), delay);

  const handleDelayChangePlus = () => {
    setDelay((delay) => delay + increment);
  };

  const handleDelayChange = () => {
    setDelay((delay) => delay - increment);
  };

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>

      <button onClick={handleDelayChangePlus}>+{increment}</button>
      <button onClick={handleDelayChange}>-{increment}</button>
      <input type="number" value={increment} onChange={(e) => setIncrement(Number(e.target.value))} />
    </div>
  );
}

export default App;
