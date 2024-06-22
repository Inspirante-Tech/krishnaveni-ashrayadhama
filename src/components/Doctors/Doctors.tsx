"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { DoctorType } from "~/lib/types";
import { useTranslations } from "next-intl";
import Profile from "../Profile/Profile";

function Doctors({ doctors }: { doctors: DoctorType[] }) {
  const t = useTranslations("ayurvedicCenter.doctors");
  return (
    <section className="content-container  w-full relative">
      <h2 className="text-center text-gray-900 heading">{t("heading")}</h2>
      <p className="text-center text-sm text-gray-700">{t("description")}</p>
      <div className="w-full flex justify-center sm:mt-2">
        <Carousel
          opts={{ loop: true, dragFree: false, watchDrag: false }}
          plugins={[AutoScroll()]}
          className="w-full mt-4 "
        >
          <CarouselContent className="flex">
            {doctors.map((doctor, index) => (
              <CarouselItem
                key={index}
                className="flex-none p-2 md:p-3 lg:p-4 xl:p-6"
              >
                <Profile
                  name={doctor.name}
                  image={doctor.image}
                  position={doctor.qualification}
                  index={index}
                  className="p-0"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}

export default Doctors;
