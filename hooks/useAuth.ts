import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";

const useAuth = () => {
  const { data, loading, error, setAuthState } = useContext(
    AuthenticationContext,
  );

  const signin = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void,
  ) => {
    try {
      setAuthState({ data: null, loading: true, error: null });
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        },
      );
      setAuthState({ data: response.data, loading: false, error: null });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage,
      });
    }
  };

  const signup = async (
    {
      email,
      password,
      firstName,
      lastName,
      phone,
      city,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phone: string;
      city: string;
    },
    handleClose: () => void,
  ) => {
    try {
      setAuthState({ data: null, loading: true, error: null });
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email,
          password,
          firstName,
          lastName,
          phone,
          city,
        },
      );
      setAuthState({ data: response.data, loading: false, error: null });
      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage,
      });
    }
  };

  return { signin, signup };
};

export default useAuth;
