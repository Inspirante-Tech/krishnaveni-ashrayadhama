import Image from "next/image";

export default function ZigZag({
  contents,
}: {
  contents: { image: string; title: string; description: string }[];
}) {
  return (
    <>
      {contents.map((content, idx) => (
        <section
          className={`flex flex-col md:flex-row gap-6 md:gap-10 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
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
          <div className="md:basis-1/2 basis-auto flex flex-col gap-2 md:gap-4">
            <p
              className="heading text-gray-900"
              style={{ textTransform: "capitalize" }}
            >
              {content.title}
            </p>
            <p className="body text-justify">{content.description}</p>
          </div>
        </section>
      ))}
    </>
  );
}
