"use client";

export default function CourseCard({ content }) {
  return (
    <div className="flex flex-col rounded-md px-5 py-3 shadow-md md:py-5 bg-kv-white">
      <h3>{content.title}</h3>
      <p className="pb-3 border-b-4 border-jobloop-primary-orange md:pt-5">
        {content.subheader}
      </p>
      <h4 className="pt-3 md:pt-5">Forutsetninger</h4>
      <p>{content.expectations}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Tidsplan</h4>
      <p>{content.schedule}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Undervisningsform</h4>
      <p>{content.educationStyle}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Jobbmarked</h4>
      <p>{content.jobMarket}</p>
      <div className="border-b-2 pt-2"></div>
      <h4 className="pt-3 md:pt-5">Sted</h4>
      <p>{content.place}</p>
    </div>
  );
}
