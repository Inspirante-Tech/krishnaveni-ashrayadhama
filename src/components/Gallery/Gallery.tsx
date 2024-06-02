import { Suspense } from 'react'
import { fetchGalleryImages } from '~/lib/queries'
import { GalleryContent } from './GalleryContent'

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

async function GalleryContentWrapper() {
  const images = await fetchGalleryImages();
  return (
    <GalleryContent images={images} />
  )
}

//src https://codepen.io/cruip/pen/JjqbdRB
export default function Gallery() {
  return (
    <section className='my-4 content-container'>
      <h2 className="font-bold text-2xl mb-4">Gallery</h2>
        <Suspense fallback={<SuspenseComponent />}>
          <GalleryContentWrapper />
        </Suspense>
    </section>
  )
}
