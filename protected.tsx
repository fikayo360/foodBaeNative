import { getToken } from './utils/tokenStorage';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from 'react';

type AuthWrapperProps = {
  children: React.ReactElement; 
};

const AuthWrapper:React.FC<AuthWrapperProps> = ({children}) => {
  const navigation = useNavigation()
  useEffect(()=>{
    const getTokenOrNavigate = async() => {
      const token = await getToken();
      if (token){
        return <>{children}</>
      }
      else{
        navigation.navigate('Auth')
      }
  }

  getTokenOrNavigate()
  },[])
  

  return <>{children}</>;
}



  export default AuthWrapper

