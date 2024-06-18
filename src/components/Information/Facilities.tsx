import { getTranslations } from "next-intl/server";
import type { FacilityType } from "~/lib/types";
import FacilityCard from "./FacilityCard";
import Heading from "../Heading/Heading";

export default async function Facilities({
  facilities,
}: {
  facilities: FacilityType[];
}) {
  const t = await getTranslations("home.facilities");
  return (
    <section className="content-container flex flex-col md:gap-4 gap-2 items-center">
      <Heading>
        {t("heading")}
      </Heading>
      <div className="flex flex-wrap justify-center gap-4 w-full px-4 md:px-0">
        {facilities.map((facility, index) => (
          <FacilityCard key={index} facility={facility} index={index} />
        ))}
      </div>
    </section>
  );
}
