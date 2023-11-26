function AuthModalInputs() {
  return (
    <div>
      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="w-[49%] rounded border p-2 py-3"
          placeholder="First Name"
        />

        <input
          type="text"
          className="w-[49%] rounded border p-2 py-3"
          placeholder="Last Name"
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="w-full rounded border p-2 py-3"
          placeholder="Email"
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="w-[49%] rounded border p-2 py-3"
          placeholder="Phone"
        />

        <input
          type="text"
          className="w-[49%] rounded border p-2 py-3"
          placeholder="City"
        />
      </div>

      <div className="my-3 flex justify-between text-sm">
        <input
          type="text"
          className="w-full rounded border p-2 py-3"
          placeholder="Password"
        />
      </div>
    </div>
  );
}

export default AuthModalInputs;
