function Header() {
  return (
    <div>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex">
        <img
          src="https://resizer.otstatic.com/v2/photos/legacy/2/54381049.jpg"
          alt=""
          className="h-18 w-32 rounded"
        />

        <div className="ml-4">
          <h1 className="text-3xl font-bold">The Pembroke</h1>

          <div className="mt-3 flex">
            <p className="mr-6">Tue, Nov, 22, 2023</p>
            <p className="mr-6">6:15 PM</p>
            <p className="mr-6">2 People (Standart seating)</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
