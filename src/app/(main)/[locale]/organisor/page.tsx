import Image from "next/image";
import ScrollDown from "~/components/Hero/ScrollDown";
import FacilityCard from "~/components/Information/FacilityCard";
import { Separator } from "~/components/ui/separator";
import { organisors } from "~/constants";

export default function organisor() {
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="relative w-full h-[500px] overflow-hidden ">
          <Image
            layout="fill"
            objectFit="cover"
            src="/organisationpage.jpeg"
            alt="img"
          />
        </div>

        <div className="absolute bottom-28 md:bottom-28 w-full transform z-10 text-white pointer-events-none">
          <div className="content-container mx-auto flex flex-col gap-4 md:gap-8 items-center text-center">
            <div className="flex flex-col gap-2 md:gap-4">
              <h1 className="title"> Team of Organizers</h1>
              <p className="text-gray-200 subheading leading-relaxed text-center">
                Brings together diverse talents to a resounding success.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`absolute bg-gradient-to-t from-black/75 from-25% to-transparent w-full h-3/5 bottom-0 pointer-events-none`}
        ></div>
        <ScrollDown />
      </div>
      <section className="content-container flex flex-col md:gap-4 gap-2 ">
        <div className="flex flex-row gap-2 ">
          <h1 className="heading text-gray-900 text-left ">Organisers</h1>
          <div className="h-1 w-full bg-secondary-500 rounded-full mt-5"></div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 w-full px-4 md:px-5 md:space-x-3 md:space-y-4">
          {organisors.map((facility, index) => (
            <FacilityCard key={index} facility={facility} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
