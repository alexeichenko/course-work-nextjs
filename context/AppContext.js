import { createContext, useState } from 'react';

export const Context = createContext(null);

const AppContext = ({ children }) => {
  const [mobileState, setMobileState] = useState(false);

  return (
    <Context.Provider
			value={{
			mobileState,
			setMobileState
			}}>
      {children}
    </Context.Provider>
  );
};

export default AppContext;