// import P from 'prop-types';
// import './App.css';
// import React, { useCallback, useState } from 'react';

// const Button = React.memo(function Button({ handleClick }) {
//   console.log('Button renderizou');
//   return <button onClick={() => handleClick(10)}>Incrementar</button>;
// });

// Button.propTypes = {
//   handleClick: P.func,
// };

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handleClick = useCallback((num) => {
//     setCounter((prevCounter) => prevCounter + num);
//   }, []);

//   console.log('App renderizou');

//   return (
//     <div className="App">
//       <p>Teste 3</p>
//       <h1>Contador: {counter}</h1>
//       <Button handleClick={handleClick} />
//     </div>
//   );
// }

// export default App;
