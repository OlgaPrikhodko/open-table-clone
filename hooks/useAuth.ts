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

  const signup = async () => {};

  return { signin, signup };
};

export default useAuth;
