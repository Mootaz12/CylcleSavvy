const Intro = () => {
  return (
    <section className=" bg-black w-[50%] ">
      <div className=" justify-self-center items-self-center mt-20 ml-20">
        <h1 className=" leading-tight text-[72px] text-white max-w-[400px]">
          Take the streets.
          <span className="text-pink-600 text-[50px]">CycleSeavvy</span>
        </h1>
        <p className=" text-gray-300 max-w-[500px] leading-8 mt-10">
          <span className="text-[24px] font-bold text-white">
            Shift your ride, not your gears.
          </span>{" "}
          Ease your path toward the fastest way to movein the cit. Free your
          mind as the bike adapts intuitively to power the speed you need.
        </p>
        <div className="flex gap-x-6 items-center mt-10 ">
          <button
            type="button"
            className=" text-white text-xl bg-pink-600 rounded-xl p-4"
          >
            Book a test ride
          </button>
          <p className="text-white">Configure yours</p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
