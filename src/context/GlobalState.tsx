import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react';

type StateContextType = {
  authOption: string;
  setAuthOption: Dispatch<SetStateAction<string>>;
  landingDate: Date;
  setLandingDate: Dispatch<SetStateAction<Date>>;
};

export const StateContext = createContext<StateContextType>({
  authOption: 'Login',
  setAuthOption: () => {},
  landingDate: new Date(),
  setLandingDate: () => {},
});

type ContextProviderProps = {
  children: React.ReactNode;
};

export const GlobalProvider = ({ children }: ContextProviderProps) => {
  const [authOption, setAuthOption] = useState('Login');
  const [landingDate, setLandingDate] = useState(new Date());

  return (
    <StateContext.Provider value={{ authOption, setAuthOption, landingDate, setLandingDate }}>
      {children}
    </StateContext.Provider>
  );
};
