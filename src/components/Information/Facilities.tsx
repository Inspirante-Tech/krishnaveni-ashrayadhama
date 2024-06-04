import type { FacilityType } from "~/lib/types";

export default function Facilities({ facilities }: { facilities: FacilityType[] }) {
  return (
    <section className="bg-secondary-50">
      <div className="content-container flex flex-col gap-8">
        <h1 className="heading text-gray-900">
          Facilities
        </h1>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {facilities.map((facility, index) => (<FacilityCard
            key={index}
            facility={facility}
          />))}
        </div>
      </div>
    </section>
  );
}

function FacilityCard({ facility }: { facility: FacilityType }) {
  return (
    <div className='flex justify-evenly md:max-w-56 mt-8 transition duration-200 ease-out hover:-translate-y-2 shadow-lg'>
      <div className='relative m-2'>
        <img src={facility.image} alt='facility-img' className='mt-8 w-40 h-40 md:w-36 md:h-36 rounded-full object-cover object-center mx-auto' />
        <div className='m-4 text-center flex flex-col space-y-4'>
          <h1 className='text-lg'>{facility.title}</h1>
          <h3 className='text-md '>{facility.description}</h3>
        </div>
      </div>
    </div>
  )
}
