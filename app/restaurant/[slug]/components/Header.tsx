function Header({ slug }: { slug: string }) {
  const renderTitle = () => {
    const nameArray = slug.split("-");
    nameArray[nameArray.length - 1] = `(${nameArray.at(-1)})`;
    return nameArray.join(" ");
  };

  return (
    <div className="h-96 overflow-hidden">
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
        <h1 className="text-center text-7xl capitalize text-white drop-shadow">
          {renderTitle()}
        </h1>
      </div>
    </div>
  );
}

export default Header;
