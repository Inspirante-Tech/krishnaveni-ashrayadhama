import Image from "next/image";
interface PhotoProps {
  url: string;
  alt: string;
  callback: () => void;
}

const Photo: React.FC<PhotoProps> = ({ url, alt, callback }) => {
  return (
    <div
      className="relative rounded-xl shadow-lg cursor-pointer overflow-clip"
      onClick={callback}
    >
      <Image
        className="w-full"
        src={url}
        alt={alt}
        width={232}
        height={290}
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer">
        <span className="text-white text-lg font-bold">View</span>
      </div>
    </div>
  );
};

export default Photo;
