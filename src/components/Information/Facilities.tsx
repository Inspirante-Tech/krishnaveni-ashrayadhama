import { facilities } from "~/constants";
import FacilityCard from "./FacilityCard";

export default function Facilities() {
  return (
    <section className="bg-secondary-50">
      <div className="content-container flex flex-col gap-8">
        <h1 className="heading text-gray-900">
          Facilities
        </h1>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {facilities.map((facility) => (
            <FacilityCard
              key={facility.id}
              title={facility.title}
              image={facility.image}
              description={facility.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
