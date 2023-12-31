import { Item } from "@prisma/client";

function MenuCard({ menu }: { menu: Item }) {
  return (
    <div className="mb-3 w-[49%] rounded border p-3">
      <h3 className="text-lg font-bold">{menu.name}</h3>
      <p className="mt-1 text-sm font-light">{menu.description}</p>
      <p className="mt-7">{menu.price}</p>
    </div>
  );
}

export default MenuCard;
