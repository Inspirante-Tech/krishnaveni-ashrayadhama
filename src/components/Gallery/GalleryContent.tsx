"use client"
import { CircleX } from 'lucide-react'
import Image from 'next/image'
import {useRef, useState } from 'react'
import { fetchGalleryImages } from '~/lib/queries'
import {type Image as ImageType } from './types'
import Photo from './Photo'

export function GalleryContent({ images }: { images: ImageType[] }) {
    console.log(fetchGalleryImages())
    const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);
    const dialogRef = useRef<HTMLDialogElement>(null);
  
    const onSelect = (image: ImageType) => {
      setSelectedImage(image);
      dialogRef.current && dialogRef.current.showModal()
    }
  
    const onClose = () => {
      dialogRef.current && dialogRef.current.close();
    };
  
    return (
  
      <>
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          {images.map(image => (
            <Photo
              key={image.id}
              url={image.image}
              alt={image.alt}
              callback={() => onSelect(image)}
            />
          ))}
        </div>
  
        {/* photodialog class refer global.css */}
        <dialog ref={dialogRef} className='w-[80%] h-[80%] bg-primary-200 rounded  photodialog'
          onClick={onClose}
        >
          <div className='w-full h-full flex place-content-center p-4'>
            {selectedImage != null && <Image
              src={selectedImage.image}
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
      </>
    )
  }