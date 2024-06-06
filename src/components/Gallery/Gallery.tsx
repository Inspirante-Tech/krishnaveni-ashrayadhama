// "use client";
// import { CircleX } from "lucide-react";
// import Image from "next/image";
// import { useRef, useState } from "react";
// import { type Image as ImageType } from "./types";
// import Photo from "./Photo";
// import { useTranslations } from "next-intl";
// import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
// export function Gallery({ images }: { images: ImageType[] }) {
//   const t = useTranslations("gallery");
//   const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
//   const dialogRef = useRef<HTMLDialogElement>(null);

//   const onSelect = (image: ImageType) => {
//     setSelectedImage(image);
//     dialogRef.current && dialogRef.current.showModal();
//   };

//   const onClose = () => {
//     dialogRef.current && dialogRef.current.close();
//   };
//   const thumbnails = images.map(image => ({
//     id: image.id,
//     image: image.image,
//     title: image.alt,
//     alt: image.alt,
//   }));

//   return (
//     <section className="my-4 content-container">
//       <h2 className="font-bold text-2xl mb-4">{t("heading")}</h2>
//       <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
//         {images.map((image) => (
//           <Photo
//             key={image.id}
//             url={image.image}
//             alt={image.alt}
//             callback={() => onSelect(image)}
//           />
//         ))}
//       </div>

//       {/* photodialog class refer global.css */}
//       <dialog
//         ref={dialogRef}
//         className="w-[80%] h-[80%] bg-primary-200 rounded  photodialog"
//         onClick={onClose}
//       >
//         <ThumbnailCarousel
//           thumbnails={thumbnails}
//           onThumbnailClick={onSelect}
//         />

//         <form method="dialog" className="absolute top-0 right-0 z-10">
//           <button className="m-4" onClick={onClose}>
//             <CircleX className="text-red-500" size={32} />
//           </button>
//         </form> *
//       </dialog>
//     </section>
//   );
// }

"use client";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import { type Image as ImageType } from "./types";
import Photo from "./Photo";
import { useTranslations } from "next-intl";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";

export function Gallery({ images }: { images: ImageType[] }) {
  const t = useTranslations("gallery");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSelect = (image: ImageType) => {
    const index = images.findIndex((img) => img.id === image.id);
    setSelectedImageIndex(index);
    dialogRef.current && dialogRef.current.showModal();
  };

  const onClose = () => {
    dialogRef.current && dialogRef.current.close();
    setSelectedImageIndex(null); // Reset selected image index
  };

  const thumbnails = images.map((image) => ({
    id: image.id,
    image: image.image,
    title: image.alt,
    alt: image.alt,
  }));

  return (
    <section className="my-4 content-container">
      <h2 className="font-bold text-2xl mb-4">{t("heading")}</h2>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {images.map((image) => (
          <Photo
            key={image.id}
            url={image.image}
            alt={image.alt}
            callback={() => onSelect(image)}
          />
        ))}
      </div>

      {/* photodialog class refer global.css */}
      <dialog
        ref={dialogRef}
        className="w-[80%] h-[80%] bg-primary-200 rounded photodialog"
        onClick={onClose}
      >
        {selectedImageIndex !== null && (
          <div onClick={(e) => e.stopPropagation()}>
            <ThumbnailCarousel
              thumbnails={thumbnails}
              initialIndex={selectedImageIndex}
              onThumbnailClick={(thumbnail) => {
                const index = thumbnails.findIndex((img) => img.id === thumbnail.id);
                setSelectedImageIndex(index);
              }}
            />
          </div>
        )}

        <form method="dialog" className="absolute top-0 right-0 z-10">
          <button className="m-4" onClick={onClose}>
            <CircleX className="text-red-500" size={32} />
          </button>
        </form>
      </dialog>
    </section>
  );
}
