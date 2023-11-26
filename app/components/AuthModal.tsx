"use client";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
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

              <AuthModalInputs />
              <button className="mb-5 mt-3 w-full rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-100">
                {renderContent("Sign In", "Create your Account")}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
