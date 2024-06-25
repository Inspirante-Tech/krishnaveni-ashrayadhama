import { getLocale, getTranslations } from "next-intl/server";
import Image from "next/image";
import Heading from "~/components/Heading/Heading";
import ScrollDown from "~/components/Hero/ScrollDown";
import Profile from "~/components/Profile/Profile";
import { fetchOrganisationPage } from "~/lib/queries";
import Reveal from "~/components/Animations/reveal";

export default async function page() {
  const t = await getTranslations("organisation");
  const locale = await getLocale();
  const data = await fetchOrganisationPage(locale);

  return (
    <main>
      <section className="relative w-full h-full">
        <div className="relative w-full h-[500px] overflow-hidden">
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
              <h1 className="title">{t("heading")}</h1>
              <p className="text-gray-200 subheading leading-relaxed text-center">
                {t("content")}
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bg-gradient-to-t from-black/75 from-25% to-transparent w-full h-3/5 bottom-0 pointer-events-none"></div>
        <ScrollDown targetId="faculty" />
      </section>

      <section
        className="content-container flex flex-col md:gap-4 gap-2"
        id="faculty"
      >
        <Heading seperatorColor="secondary">{t("Trustee")}</Heading>
        <div className="flex flex-col w-full items-center md:items-start gap-10">
          {data.trustees.map((trustee, index) => (
            <Reveal
              key={index}
              className={`px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-2 md:gap-6  ${index % 2 === 0 ? "bg-gradient-to-br from-secondary-300/50 to-secondary-100/30" : "bg-gradient-to-bl from-primary-300/50 to-primary-100/30"} rounded-2xl`}
              delay={0.2 * index}>
              <Image
                src={trustee.image}
                alt={trustee.name}
                width={200}
                height={200}
                priority={false}
                className="aspect-square rounded-full w-full max-w-40 object-cover object-center"
              />
              <div className="flex flex-col gap-2">
                <strong className="text-xl">{trustee.name}</strong>
                <span className="text-gray-800 font-semibold text-lg">{trustee.position}</span>
                <p className="body">
                  {trustee.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="content-container">
        <Heading seperatorColor="secondary">{t("faculty")}</Heading>
        <div className="flex flex-wrap justify-center gap-4 w-full">
          {data.members.map((member, index) => (
            <Profile
              key={index}
              index={index}
              name={member.name}
              image={member.image}
              position={member.position}
              layout="vertical" // Use vertical layout for faculty
              className="bg-secondary-300 w-52"
            />
          ))}
        </div>
      </section>
    </main>
  );
}