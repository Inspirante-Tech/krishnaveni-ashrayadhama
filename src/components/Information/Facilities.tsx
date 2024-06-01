import { facilities } from "~/constants";
import FacilityCard from "./FacilityCard";

export default function Facilities()
{
  return(
    <section className="content-container">
        <h1 className="text-center text-2xl sm:text-5xl font-bold font-poppins tracking-tight text-gray-900">Facilities</h1>
        <div className="flex flex-wrap justify-between  md:space-x-8">
            {facilities.map(facility=>(
                <FacilityCard
                  key={facility.id}
                  title={facility.title}
                  image={facility.image}
                  description={facility.description}
            />
            ))}
        </div>
    </section>
  )
}
