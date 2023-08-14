import React, { useState, createContext, ReactNode } from 'react';

interface User {
    id:string,
    email: string,
    username: string,
    profile_pic:string
}

interface AppContextType {
  currentUser: User;
  setCurrentUser: (user: User) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState<User>({ id: '',email:'', username: '',profile_pic:'' });
   
    const login = (user: User, token: string) => {
      setCurrentUser(user);
    };
  
    const logout = () => {
      setCurrentUser({  id: '',email:'', username: '',profile_pic:''  });   
    };
   
    return (
      <AppContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          login,
          logout
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  export { AppProvider, AppContext };

  
  
  
  
  
  