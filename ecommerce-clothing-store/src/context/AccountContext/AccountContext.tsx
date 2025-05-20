import { createContext, useEffect, useState } from "react";

interface AccountContextData {
  isLogged: boolean;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  showLoginForm: boolean;
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AccountContext = createContext({} as AccountContextData);

interface AccountProviderProps {
  children: React.ReactNode;
}

export const AccountProvider: React.FC<AccountProviderProps> = ({
  children,
}) => {
  const [isLogged, setIsLogged] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  //   const showLoginForm = () => {};

  useEffect(() => {
    console.log("teste");
  }, []);


  return (
    <AccountContext.Provider
      value={{ isLogged, setIsLogged, showLoginForm, setShowLoginForm }}
    >
      {children}
    </AccountContext.Provider>
  );
};
