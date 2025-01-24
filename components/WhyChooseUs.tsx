import React from "react";
import { SquareCheckBig } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className="w-full h-full px-5 bg-slate-400/10 py-10">
      <div className="container h-full grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center text-blue-900 font-semibold text-4xl py-10">
          Why Choose Us
        </div>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5">
            <div className="flex gap-3 font-[family-name:var(--font-rethink)]">
              <span className="text-red-500">
                <SquareCheckBig />
              </span>
              <p>
                We facilitate the final road transport safety agency examination
                leading to certification and award of a Drivers Licence class B
                rating.
              </p>
            </div>
            <div className="flex gap-3 font-[family-name:var(--font-rethink)]">
              <span className="text-red-500">
                <SquareCheckBig />
              </span>
              <p>We offer personalized instructions according to needs</p>
            </div>
            <div className="flex gap-3 font-[family-name:var(--font-rethink)]">
              <span className="text-red-500">
                <SquareCheckBig />
              </span>
              <p>
                We allow flexible time options to suit even workers time
                schedules.
              </p>
            </div>
            <div className="flex gap-3 font-[family-name:var(--font-rethink)]">
              <span className="text-red-500">
                <SquareCheckBig />
              </span>
              <p>
                We offer in addition to the Drivers Licenc an in houe
                certification of attendance.
              </p>
            </div>
            <div className="flex gap-3 font-[family-name:var(--font-rethink)]">
              <span className="text-red-500">
                <SquareCheckBig />
              </span>
              <p>
                We offer short refresher courses for both individuals and
                instructions. i.e Defensive driving to lessen Road Traffic
                Accidents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
