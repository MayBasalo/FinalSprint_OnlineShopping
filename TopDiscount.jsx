const TopDiscount = () => {
  return (
    <div className="bg-white">
      <div className="bg-image2 text-white flex flex-row w-full justify-between m-2 bg-slate-800">
        <div className="flex flex-col gap-4 p-6 bg-black m-2">
          <h2 className="m-2 text-4xl font-extrabold text-red-500">Up to 70% OFF</h2>
          <p className="m-2 font-bold">*Free Delivery for a Minimum Order of $100 *</p>
          <div className="flex justify-center text-center">
            <button className="bg-black rounded-md w-40">ORDER NOW</button>
          </div>
        </div>
        <div className=" flex flex-col gap-4 bg-image3 p-4 m-4">
          <h4>
            <span className="text-2xl font-extrabold text-red-500 mr-1">NEW</span>
            <span className="text-2xl font-extrabold text-white">ARRIVALS</span>
          </h4>
          <div className="flex justify-center">
            <h4>
              <span className="text-2xl font-extrabold  text-white mr-1">ENJOY</span>
              <span className="text-2xl font-extrabold text-red-500">SHOPPING</span>
            </h4>
          </div>

        </div>
        <div className="flex flex-col gap-10 justify-center text-center text-red-500 m-4 p-2 bg-black">
          <h1 className="text-3xl font-extrabold">
             GIFT SHOP
          </h1>
          <span className="text-2xl font-extrabold text-white"> Great Deals </span>
        </div>
      </div>
    </div>
  );
}

export default TopDiscount
