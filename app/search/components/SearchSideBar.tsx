function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <p className="text-reg font-light">Mazeikiai</p>
        <p className="text-reg font-light">Vilnius</p>
        <p className="text-reg font-light">Shailiai</p>
        <p className="text-reg font-light">Klaipeda</p>
        <p className="text-reg font-light">Kaunas</p>
      </div>

      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        <p className="text-reg font-light">Mexican</p>
        <p className="text-reg font-light">Italian`</p>
        <p className="text-reg font-light">Chianise</p>
        <p className="text-reg font-light">Getman</p>
        <p className="text-reg font-light">France</p>
      </div>

      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="w-full rounded-l border p-2 text-reg font-light">
            $
          </button>
          <button className="w-full border-t border-b p-2 text-reg font-light">
            $$
          </button>
          <button className="w-full rounded-r border p-2 text-reg font-light">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchSideBar;
