import Image from "next/image";
import { FeatureType } from "~/lib/types";

interface Props {
  data: FeatureType[],
  heading?:string
}

const ImageContent: React.FC<Props> = ({ data ,heading}) => {
  return (
    <section className="space-y-4">
      {heading && (
        <h2 className="text-gray-900 text-left heading mt-8">
            {heading}
        </h2>
      )}
      
      {data.map((section, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row border-b-orange-300 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
            } items-center`}
        >
          <div className="md:w-1/2 p-1">
            <h2 className="subheading mb-4">{section.title}</h2>
            <p className="body text-justify leading-relaxed">{section.description}</p>
          </div>
          <div className="md:w-1/2 p-4">
            <Image
              src={section.image}
              alt={section.title}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default ImageContent