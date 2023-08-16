import { useContext } from 'react';
import { AppContext } from '../appContext';

const useApp = () => {
  const context = useContext(AppContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  const { currentUser, setCurrentUser,login,logout,cartItems,addToCart,removeFromCart,address,setNewAddress,totalValue,setTottalValue,updateQuantity,deleteQuantity } = context

  return { currentUser, setCurrentUser,login, logout,cartItems,addToCart,removeFromCart,address,setNewAddress,totalValue,setTottalValue,updateQuantity,deleteQuantity }
};

export default useApp;