// import './App.css';
// import { useEffect, useState } from 'react';

// const eventFn = () => {
//   console.log('Cliquei no título');
// };

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [counter2, setCounter2] = useState(0);

//   const handleClick = () => {
//     setCounter((prevCounter) => prevCounter + 1);
//   };

//   const handleClick2 = () => {
//     setCounter2((prevCounter) => prevCounter + 1);
//   };

//   //executa sempre que tem alteracao no component
//   useEffect(() => {
//     console.log('Alterou');
//   });

//   //executa 1x
//   useEffect(() => {
//     console.log('1x');
//   }, []);

//   //executa 1x
//   useEffect(() => {
//     document.querySelector('h1')?.addEventListener('click', eventFn);

//     //limpeza
//     return () => {
//       document.querySelector('h1')?.removeEventListener('click', eventFn);
//     };
//   }, []);

//   //executa sempre que tem alteracao no dependencia
//   useEffect(() => {
//     console.log('C1:', counter, 'C2:', counter2);
//   }, [counter, counter2]);

//   return (
//     <div className="App">
//       <p>Teste 3</p>
//       <h1>Contador: {counter}</h1>
//       <h1>Contador 2: {counter2}</h1>

//       <button onClick={handleClick}>Incrementar</button>
//       <button style={{ marginLeft: '10px' }} onClick={handleClick2}>
//         Incrementar 2
//       </button>
//     </div>
//   );
// }

// export default App;

// // 19:24
