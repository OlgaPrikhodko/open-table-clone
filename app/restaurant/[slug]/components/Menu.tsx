import MenuCard from "./MenuCard";

function Menu() {
  return (
    <main className="mt-10 bg-white">
      <div>
        <div className="mt-4 mb-1 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>

        <div className="flex flex-wrap justify-between">
          <MenuCard />
        </div>
      </div>
    </main>
  );
}

export default Menu;
