import Image from "next/image";
import { aboutContent } from "~/constants";

function About() {
  return (
    <main className="space-y-16 md:space-y-20 min-h-screen content-container">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <h1
          className="text-gray-900 text-left heading"
          style={{ textTransform: "capitalize" }}
        >
          About Ashraya Dhama
        </h1>
        <p className="body text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
          asperiores aut tempore voluptatibus minus placeat ad eveniet numquam
          voluptatum accusantium. Ipsa voluptatum consequuntur sit fugit
          temporibus voluptate nesciunt perferendis facere, adipisci eum
          dignissimos corrupti deserunt sint numquam. Quidem maiores ipsum
          corrupti sunt, quis dignissimos repudiandae tenetur recusandae labore
          tempora eos eum aperiam eius numquam suscipit, sit accusantium sequi
          neque quas ullam. Culpa reiciendis pariatur et, reprehenderit ea quos
          laudantium architecto voluptas natus veniam illo eligendi quae
          asperiores saepe voluptate, suscipit modi blanditiis expedita
          repellendus. Iusto quas et libero necessitatibus minima. Incidunt
          voluptate cum itaque laboriosam ipsum repellendus quasi error! Sit
          corporis quod, velit dignissimos porro doloribus blanditiis accusamus
          similique neque officiis modi quo veritatis aspernatur quidem nisi in
        </p>
      </section>
      {aboutContent.map((content, idx) => (
        <section
          className={`flex flex-col md:flex-row gap-6 md:gap-10 ${idx % 2 === 0 ? "" : "md:flex-row-reverse"}`}
          key={`aboutContent${idx}`}
        >
          <div className="relative rounded-2xl hover:shadow-xl transition ease-out duration-500 basis-auto md:basis-1/2 overflow-clip aspect-video md:aspect-auto group">
            <Image
              className="object-cover group-hover:scale-105 transition ease-out duration-700"
              src={content.img}
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
            <p className="body text-justify">{content.content}</p>
          </div>
        </section>
      ))}
    </main>
  );
}
export default About;
