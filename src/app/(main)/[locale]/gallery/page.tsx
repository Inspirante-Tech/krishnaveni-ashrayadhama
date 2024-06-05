import { Gallery } from '~/components/Gallery/Gallery'
import { fetchGalleryImages } from '~/lib/queries'

export default async function page() {
  const images = await fetchGalleryImages()
  return (
    <main className='my-12 min-h-screen '>
      <Gallery images={images}/>
    </main>
  )
}
