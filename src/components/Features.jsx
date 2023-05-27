import { infos } from "../constants";
import bikeImage from "../assets/bike-img-removebg.png";
const Features = () => {
  return (
    <section className="w-[50%] bg-bgClr flex flex-col  items-center gap-y-10">
      <img
        src={bikeImage}
        alt="bike"
        className=" mt-10 h-[500px]  aspect-auto "
      />
      <div className="flex flex-col lg:flex-row gap-16">
        {infos.map((info) => (
          <div className="text-center " key={info.id}>
            <h3 className=" leading-8 text-white text-[24px] font-bold">
              {info.value}
            </h3>
            <p className=" text-gray-300">{info.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
