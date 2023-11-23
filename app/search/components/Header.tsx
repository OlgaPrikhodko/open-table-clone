import SearchBar from "../../components/SearchBar";

function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
      <div className="text-center">
        <SearchBar />
      </div>
    </div>
  );
}

export default Header;
