"use client";
import { CircleX } from "lucide-react";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { EventType, VideoType } from "~/lib/types";
import { createYoutubeEmbeddedLink, formatDate } from "~/lib/utils";
import { useLocale, useTranslations } from "next-intl";
import Reveal from "../Animations/reveal";
import Heading from "../Heading/Heading";
import Dialog, { DialogRef } from "../ui/Dialog";
import EventVideos from "./EventVideos";
import Event from "./Event";
import Pagination from "../ui/Pagination";
import { useRouter } from "next/navigation";

function Events({ events, data,pageCount,pageNo }: { events: EventType[]; data: VideoType[],pageCount:number,pageNo:number }) {
  const locale = useLocale();
  const router = useRouter();
  const t = useTranslations("events");
  const dialogRef = useRef<DialogRef>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(
    null
  );

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
          <div className="lg:columns-4 md:columns-3 columns-2 space-y-4 body">
            {events.map((event, index) => (
              <div
                key={event.id}
                onClick={() => openDialog(index)}
                className="overflow-hidden rounded-lg shadow transition hover:shadow-lg cursor-pointer"
              >
                <Image
                  src={event.image}
                  width={250}
                  height={250}
                  alt={event.title}
                  className="rounded w-full object-cover"
                />
                <div className="bg-white p-4 sm:p-6">
                  <time
                    dateTime={formatDate(event.date,locale)}
                    className="block text-xs text-gray-500"
                  >
                    {formatDate(event.date,locale)}
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
          className="w-[80%] h-full p-2 md:p-15 bg-gray-100 rounded-xl  eventdialog"
          onClick={() => dialogRef.current?.close()}
          closeCallback={onClose}
        >
          {
            selectedEventIndex !== null && (
              <Event event={events[selectedEventIndex]} />
            )
          }

          <form method="dialog" className="absolute top-0 right-0 z-10">
            <button className="m-4">
              <CircleX className="text-red-700" size={32} />
            </button>
          </form>
        </Dialog>

        <Pagination count={pageCount} page={pageNo} onChange={(c)=>{router.push(`/${locale}/events/${c}`)}}/>
      </section>
      <div id="videos">
        <EventVideos embeddedData={embeddedData} />
      </div>
    </>
  );
}

export default Events;
