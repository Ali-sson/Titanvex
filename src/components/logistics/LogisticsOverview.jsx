import {
  Truck,
  Warehouse,
  Route,
  ShieldCheck,
} from "lucide-react";

import LogisticsImage from "../../assets/logistics.jpg";

export default function LogisticsIntro() {
  return (
   <section className="bg-white py-24">
  <div className="container mx-auto px-6 lg:px-8">
    
        <div className="mx-auto max-w-7xl text-left">
          <span  className="mb-4 inline-block border-l-4 border-gold pl-4 text-gold font-semibold">
            Logistics & Supply Solutions
          </span>

          <h2 data-aos="fade-up" className="text-3xl md:text-4xl font-bold mb-4 tracking-tight uppercase my-2">
           Coordinating Every Stage of Your <br className="hidden md:block"/> Industrial Supply Chain 
          </h2>

          <p data-aos="fade-up" data-aos-delay="200" className="text-base text-gray-700">
          <p className="text-base text-gray-700">
          Titanvex provides dependable logistics and supply solutions that
          support engineering, construction, manufacturing, and industrial
          projects. We coordinate the transportation, storage, and delivery of
          equipment and materials, ensuring every shipment reaches its
          destination safely, efficiently, and on schedule.
        </p>
          </p>
        </div>

    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Image */}
      <div
        data-aos="fade-in"
        className="mt-12 relative overflow-hidden h-[500px] md:h-[500px]"
      >
        <img
          src={LogisticsImage}
          alt="Titanvex Logistics"
          className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
      </div>


      {/* Content */}
      <div data-aos="fade-right">
        {/* Description */}

        {/* Features */}
        <div className="flex flex-col gap-12 mt-10">

          <div className="flex gap-4 border-b border-slate-200 pb-4">
            <Truck className="text-gold mt-1" />
            <div>
              <h4 className=" font-semibold">Equipment Transport</h4>
              <p className="text-slate-700 text-sm">
                Safe transportation of industrial machinery and heavy equipment.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-b border-slate-200 pb-4">
            <Warehouse className="text-gold mt-1" />
            <div>
              <h4 className=" font-semibold">Warehousing</h4>
              <p className="text-slate-700 text-sm">
                Secure storage with organized inventory management.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-b border-slate-200 pb-4">
            <Route className="text-gold mt-1" />
            <div>
              <h4 className=" font-semibold">Delivery Planning</h4>
              <p className="text-slate-700 text-sm">
                Optimized routes that reduce delays and improve efficiency.
              </p>
            </div>
          </div>

          <div className="flex gap-4 border-b border-slate-200 pb-4">
            <ShieldCheck className="text-gold mt-1" />
            <div>
              <h4 className=" font-semibold">Safe Handling</h4>
              <p className="text-slate-700 text-sm">
                Professional handling of valuable and sensitive industrial cargo.
              </p>
            </div>
          </div>

        </div>

      </div>

    
    </div>

  </div>
</section>

  )}