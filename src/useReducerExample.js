// import React, { useReducer } from 'react';

// import './App.css';

// export const globalState = {
//   title: 'O titulo do contexto blablabla',
//   body: 'O body do contexto',
//   counter: 0,
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'muda': {
//       console.log('Mudou o titulo no dia: ', action.payload);
//       return { ...state, title: `Novo Titulo: ${action.payload}` };
//     }
//     case 'contador': {
//       return { ...state, counter: state.counter + 1 };
//     }
//     case 'inverter': {
//       const { title } = state;
//       return { ...state, title: title.split('').reverse().join('') };
//     }
//   }
//   return { ...state };
// };

// function App() {
//   const [state, dispatch] = useReducer(reducer, globalState);
//   const { title, body, counter } = state;
//   return (
//     <div className="App">
//       <h1>
//         {title}: {counter}
//       </h1>
//       <button onClick={() => dispatch({ type: 'muda', payload: new Date().toLocaleString('pt-BR') })}>Contador</button>
//       <button onClick={() => dispatch({ type: 'contador' })}>Contador</button>
//       <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
//     </div>
//   );
// }

// export default App;
