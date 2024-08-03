import { useContext } from 'react';
import { GlobalContext } from '../contexts/AppContext';

export const H1 = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};
