import { useContext } from 'react';
import { GlobalContext } from '../contexts/AppContext';

export const P = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    contextState: { body },
    setContextState,
  } = theContext;

  return <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>{body}</p>;
};
