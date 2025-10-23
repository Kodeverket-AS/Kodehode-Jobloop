import Image from "next/image";

export default function CompanyCarousel({ content }) {
  return (
    <section className="w-screen py-8 bg-jobloop-primary-grey/5">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kv-black mb-6 underline underline-offset-8 decoration-jobloop-primary-green">
            Noen av våre praksisbedrifter
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...content, ...content].map((item, index) => (
              <div 
                key={`${item._id}-${index}`}
                className="flex-shrink-0 bg-kv-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 cursor-pointer"
              >
                <Image
                  height={80}
                  width={200}
                  src={item.logo}
                  className="h-16 w-auto object-contain mx-auto"
                  alt={item.alt || ""}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
