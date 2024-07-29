import { getLocale } from "next-intl/server";
import { redirect } from "next/navigation";
import { Gallery } from "~/components/Gallery/Gallery";
import { IMAGES_PER_PAGE } from "~/constants";
import { fetchGallery } from "~/lib/queries";

export default async function page({ params }: { params: { pageno: string } }) {
  let pageNo = parseInt(params.pageno);
  pageNo = Number.isNaN(pageNo) ? 1 : pageNo;

  const locale = await getLocale();
  const { gallery, totalImages } = await fetchGallery(locale, pageNo);

  const pageCount = Math.max(1, Math.floor(totalImages / IMAGES_PER_PAGE));

  if(pageNo>pageCount){
    redirect(`${locale}/gallery/1`)
  }
  
  return (
    <main className="min-h-screen pt-24">
      <Gallery images={gallery} pageNo={pageNo} pageCount={pageCount} />
    </main>
  );
}