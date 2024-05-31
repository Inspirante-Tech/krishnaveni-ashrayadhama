"use client";
import { CircleX } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const images = [
  "https://cruip-tutorials.vercel.app/masonry/masonry-01.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-02.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-03.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-04.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-05.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-07.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-08.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-09.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-10.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-11.jpg",
  "https://cruip-tutorials.vercel.app/masonry/masonry-12.jpg",
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="my-4">
      <h2 className="font-bold text-2xl mb-4">Gallery</h2>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-auto cursor-pointer transition-opacity duration-1000 transform hover:opacity-80"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="relative max-w-full max-h-full overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt={`Image ${selectedImage + 1}`}
              width={800}
              height={600}
              layout="intrinsic"
              className="rounded"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 bg-white rounded-full p-1"
            >
              <CircleX className="text-red-600" size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
