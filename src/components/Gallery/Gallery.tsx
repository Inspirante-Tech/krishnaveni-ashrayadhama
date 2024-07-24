"use client";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import { ImageType } from "~/lib/types";
import Reveal from "../Animations/reveal";
import Dialog, { DialogRef } from "../ui/Dialog";
import Heading from "../Heading/Heading";
import Photo from "./Photo";
import { CircleX } from "lucide-react";

export function Gallery({ images }: { images: ImageType[] }) {
  const t = useTranslations("gallery");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );
  const dialogRef = useRef<DialogRef>(null);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(images.length / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const onSelect = (index: number) => {
    console.log("open");
    setSelectedImageIndex(index);
    dialogRef.current?.open();
  };

  const onClose = () => {
    console.log("close");
    setSelectedImageIndex(null);
  };

  const thumbnails = images.map((image) => ({
    id: image.id,
    image: image.image,
    title: image.description,
    alt: image.description,
  }));

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedImages = images.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const renderPageButtons = () => {
    const visiblePages = 5; // Number of visible page buttons
    const pageButtons = [];

    if (totalPages <= visiblePages) {
      // If total pages is less than or equal to visible pages, show all page buttons
      for (let i = 1; i <= totalPages; i++) {
        pageButtons.push(
          <button
            key={i}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === i
                ? "bg-secondary-500 text-white"
                : "bg-secondary-100"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      // If total pages is greater than visible pages, show ellipsis and selected page buttons
      const ellipsis = (
        <span key="ellipsis" className="mx-1">
          ...
        </span>
      );

      const firstPageButton = (
        <button
          key={1}
          className={`mx-1 px-2 py-1 rounded ${
            currentPage === 1
              ? "bg-secondary-500 text-white"
              : "bg-secondary-100"
          }`}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );

      const lastPageButton = (
        <button
          key={totalPages}
          className={`mx-1 px-2 py-1 rounded ${
            currentPage === totalPages
              ? "bg-secondary-500 text-white"
              : "bg-secondary-100"
          }`}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );

      const middlePageButtons = [];
      const visiblePageCount = visiblePages - 2; // Subtracting 2 for first and last page buttons

      const startPage = Math.max(
        2,
        currentPage - Math.floor(visiblePageCount / 2)
      );
      const endPage = Math.min(
        totalPages - 1,
        startPage + visiblePageCount - 1
      );

      if (startPage > 2) {
        middlePageButtons.push(ellipsis);
      }

      for (let i = startPage; i <= endPage; i++) {
        middlePageButtons.push(
          <button
            key={i}
            className={`mx-1 px-2 py-1 rounded ${
              currentPage === i
                ? "bg-secondary-500 text-white"
                : "bg-secondary-100"
            }`}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (endPage < totalPages - 1) {
        middlePageButtons.push(ellipsis);
      }

      pageButtons.push(firstPageButton, ...middlePageButtons, lastPageButton);
    }

    return pageButtons;
  };

  return (
    <section className="content-container flex flex-col gap-2 md:gap-4">
      <Heading seperatorColor="secondary">{t("heading")}</Heading>
      <div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        style={{ columnFill: "balance" }}
      >
        {paginatedImages.map((image, index) => (
          <Reveal key={image.id}>
            <Photo
              url={image.image}
              alt={image.description}
              callback={() =>
                onSelect(index + (currentPage - 1) * itemsPerPage)
              }
            />
          </Reveal>
        ))}
      </div>

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

      <div className="flex justify-center mt-4">{renderPageButtons()}</div>
    </section>
  );
}
