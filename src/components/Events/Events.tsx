"use client";
import { CircleX } from "lucide-react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { EventType, VideoType } from "~/lib/types";
import { createYoutubeEmbeddedLink, formatDate } from "~/lib/utils";
import { useTranslations } from "next-intl";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
import Reveal from "../Animations/reveal";
import Heading from "../Heading/Heading";
import Dialog, { DialogRef } from "../ui/Dialog";
import EventVideos from "./EventVideos";

function Events({ events, data }: { events: EventType[]; data: VideoType[] }) {
  const t = useTranslations("events");
  const dialogRef = useRef<DialogRef>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(
    null
  );

  const thumbnails = events.map((event) => ({
    id: event.id,
    image: event.images[0],
    title: event.title,
    alt: event.title,
  }));

  const openDialog = (index: number) => {
    setSelectedEventIndex(index);
    dialogRef.current && dialogRef.current.open();
  };

  const onClose = () => {
    setSelectedEventIndex(null);
  };

  const embeddedData = data.map((item) =>
    createYoutubeEmbeddedLink(item.video)
  );

  return (
    <>
      <section className="content-container rounded p-8">
        <Heading>{t("heading")}</Heading>
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 body">
            {events.map((event, index) => (
              <div
                key={event.id}
                onClick={() => openDialog(index)}
                className="overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer grid grid-rows-6 h-80"
              >
                <Image
                  src={event.images[0]}
                  width={500}
                  height={500}
                  alt={event.title}
                  className="rounded w-full object-cover row-span-4 h-full"
                />
                <div className="bg-white p-4 sm:p-6 h-full  row-start-5 row-span-2">
                  <time
                    dateTime={formatDate(event.date)}
                    className="block text-xs text-gray-500"
                  >
                    {formatDate(event.date)}
                  </time>
                  <h3 className="mt-0.5 text-gray-900 text-left ">
                    {event.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Dialog
          ref={dialogRef}
          className="w-[80%] h-[100%] p-2 md:p-15 bg-gray-100 rounded-xl  eventdialog overflow-hidden"
          onClick={() => dialogRef.current?.close()}
          closeCallback={onClose}
        >
          {selectedEventIndex !== null && (
            <div className="w-full h-full" onClick={(e) => e.stopPropagation()}>
              <ThumbnailCarousel
                thumbnails={thumbnails}
                initialIndex={selectedEventIndex}
              />
              <form method="dialog" className="absolute top-0 right-0 z-10">
                <button className="m-4">
                  <CircleX className="text-red-700" size={32} />
                </button>
              </form>
            </div>
          )}
        </Dialog>
      </section>
      <EventVideos embeddedData={embeddedData} />
    </>
  );
}

export default Events;
