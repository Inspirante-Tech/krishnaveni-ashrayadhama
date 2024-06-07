import { getTranslations } from "next-intl/server";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { LocationType } from "~/lib/types";

const NearbyPlaces = async ({ detail, locations }: { detail: [any], locations: LocationType[] }) => {
  const t = await getTranslations("vridddhashrama.surrounding")
  return (
    <section className="bg-white  mt-10">
      <div className="mx-auto max-w-screen-xl ">
        <div className="mx-auto  text-center">
          <h2 className="text-2xl text-center md:text-left font-bold  text-action-950 md:text-4xl">
            {t("heading")}
          </h2>

          <div className="mt-4 text-gray-800 md:text-left leading-relaxed">
            <PortableText value={detail} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((location, index) => (
            <div key={index} className="relative group border border-gray-300  rounded-xl overflow-hidden">
              <a href={location.url} target="_blank" rel="noopener noreferrer" className="block">
                <Image
                  src={location.image}
                  alt={location.name}
                  width={1000}
                  height={1000}
                  className="rounded-t-xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-xl"
                />
              </a>
              <div className="p-4">
                <p className="text-gray-800 text-lg font-semibold mb-2">{location.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
