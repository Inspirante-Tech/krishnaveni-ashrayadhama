import { facilities } from "~/constants";
import FacilityCard from "./FacilityCard";

export default function Facilities()
{
  return(
    <>
        <h1 className="text-center text-2xl sm:text-5xl font-bold font-poppins tracking-tight text-gray-900  sm:pt-16s">Facilities</h1>
        <div className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-4 page-container">
            {facilities.map(facility=>(
                <FacilityCard
                  key={facility.id}
                  title={facility.title}
                  image={facility.image}
                  description={facility.description}
            />
            ))}
        </div>
    </>
  )
}
