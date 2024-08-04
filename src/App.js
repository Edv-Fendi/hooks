import React, { createContext, useContext, useReducer, useRef } from 'react';
import P from 'prop-types';
import './App.css';

//actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
  INCREMENTAR_CONTADOR: 'INCREMENTAR_CONTADOR',
};

//data.js
export const globalState = {
  title: 'O titulo do contexto blablabla',
  body: 'O body do contexto',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: action.payload };
    case actions.INCREMENTAR_CONTADOR:
      return { ...state, counter: state.counter + 1 };
  }
  return { ...state };
};
//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: P.node,
};

//H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();
  const {
    state: { title },
  } = context;
  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{title}</h1>
      <input type="text" ref={inputRef} placeholder="Insira seu Texto" />
    </>
  );
};

function App() {
  return (
    <AppContext>
      <div className="App">
        <H1 />
      </div>
    </AppContext>
  );
}

export default App;
