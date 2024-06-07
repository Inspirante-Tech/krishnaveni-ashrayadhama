import Image from "next/image";
import { FeatureType } from "~/lib/types";

interface Props {
  data: FeatureType[],
  heading?:string
}

const ImageContent: React.FC<Props> = ({ data ,heading}) => {
  return (
    <section className="space-y-8  bg-mt-10 content-container">
      {heading && (
        <h2 className="text-2xl text-center md:text-left font-bold  text-action-950 md:text-4xl uppercase">
            {heading}
        </h2>
      )}
      
      {data.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row border-b-orange-300 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center`}
        >
          <div className="md:w-1/2 p-4">
            <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
            <p className="text-lg text-gray-700">{section.description}</p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageContent