import { ErrorBoundary } from 'next/dist/client/components/error-boundary'
import { Suspense } from 'react'
import { fetchGalleryImages } from '~/lib/queries'
import { GalleryContent } from './GalleryContent'

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

const ErrorComponent = () => {
  return (
    <div className='w-ful h-full p-8 grid place-content-center'>
      <span className='text-red-600'>Something went wrong</span>
    </div>
  )
}

const SuspenseComponent = () => {
  return (
    <div className='w-ful h-full p-8 grid place-content-center'>
      <span className='text-gray-500'>Loading</span>
    </div>
  )
}

interface Image {
  image: string,
  id: string,
  alt: string
}

async function GalleryContentWrapper() {
  const images = await fetchGalleryImages();
  return (
    <GalleryContent images={images} />
  )
}



//src https://codepen.io/cruip/pen/JjqbdRB
export default function Gallery() {
  return (
    <section className='my-4'>
      <h2 className="font-bold text-2xl mb-4">Gallery</h2>
        <Suspense fallback={<SuspenseComponent />}>
          <GalleryContentWrapper />
        </Suspense>
    </section>
  )
}
