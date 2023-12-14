import {
  convertToDisplayTime,
  TimeType,
} from "../../../../utils/convertToDisplayTime";

type HeaderProps = {
  image: string;
  name: string;
  date: string;
  partySize: string;
};

function Header({ image, name, date, partySize }: HeaderProps) {
  const [day, time] = date.split("T");

  const displayedDay = new Date(day).toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div>
      <h3 className="font-bold">You're almost done!</h3>
      <div className="mt-5 flex">
        <img src={image} alt="" className="h-18 w-32 rounded" />

        <div className="ml-4">
          <h1 className="text-3xl font-bold">{name}</h1>

          <div className="mt-3 flex">
            <p className="mr-6">{displayedDay}</p>
            <p className="mr-6">{convertToDisplayTime(time as TimeType)}</p>
            <p className="mr-6">
              {partySize} {partySize === "1" ? "person" : "people"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
