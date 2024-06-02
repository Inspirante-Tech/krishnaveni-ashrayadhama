import ImageContent from "~/components/ImageContent/ImageContent";
import { AyurvedicImageContentsImageContents } from "~/constants";

function page() {
  return (
    <main  className="bg-white  page-container">
      <section className="content-container">
        <h2 className="text-3xl   md:text-5xl font-bold mt-12 p-6 text-action-950 ">
          Ayurvedic Center
        </h2>
        <p className="mt-1 text-gray-800 p-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
          sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
        </p>
      </section>
      <ImageContent data={AyurvedicImageContentsImageContents} />
    </main>
  );
}

export default page;
