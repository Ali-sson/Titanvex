import fright from "../assets/Freight.jpg";
import Truck from "../assets/truckSupply.jpg";

const cards = [
  {
    image: fright
  },
  {
    image: Truck
  },
];

export default function LogisticsSection() {
  return (
    <section className="bg-gray-100 py-6 ">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:justify-between">
        {/* Left Content */}

          <div>
              <h1 data-aos="fade-up" data-aos-delay="200"  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">Supply Chain Solutions</h1>
              <h1 data-aos="fade-up" data-aos-delay="400"  className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Our Logistics & Supply <br/> Chain Solutions</h1>
              <p data-aos="fade-up" data-aos-delay="600"  className="text-base text-gray-700">
               We provide end-to-end logistics, procurement, and supply chain solutions that ensure the seamless movement of equipment, materials, and resources. From global sourcing and freight coordination to warehousing and on-site delivery, we help keep your projects on schedule and your operations running efficiently.
              </p>
              
      
          <button className="mt-8 rounded-lg bg-gold px-7 py-4 text-sm font-semibold text-white transition hover:bg-gold-dark">
            Learn More →
          </button>
          </div>
      

        {/* Right Images */}
        <div className="gap-6 hidden lg:flex">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`group relative h-[430px] w-[260px] overflow-hidden rounded-3xl shadow-xl transition duration-500 hover:-translate-y-2 ${
                index === 1 ? "mt-8" : ""
              }`}
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              {/* Arrow
              <button className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/40 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white hover:text-black">
                <ArrowUpRight size={18} />
              </button> */}

              {/* Text */}
              <div className="absolute bottom-6 left-6">
                <h3 className="max-w-[170px] text-xl font-semibold leading-snug text-white">
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}