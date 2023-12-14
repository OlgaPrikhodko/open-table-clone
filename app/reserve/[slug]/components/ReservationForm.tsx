"use client";

import { CircularProgress } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";
import useReservation from "../../../../hooks/useReservation";

type ReservationFormType = {
  slug: string;
  date: string;
  partySize: string;
};
function ReservationForm({ slug, date, partySize }: ReservationFormType) {
  const [inputs, setInputs] = useState({
    bookerFirstName: "",
    bookerLastName: "",
    bookerPhone: "",
    bookerEmail: "",
    bookerOccasion: "",
    bookerRequest: "",
  });

  const [day, time] = date.split("T");
  const [disabled, setDisabled] = useState(true);
  const { error, loading, createReservation } = useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerPhone &&
      inputs.bookerEmail
    )
      return setDisabled(false);

    setDisabled(true);
  }, [inputs]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async () => {
    const reservation = await createReservation({
      slug,
      day,
      time,
      partySize,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerPhone: inputs.bookerPhone,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerRequest: inputs.bookerRequest,
    });
  };

  return (
    <div className="mt-10 flex w-[660px] flex-wrap justify-between">
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="First name"
        name="bookerFirstName"
        value={inputs.bookerFirstName}
        onChange={handleChangeInput}
      />

      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Last name"
        name="bookerLastName"
        value={inputs.bookerLastName}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Phone number"
        name="bookerPhone"
        value={inputs.bookerPhone}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="email"
        name="bookerEmail"
        value={inputs.bookerEmail}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Occasion (optional)"
        name="bookerOccasion"
        value={inputs.bookerOccasion}
        onChange={handleChangeInput}
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Requests (optional)"
        name="bookerRequest"
        value={inputs.bookerRequest}
        onChange={handleChangeInput}
      />

      <button
        className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-300"
        disabled={disabled || loading}
        onClick={handleClick}
      >
        {loading ? (
          <CircularProgress color="inherit" />
        ) : (
          "Complete reservation"
        )}
      </button>

      <p className="mt-4 text-sm">
        By clicking “Complete reservation” you agree to the OpenTable Terms of
        Use and Privacy Policy. Message & data rates may apply. You can opt out
        of receiving text messages at any time in your account settings or by
        replying STOP.
      </p>
    </div>
  );
}

export default ReservationForm;
