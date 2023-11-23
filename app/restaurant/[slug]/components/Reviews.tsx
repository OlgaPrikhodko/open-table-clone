function Reviews() {
  return (
    <div>
      <h1 className="mt-10 mb-7 border-b pb-5 text-3xl font-bold">
        What 100 people are saying
      </h1>
      <div>
        {/* REVIEW CARD */}
        <div className="m mb-7 border-b pb-7">
          <div className="flex">
            <div className="flex w-1/6 flex-col items-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-400">
                <h2 className="text-2xl text-white">MJ</h2>
              </div>
              <p className="mt-2 text-center">Micheal Jordan</p>
            </div>
            <div className="ml-10 w-5/6">
              <div className="flex items-center">
                <div className="mr-5 flex">*****</div>
              </div>
              <div className="mt-5">
                <p className="text-lg font-light">
                  Had a lovely time celebrating my two friends 30th birthdays. I
                  arrived early to give the staff a cake and candles and paid
                  for a bottle of Prosecco. When we arrived at the table, the
                  Prosecco was there waiting. The staff were great, food was
                  delicious and our two birthdays girls got a complimentary
                  table after the cake was brought out! Fabulous evening!
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* REVIEW CARD */}
      </div>
    </div>
  );
}

export default Reviews;
