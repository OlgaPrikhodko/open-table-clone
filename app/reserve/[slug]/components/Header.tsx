type HeaderProps = {
  image: string;
  name: string;
};

function Header({ image, name }: HeaderProps) {
  return (
    <div>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex">
        <img src={image} alt="" className="h-18 w-32 rounded" />

        <div className="ml-4">
          <h1 className="text-3xl font-bold">{name}</h1>

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
