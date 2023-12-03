"use client";

import axios from "axios";
import { getCookie } from "cookies-next";
import { createContext, ReactNode, useEffect, useState } from "react";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  city: string;
  phone: string;
};

type State = {
  loading: boolean;
  error: string | null;
  data: User | null;
};

type AuthState = State & {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
};

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  error: null,
  data: null,
  setAuthState: () => {},
});

export default function AuthContext({ children }: { children: ReactNode }) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    data: null,
    error: null,
  });

  const fetchUser = async () => {
    setAuthState({ data: null, loading: true, error: null });

    try {
      const jwt = getCookie("jwt");

      if (!jwt) {
        return setAuthState({ data: null, loading: false, error: null });
      }

      const response = await axios.get("http://localhost:3000/api/auth/me", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;

      setAuthState({ data: response.data, loading: false, error: null });
    } catch (error: any) {
      setAuthState({
        data: null,
        loading: false,
        error: error.response.data.errorMessage,
      });
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthenticationContext.Provider value={{ ...authState, setAuthState }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
