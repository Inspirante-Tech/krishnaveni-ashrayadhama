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
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSelect = (image: ImageType) => {
    setSelectedImage(image);
    dialogRef.current && dialogRef.current.showModal();
  };

  const onClose = () => {
    dialogRef.current && dialogRef.current.close();
  };
  const thumbnails = images.map(image => ({
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
        className="w-[80%] h-[80%] bg-primary-200 rounded  photodialog"
        onClick={onClose}
      >
        <ThumbnailCarousel
          thumbnails={thumbnails}
          onThumbnailClick={onSelect}
        />

        <form method="dialog" className="absolute top-0 right-0 z-10">
          <button className="m-4" onClick={onClose}>
            <CircleX className="text-red-500" size={32} />
          </button>
        </form> *
      </dialog>
    </section>
  );
}

//  only Thumbnail Carousel->
// "use client"
// import { CircleX } from 'lucide-react'
// import Image from 'next/image'
// import { useRef, useState } from 'react'
// import { type Image as ImageType } from './types'
// import { useTranslations } from 'next-intl'
// import ThumbnailCarousel from '../ThumbnailCarousel/ThumbnailCarousel'

// export function Gallery({ images }: { images: ImageType[] }) {
//   const t = useTranslations("gallery")
//   const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
//   const dialogRef = useRef<HTMLDialogElement>(null);

//   const onSelect = (image: ImageType) => {
//     setSelectedImage(image);
//     dialogRef.current && dialogRef.current.showModal()
//   }

//   const onClose = () => {
//     dialogRef.current && dialogRef.current.close();
//   };

  // const thumbnails = images.map(image => ({
  //   id: image.id,
  //   image: image.image,
  //   title: image.alt,
  //   alt: image.alt,
  // }));

//   return (
//     <section className='my-4 content-container mt-35'>
//       <h2 className="text-3xl md:text-5xl font-bold  p-6 text-action-950">{t("heading")}</h2>
//       <ThumbnailCarousel
//         thumbnails={thumbnails}
//         onThumbnailClick={onSelect}
//       />

//       {/* photodialog class refer global.css */}
//       <dialog ref={dialogRef} className='w-[80%] h-[80%] bg-primary-50 rounded photodialog' onClick={onClose}>
//         <div className='w-full h-full flex place-content-center p-4'>
//           {selectedImage != null && <Image
//             src={selectedImage.image}
//             width="232" height="290"
//             alt={"popup"}
//             className="rounded w-full h-auto object-contain"
//           />}
//         </div>
//         <form method="dialog" className="absolute top-0 right-0 z-10">
//           <button className="m-4" onClick={onClose}>
//             <CircleX className="text-red-600" size={32} />
//           </button>
//         </form>
//       </dialog>
//     </section>
//   )
// }
