"use client"
import { CircleX } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

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
  "https://cruip-tutorials.vercel.app/masonry/masonry-12.jpg"
]

interface PhotoProps {
  url: string
  alt: string
  callback: () => void
}

const Photo: React.FC<PhotoProps> = ({ url, alt, callback }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (imageRef.current) {
            observer.unobserve(imageRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);
  return (
    <div className="relative overflow-hidden rounded-xl shadow-lg"
      onClick={callback}
    >
      <Image
        ref={imageRef}
        className={`transition-opacity duration-1000 transform ${isVisible ? "opacity-100" : "opacity-0"
          } w-full h-auto`}
        src={url}
        alt={alt}
        width={232}
        height={290}
      />
      <div
        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
      >
        <span className="text-white text-lg font-bold">View</span>
      </div>
    </div>
  )
}

//src https://codepen.io/cruip/pen/JjqbdRB
export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const onSelect = (index: number) => {
    setSelectedImage(index);
    dialogRef.current && dialogRef.current.showModal()
  }

  const onClose = () => {
    dialogRef.current && dialogRef.current.close();
  };

  return (
    <section className='my-4'>
      <h2 className="font-bold text-2xl mb-4">Gallery</h2>
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {images.map((image, key) => (
          <Photo
            key={key}
            url={image}
            alt={key.toString()}
            callback={() => onSelect(key)}
          />
        ))}
      </div>

        {/* photodialog class refer global.css */}
      <dialog ref={dialogRef} className= 'w-[80%] h-[80%] bg-primary-200 rounded  photodialog' >
        <div className='w-full h-full flex place-content-center p-4'>
          {selectedImage!=null && <Image
            src={images[selectedImage]}
            width="232" height="290"
            alt={"popup"}
            className="rounded w-full h-auto object-contain"
          />}
        </div>

        <form method="dialog" className="absolute top-0 right-0 z-10">
          <button className="m-4" onClick={onClose}>
            <CircleX className="text-red-600" size={32} />
          </button>
        </form>
      </dialog>
    </section>
  )
}
