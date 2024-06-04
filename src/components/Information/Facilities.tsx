import type { FacilityType } from "~/lib/types";
import FacilityCard from "./FacilityCard";

export default function Facilities({
  facilities,
}: {
  facilities: FacilityType[];
}) {
  return (
    <section className="">
      <div className="content-container flex flex-col gap-8">
        <h1 className="heading text-gray-900">Facilities</h1>
        <div className="flex flex-wrap justify-center gap-4 w-full px-4 md:px-0">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} facility={facility} />
          ))}
        </div>
      </div>
    </section>
  );
}
