import axios from '../api/axios';
import useAuth from './useAuth';

const LOGOUT_URL = '/logout';

const useLogout = () => {
  const { setAuth } = useAuth();

  const logout = async () => {
    setAuth({});

    try {
      const response = await axios(LOGOUT_URL);
    } catch (error) {
      console.error(error);
    }
  };

  return logout;
};

export default useLogout;
