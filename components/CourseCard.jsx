"use client";

export default function CourseCard({ content }) {
  return (
    <div className="bg-kv-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-jobloop-primary-green/10 hover:border-jobloop-primary-green/30 overflow-hidden">
      <div className="p-6 space-y-6">
        <div>
          <h3 className="text-2xl font-bold text-kv-black mb-3">{content.title}</h3>
          <div className="h-1 w-full bg-jobloop-primary-orange"></div>
          <p className="pt-4 text-lg text-jobloop-primary-green font-medium">
            {content.subheader}
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="border-l-4 border-jobloop-primary-green pl-4">
            <h4 className="text-lg font-semibold text-kv-black mb-2">Forutsetninger</h4>
            <p className="text-kv-black/70 leading-relaxed">{content.expectations}</p>
          </div>
          
          <div className="border-l-4 border-jobloop-primary-green pl-4">
            <h4 className="text-lg font-semibold text-kv-black mb-2">Tidsplan</h4>
            <p className="text-kv-black/70 leading-relaxed">{content.schedule}</p>
          </div>
          
          <div className="border-l-4 border-jobloop-primary-green pl-4">
            <h4 className="text-lg font-semibold text-kv-black mb-2">Undervisningsform</h4>
            <p className="text-kv-black/70 leading-relaxed">{content.educationStyle}</p>
          </div>
          
          <div className="border-l-4 border-jobloop-primary-green pl-4">
            <h4 className="text-lg font-semibold text-kv-black mb-2">Jobbmarked</h4>
            <p className="text-kv-black/70 leading-relaxed">{content.jobMarket}</p>
          </div>
          
          <div className="border-l-4 border-jobloop-primary-green pl-4">
            <h4 className="text-lg font-semibold text-kv-black mb-2">Sted</h4>
            <p className="text-kv-black/70 leading-relaxed">{content.place}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
