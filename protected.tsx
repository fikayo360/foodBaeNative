import { getToken } from './utils/tokenStorage';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect,useState } from 'react';

type AuthWrapperProps = {
  children: React.ReactElement; 
};

const AuthWrapper:React.FC<AuthWrapperProps> = ({children}) => {
  const [token, setToken] = useState<string|null|undefined>('');
  const navigation = useNavigation()
  useEffect(() => {
    const getTokenOrNavigate = async () => {
      const fetchedToken = await getToken();
      setToken(fetchedToken);
      console.log(fetchedToken);

      if (fetchedToken === null) {
        navigation.navigate('Auth');
      }
    };

    getTokenOrNavigate();
  }, [token, navigation]);

  return <>{children}</>;
};



  export default AuthWrapper

