import { useEffect, useState } from 'react';
import axios from 'axios';

const useAuth = () => {
  const [auth, setAuth] = useState();

  const verifyAuth = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/auth/is_logged_in/', {
        withCredentials: true,
        // credentials: 'include',
      });
      console.log(true);

      return res.data;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  useEffect(() => {
    (async () => {
      const data = await verifyAuth();
      setAuth(data);
    })();
  });
  return { auth };
};

export default useAuth;
