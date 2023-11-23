function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className="mt-10 mb-7 border-b pb-5 text-3xl font-bold">
        {images.length} photo{images.length > 1 ? "s" : ""}
      </h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img src={image} alt="" className="mr-1 mb-1 h-44 w-56" />
        ))}
      </div>
    </div>
  );
}

export default Images;
