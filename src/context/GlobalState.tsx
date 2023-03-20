import { createContext, useState, Dispatch, SetStateAction, useContext } from 'react';

export type GlobalContent = {
  authOption: string;
  setAuthOption: (c: string) => void;
  landingDate: Date;
  setLandingDate: (c: Date) => void;
};

export const GlobalContext = createContext<GlobalContent>({
  authOption: 'Login',
  setAuthOption: () => {},
  landingDate: new Date(),
  setLandingDate: () => {},
});

// const useGlobalContext = () => useContext(GlobalContext);

export const GlobalProvider = (children: any) => {
  const [authOption, setAuthOption] = useState('Login');
  const [landingDate, setLandingDate] = useState(new Date());

  return (
    <GlobalContext.Provider value={{ authOption, setAuthOption, landingDate, setLandingDate }}>
      {children}
    </GlobalContext.Provider>
  );
};
