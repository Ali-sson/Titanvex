import { FaWhatsapp } from "react-icons/fa6";

const WhatsAppFloat = () => {
  const phoneNumber = "2348012345678";
  const message = encodeURIComponent(
    "Hello! I'm interested in your engineering and logistics services."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <span className="absolute right-20 top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-slate-900 px-3 py-2 text-sm text-white shadow-lg group-hover:block">
        Chat with us
      </span>

      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <FaWhatsapp className="text-4xl" />
      </a>
    </div>
  );
};

export default WhatsAppFloat;