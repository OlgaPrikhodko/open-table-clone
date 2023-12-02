"use client";

import { CircularProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState, ChangeEvent, useEffect, useContext } from "react";
import useAuth from "../../hooks/useAuth";
import { AuthenticationContext } from "../context/AuthContext";
import AuthModalInputs from "./AuthModalInputs";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const { data, loading, error, setAuthState } = useContext(
    AuthenticationContext,
  );
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { signin } = useAuth();

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    password: "",
  });

  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (isSignIn) {
      if (inputs.password && inputs.email) return setDisabled(false);
    } else {
      if (
        inputs.firstName &&
        inputs.lastName &&
        inputs.email &&
        inputs.password &&
        inputs.phone &&
        inputs.city
      )
        return setDisabled(false);
    }

    setDisabled(true);
  }, [inputs]);

  const handleClick = () => {
    if (isSignIn) {
      signin({ email: inputs.email, password: inputs.password });
    }
  };

  return (
    <div>
      <button
        className={`mr-3 rounded border p-2 px-4 ${renderContent(
          "bg-blue-400 text-white",
          "",
        )}`}
        onClick={handleOpen}
      >
        {renderContent("SignIn", "SignUp")}
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading ? (
            <div className="flex h-[500px] justify-center py-24 px-2">
              <CircularProgress />
            </div>
          ) : (
            <div className="h-[500px] p-2">
              <div className="mb-2 border-b pb-2 text-center font-bold uppercase">
                <p className="text-sm">
                  {renderContent("Sign In", "Create Account")}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="text-center text-2xl font-light">
                  {renderContent(
                    "Log Into Your Account",
                    "Create Your OpenTable Account",
                  )}
                </h2>

                <AuthModalInputs
                  inputs={inputs}
                  handleChangeInput={handleChangeInput}
                  isSignIn={isSignIn}
                />
                <button
                  className="mb-5 mt-3 w-full rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-400"
                  disabled={disabled}
                  onClick={handleClick}
                >
                  {renderContent("Sign In", "Create your Account")}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
