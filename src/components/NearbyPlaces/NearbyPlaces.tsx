import { getTranslations } from "next-intl/server";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { LocationType } from "~/lib/types";

const NearbyPlaces = async ({
  detail,
  locations,
}: {
  detail: [any];
  locations: LocationType[];
}) => {
  const t = await getTranslations("vridddhashrama.surrounding");
  return (
    <section className="">
      <div className="mx-auto max-w-screen-xl ">
        <div className="mx-auto flex flex-col md:gap-4 gap-2">
          <h2 className="text-left text-gray-950 heading">
            {t("heading")}
          </h2>

          <div className="body md:text-left leading-relaxed">
            <PortableText value={detail} />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {locations.map((location, index) => (
            <a
              key={index}
              className="relative group border border-gray-300  rounded-xl overflow-hidden grid grid-rows-5"
              href={location.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={location.image}
                alt={location.name}
                width={500}
                height={500}
                className="rounded-t-xl object-cover transition duration-500 group-hover:scale-105 group-hover:shadow-xl row-span-4 h-full w-auto"
              />
              <div className="p-4">
                <p className="text-gray-800 subheading" style={{ textTransform: "capitalize" }}>
                  {location.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NearbyPlaces;
