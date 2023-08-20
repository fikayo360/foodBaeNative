import { getToken } from './utils/tokenStorage';
import { useNavigation } from "@react-navigation/native";
import React, { useEffect,useState } from 'react';



const Protected = ({ children }: any) => {
  const [token, setToken] = useState<string | undefined | null>('');
  const navigation = useNavigation();

  useEffect(() => {
    const get = async () => {
      let fetched = await getToken(); // Replace with the actual token retrieval logic
      setToken(fetched);
    };
    get();
  }, []);

  if (token) {
    return <>{children}</>;
  } else {
    navigation.navigate('Auth');
    return null;
  }
};

  export default Protected

