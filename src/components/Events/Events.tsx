// "use client";
// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { EventType } from "~/lib/types";
// import { formatDate } from "~/lib/utils";
// import { useTranslations } from "next-intl";
// import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";
// //https://stackoverflow.com/questions/50037663/how-to-close-a-native-html-dialog-when-clicking-outside-with-javascript
// function Events({ events }: { events: EventType[] }) {
//   const t = useTranslations("gallery");
//   const dialogRef = useRef<HTMLDialogElement>(null);
//   const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);
//   const thumbnails = events.map((event) => ({
//     id: event.id,
//     image: event.image,
//     title: event.title,
//     alt: event.title,
//   }));

//   return (
//     <section className="content-container bg-primary-300 rounded p-8">
//       <h1 className="font-bold text-3xl mb-4">{t("heading")}</h1>
//       <div className="flex flex-wrap gap-8 justify-around">
//         {events.map((event) => {
//           return (
//             <div
//               key={event.id}
//               className="w-64 bg-secondary- rounded p-2 bg-secondary-200"
//               onClick={() => {
//                 dialogRef.current && dialogRef.current.showModal();
//                 setSelectedEvent(event);
//               }}
//             >
//               <Image
//                 src={event.image}
//                 width={500}
//                 height={500}
//                 alt={event.title}
//                 className="rounded-t aspect-[1.2]"
//               />
//               <div className="p-2">
//                 <h2 className="text-xl ">{event.title}</h2>
//                 <span className="text-sm text-gray-700">
//                   {formatDate(event.date)}
//                 </span>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <dialog
//         ref={dialogRef}
//         className="w-[80%] h-[80%] bg-secondary-200 rounded eventdialog"
//         onClick={(e) => e.currentTarget.close()}
//       >
//         {selectedEvent && (
//           <ThumbnailCarousel
//             thumbnails={thumbnails}
//             onThumbnailClick={(thumbnail) => {
//               const event = events.find((event) => event.id === thumbnail.id);
//               if (event) {
//                 dialogRef.current && dialogRef.current.showModal();
//                 setSelectedEvent(event);
//               }
//             }}
//           />
//         )}
//       </dialog>
//     </section>
//   );
// }

// export default Events;

// ("use client");
// import React, { useRef, useState } from "react";
// import Image from "next/image";
// import { CircleX } from "lucide-react";
// import { EventType } from "~/lib/types";
// import { formatDate } from "~/lib/utils";
// import { useTranslations } from "next-intl";
// import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";

// function Events({ events }: { events: EventType[] }) {
//   const t = useTranslations("gallery");
//   const dialogRef = useRef<HTMLDialogElement>(null);
//   const [selectedEvent, setSelectedEvent] = useState<EventType | null>(null);

//   const thumbnails = events.map((event) => ({
//     id: event.id,
//     image: event.image,
//     title: event.title,
//     alt: event.title,
//   }));

//   return (
//     <section className="content-container bg-primary-50 rounded p-8 ">
//       <h1 className="text-3xl md:text-5xl font-bold  p-6 text-action-950">
//         {t("heading")}
//       </h1>
//       <ThumbnailCarousel
//         thumbnails={thumbnails}
//         onThumbnailClick={(thumbnail) => {
//           const event = events.find((event) => event.id === thumbnail.id);
//           if (event) {
//             dialogRef.current && dialogRef.current.showModal();
//             setSelectedEvent(event);
//           }
//         }}
//       />
//       <dialog
//         ref={dialogRef}
//         className="w-[80%] h-[80%] bg-secondary-50 rounded eventdialog"
//         onClick={(e) => e.currentTarget.close()}
//       >
//         {selectedEvent && (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-4 md:flex-row md:p-8 align-middle w-full h-full">
//             <Image
//               src={selectedEvent.image}
//               width={500}
//               height={500}
//               alt={selectedEvent.title}
//               className="rounded"
//             />
//             <div className="space-y-4 md:min-w-52">
//               <h1 className="font-bold text-4xl">{selectedEvent.title}</h1>
//               <span className="text-sm text-gray-700">
//                 {formatDate(selectedEvent.date)}
//               </span>
//               <p>{selectedEvent.description}</p>
//             </div>
//             <button
//               onClick={() => {
//                 dialogRef.current && dialogRef.current.close();
//               }}
//               className="absolute top-0 right-0 m-4 z-10 "
//             >
//               <CircleX className="text-red-600" size={32} />
//             </button>
//           </div>
//         )}
//       </dialog>
//     </section>
//   );
// }

// export default Events;

"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";
import { EventType } from "~/lib/types";
import { formatDate } from "~/lib/utils";
import { useTranslations } from "next-intl";
import ThumbnailCarousel from "../ThumbnailCarousel/ThumbnailCarousel";

function Events({ events }: { events: EventType[] }) {
  const t = useTranslations("gallery");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selectedEventIndex, setSelectedEventIndex] = useState<number | null>(null);

  const thumbnails = events.map((event) => ({
    id: event.id,
    image: event.image,
    title: event.title,
    alt: event.title,
  }));

  const openDialog = (index: number) => {
    setSelectedEventIndex(index);
    dialogRef.current && dialogRef.current.showModal();
  };

  const closeDialog = () => {
    dialogRef.current && dialogRef.current.close();
    setSelectedEventIndex(null);
  };

  return (
    <section className="content-container bg-primary-300 rounded p-8">
      <h1 className="font-bold text-3xl mb-4">{t("heading")}</h1>
      <div className="flex flex-wrap gap-8 justify-around">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="w-64 bg-secondary- rounded p-2 bg-secondary-200"
            onClick={() => openDialog(index)}
          >
            <Image
              src={event.image}
              width={500}
              height={500}
              alt={event.title}
              className="rounded-t aspect-[1.2]"
            />
            <div className="p-2">
              <h2 className="text-xl">{event.title}</h2>
              <span className="text-sm text-gray-700">{formatDate(event.date)}</span>
            </div>
          </div>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="w-[80%] h-[80%] bg-secondary-200 rounded eventdialog"
        onClick={(e) => e.currentTarget.close()}
      >
        {selectedEventIndex !== null && (
          <div onClick={(e) => e.stopPropagation()}>
            <ThumbnailCarousel
              thumbnails={thumbnails}
              initialIndex={selectedEventIndex}
              onThumbnailClick={(thumbnail) => {
                const index = events.findIndex((event) => event.id === thumbnail.id);
                if (index !== -1) {
                  openDialog(index);
                }
              }}
            />
          </div>
        )}
        <form method="dialog" className="absolute top-0 right-0 z-10">
          <button className="m-4" onClick={closeDialog}>
            <CircleX className="text-red-500" size={32} />
          </button>
        </form>
      </dialog>
    </section>
  );
}

export default Events;
