import React, { useState, createContext, ReactNode } from 'react';
import api from './utils/axiosConfig';
import { storeToken } from './utils/tokenStorage';
interface User {
    id:string,
    email: string,
    username: string,
    profile_pic:string
}

interface food  {
  id:string;
  image:any;
  title:string;
  price:number;
  description:string;
  category:string;
  quantity:number;
  created_at:string;
  updated_at:string;
}

interface AppContextType {
  currentUser: User;
  setCurrentUser: (user: User) => void;
  login: (user: User, token: string) => void;
  logout: () => void;
  cartItems:food[];
  addToCart: (product:food) => void;
  removeFromCart:(productTitle: string) => void;
  address:string;
  setNewAddress :(newAddress: string) => void;
  totalValue:number;
  updateQuantity:(productTitle:string) => void;
  deleteQuantity:(productTitle:string) => void
}


const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    
    const [currentUser, setCurrentUser] = useState<User>({ id: '',email:'', username: '',profile_pic:''});
    const [cartItems,setCartItems] = useState<food[]>([])
    const [address,setAddress] = useState('')
    const [totalValue,setTotalValue] = useState(0)
   
    const login = async (user: User, token: string) => {
      setCurrentUser(user);
      await storeToken(token)
      api.defaults.headers.Authorization = `Bearer ${token}`;
      console.log('items saved successfully');
    };
  
    const logout = () => {
      setCurrentUser({  id: '',email:'', username: '',profile_pic:'' });   
      api.defaults.headers.Authorization = null;
    };

    const addToCart = (product:food) => {
      setCartItems([...cartItems, product]);
      console.log('item added to cart');
    };
   
    const removeFromCart = (productTitle: string) => {
      setCartItems(prevCartItems => prevCartItems.filter(item => item.title !== productTitle));
      console.log(`${productTitle} removed from cart`);
    }

    const setNewAddress = (newAddress: string) => {
      setAddress(newAddress)
    }

    // const updateCount = (newCount: number) => {
    //   setCount(prev => prev += newCount)
    // }

    const updateQuantity = (productTitle:string) => {
      const updatedData = cartItems.map(item => {
        if (item.title === productTitle) {
          return {
            ...item,
            count: item.quantity + 1,
          };
        }
        return item;
      });
      setCartItems(updatedData);
    };

    const deleteQuantity = (productTitle:string) => {
      const updatedData = cartItems.map(item => {
        if (item.title === productTitle) {
          return {
            ...item,
            count: item.quantity - 1,
          };
        }
        return item;
      });
      setCartItems(updatedData);
    };

    return (
      <AppContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          login,
          logout,
          cartItems,
          addToCart,
          removeFromCart,
          address,
          setNewAddress,
          totalValue,
          updateQuantity,
          deleteQuantity
        }}
      >
        {children}
      </AppContext.Provider>
    );
  };
  
  export { AppProvider, AppContext };

  
  
  
  
  
  