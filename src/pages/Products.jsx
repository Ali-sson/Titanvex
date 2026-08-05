
import heroPlant from "../assets/hero-plant2.png"
import Navbar from "../components/Navbar"
import ProductsCategory from "../components/products/ProductsCategory"

function Products() {
  return (
    <>
      <Navbar/>
  
        {/* Hero */}
        <header className="relative overflow-hidden bg-primary py-20 lg:py-28">
          <img
            src={heroPlant}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            width={1920}
            height={1080}
          />
          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-2 inline-block border-l-4 border-gold pl-4">
                <span data-aos="fade-up" data-aos-delay="200"  className="font-bold uppercase tracking-[0.25em] text-gold">
                   Products
                </span>
                 </div>
                  <p data-aos="fade-in" className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 md:text-lg">
                A comprehensive range of reliable equipments and machinery for construction, engineering, energy and infrastructure projects.
              </p>
             
            </div>
          </div>
        </header>

        <ProductsCategory/>
       
          </>
 ) }

export default Products