import Image from "next/image";
import ZigZag from "~/components/ZigZag/ZigZag";
import { aboutContent } from "~/constants";

function About() {
  return (
    <main className="space-y-16 md:space-y-20 min-h-screen content-container">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <div
          className="text-gray-900 text-left heading"
          style={{ textTransform: "capitalize" }}
        >
          About Ashraya Dhama
        </div>
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
      <ZigZag contents={aboutContent} />
    </main>
  );
}
export default About;
