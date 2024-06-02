"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";
import { ResolvedType, ArrayElementType } from "~/lib/utils";
import { fetchEvents } from "~/lib/queries";

//https://stackoverflow.com/questions/50037663/how-to-close-a-native-html-dialog-when-clicking-outside-with-javascript
function Events() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<ResolvedType<ReturnType<typeof fetchEvents>>>([]);
  const [selectedEvent, setSelectedEvent] = useState<ArrayElementType<typeof events> | null>(null);

  useEffect(() => {
    (async () => {
      setEvents(await fetchEvents());
      setIsLoading(false)
    })()
  }, [])

  return (
    <section className="content-container bg-primary-300 rounded p-8">
      <h1 className="font-bold text-3xl mb-4">Events</h1>
      <div className="flex flex-wrap gap-8 justify-around">
        {
          isLoading ? (
            <span>
              loading
            </span>
          ) : (
            <>
              {events.map((event) => {
                return (
                  <div
                    key={event.id}
                    className="w-64 bg-secondary- rounded p-2 bg-secondary-200"
                    onClick={() => {
                      dialogRef.current && dialogRef.current.showModal()
                      setSelectedEvent(event)
                    }}
                  >
                    <Image
                      src={event.image}
                      width={500}
                      height={500}
                      alt={event.title}
                      className="rounded-t aspect-[1.2]"
                    />
                    <div className="p-2">
                      <h2 className="text-xl ">{event.title}</h2>
                      <span className="text-sm text-gray-700">{event.date}</span>
                    </div>
                  </div>
                );
              })}
            </>
          )
        }

      </div>
      <dialog
        ref={dialogRef}
        className="w-[80%] h-[80%] bg-secondary-200 rounded eventdialog"
        onClick={(e) => e.currentTarget.close()}
      >
        {selectedEvent && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-4 md:flex-row md:p-8 align-middle w-full h-full">
            <Image
              src={selectedEvent.image}
              width={500}
              height={500}
              alt={selectedEvent.title}
              className="rounded"
            />

            <div className="space-y-4 md:min-w-52">
              <h1 className="font-bold text-4xl">{selectedEvent.title}</h1>
              <span className="text-sm text-gray-700">{selectedEvent.date}</span>
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
