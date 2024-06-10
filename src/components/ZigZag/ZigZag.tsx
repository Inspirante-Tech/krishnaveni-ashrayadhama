import Image from "next/image";
import { SectionType } from "~/lib/types";

export default function ZigZag({ contents }: { contents: SectionType[] }) {
  return (
    <>
      {contents.map((content, idx) => (
        <section
          className={`flex flex-col md:flex-row gap-6 md:gap-10 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"} ${idx % 2 === 0 ? "bg-secondary-300/50" : "bg-primary-300/50"} rounded-2xl`}
          key={`aboutContent${idx}`}
        >
          <div className="relative rounded-2xl hover:shadow-xl transition ease-out duration-500 basis-auto md:basis-1/2 overflow-clip aspect-video md:aspect-auto group">
            <Image
              className="object-cover group-hover:scale-105 transition ease-out duration-700"
              src={content.image}
              alt={content.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="md:basis-1/2 basis-auto flex flex-col gap-2 md:gap-4 px-10 md:py-12 pb-8">
            <p
              className="subheading text-gray-900"
              style={{ textTransform: "capitalize" }}
            >
              {content.title}
            </p>
            <p className="body text-justify  leading-relaxed ">
              {content.description}
            </p>
          </div>
        </section>
      ))}
    </>
  );
}
