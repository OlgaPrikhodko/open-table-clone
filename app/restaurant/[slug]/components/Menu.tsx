import { Item } from "@prisma/client";
import MenuCard from "./MenuCard";

function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="mt-10 bg-white">
      <div>
        <div className="mt-4 mb-1 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>

        {menu.length > 0 ? (
          <div className="flex flex-wrap justify-between">
            {menu.map((item) => (
              <MenuCard menu={item} key={item.id} />
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap justify-between">
            <p>This restaurant does not have a menu for the moment.</p>
          </div>
        )}
      </div>
    </main>
  );
}

export default Menu;
