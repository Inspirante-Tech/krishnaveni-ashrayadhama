import { getLocale } from "next-intl/server";
import { Gallery } from "~/components/Gallery/Gallery";
import { fetchGalleryImages } from "~/lib/queries";

export default async function page() {
  const locale = await getLocale();
  const images = await fetchGalleryImages(locale);
  return (
    <main className="min-h-screen ">
      <div className="pt-20">
        <Gallery images={images} />
      </div>
    </main>
  );
}
