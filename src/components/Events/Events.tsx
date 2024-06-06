"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";
import { EventType } from "~/lib/types";
import { formatDate } from "~/lib/utils";
import { useTranslations } from "next-intl";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";

function Events({ events }: { events: EventType[] }) {
  const t = useTranslations("events");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
  
  const thumbnails = events.map(event => ({
    id: event.id,
    image: event.image,
    title: event.title,
    alt: event.title,
  }));

  return (
    <section className="content-container bg-primary-50 rounded p-8 ">
      <h1 className="text-3xl md:text-5xl font-bold  p-6 text-action-950">{t("heading")}</h1>
      <ThumbnailCarousel
        thumbnails={thumbnails}
        onThumbnailClick={(thumbnail) => {
          const event = events.find(event => event.id === thumbnail.id);
          if (event) {
            dialogRef.current && dialogRef.current.showModal();
            setSelectedEvent(event);
          }
        }}
      />
      <dialog
        ref={dialogRef}
        className="w-[80%] h-[80%] bg-secondary-50 rounded eventdialog"
        onClick={(e) => e.currentTarget.close()}
      >
        {selectedEvent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-4 md:flex-row md:p-8 align-middle w-full h-full">
            <Image
              src={selectedEvent.image}
              width={500}
              height={500}
              alt={selectedEvent.title}
              className="rounded object-contain"
            />
            <div className="space-y-4 md:min-w-52">
              <h1 className="font-bold text-4xl">{selectedEvent.title}</h1>
              <span className="text-sm text-gray-700">{formatDate(selectedEvent.date)}</span>
              <p>{selectedEvent.description}</p>
            </div>
            <button
              onClick={() => { dialogRef.current && dialogRef.current.close() }}
              className="absolute top-0 right-0 m-4 z-10 "
            >
              <CircleX className="text-red-600" size={32} />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}

export default Events;

