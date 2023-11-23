function ReservationForm() {
  return (
    <div className="mt-10 flex w-[660px] flex-wrap justify-between">
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="First name"
      />

      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Last name"
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Phone number"
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="email"
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Occasion (optional)"
      />
      <input
        type="text"
        className="mb-4 w-80 rounded border p-3"
        placeholder="Requests (optional)"
      />

      <button className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-300">
        Complete reservation
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
