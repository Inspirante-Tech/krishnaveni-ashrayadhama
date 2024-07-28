"use client";
import { useRef, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import { GalleryType } from "~/lib/types";
import Reveal from "../Animations/reveal";
import Dialog, { DialogRef } from "../ui/Dialog";
import Heading from "../Heading/Heading";
import Photo from "./Photo";
import { CircleX } from "lucide-react";
import { useRouter } from "next/navigation";
import Pagination from "../ui/Pagination";

export function Gallery({ images, pageCount, pageNo }: { images: GalleryType[], pageCount: number, pageNo: number }) {
  const t = useTranslations("gallery");
  const locale = useLocale();
  const router = useRouter();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const dialogRef = useRef<DialogRef>(null);

  const onSelect = (index: number) => {
    setSelectedImageIndex(index);
    dialogRef.current?.open();
  };

  const onClose = () => {
    setSelectedImageIndex(null);
  };

  const thumbnails = images.map((image) => ({
    id: image.id,
    image: image.image,
    title: image.description,
    alt: image.description,
  }));

  return (
    <section className="content-container flex flex-col gap-2 md:gap-4">
      <Heading seperatorColor="secondary">{t("heading")}</Heading>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        {images.map((image, index) => (
          <Reveal key={image.id}>
            <Photo
              url={image.image}
              alt={image.description}
              callback={() =>
                onSelect(index)
              }
            />
          </Reveal>
        ))}
      </div>

      <Pagination page={pageNo} count={pageCount} onChange={(c) => { router.push(`/${locale}/gallery/${c}`) }} />

      <Dialog
        closeCallback={onClose}
        ref={dialogRef}
        className="w-[100%] h-[100%] md:w-[90%] p-2 md:p-15 rounded-xl eventdialog overflow-hidden"
        onClick={() => dialogRef.current?.close()}
      >
        <div className="w-full h-full md:mt-1">
          {selectedImageIndex != null && (
            <ThumbnailCarousel
              thumbnails={thumbnails}
              initialIndex={selectedImageIndex}
              onThumbnailClick={onSelect}
            />
          )}
          <form method="dialog" className="absolute top-0 right-0 z-10">
            <button className="m-4">
              <CircleX className="text-red-700" size={32} />
            </button>
          </form>
        </div>
      </Dialog>
    </section>
  );
}
