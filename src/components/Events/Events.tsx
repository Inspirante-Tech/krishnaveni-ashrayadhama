"use client";
import React, {useRef, useState } from "react";
import Image from "next/image";
import { CircleX } from "lucide-react";

const events = [
  {
    id: 1,
    title: "lorem ipsom 1",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 2,
    title: "lorem ipsom 2",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 3,
    title: "lorem ipsom 3",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 4,
    title: "lorem ipsom 5",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 5,
    title: "lorem ipsom 4",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 6,
    title: "lorem ipsom 6",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 7,
    title: "lorem ipsom 7",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 8,
    title: "lorem ipsom 8",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 9,
    title: "lorem ipsom 9",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  },
  {
    id: 10,
    title: "lorem ipsom 10",
    description: "dhhgf fjdfjd dgfdgf fudugf",
    image: "https://cruip-tutorials.vercel.app/masonry/masonry-06.jpg",
    date: "22-05-2024",
  }
];


interface Event {
  id: number,
  title: string,
  description: string,
  image: string,
  date: string
}

//https://stackoverflow.com/questions/50037663/how-to-close-a-native-html-dialog-when-clicking-outside-with-javascript
//TODO: animations

function getEvent(selected: number | null) {
  if (selected) {
    const filtered = events.filter((event) => event.id == selected);
    if (filtered.length) {
      return filtered[0] as Event
    }
  }
  return null;
}

function Events() {
  const [selected, setSelected] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const event = getEvent(selected)

  return (
    <section className=" mt-28  bg-primary-300 rounded p-8">
      <h1 className="font-bold text-3xl mb-4">Events</h1>
      <div className="flex flex-wrap gap-8 justify-around">
        {events.map((event) => {
          return (
            <div
              key={event.id}
              className="w-64 bg-secondary- rounded p-2 bg-secondary-200"
              onClick={() => {
                dialogRef.current && dialogRef.current.showModal()
                setSelected(event.id)
              }}
            >
              <Image
                src={event.image}
                width={500}
                height={Math.ceil((500 * 1) / 1.2)}
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

      </div>
      <dialog
        ref={dialogRef}
        className="w-[80%] h-[80%] bg-secondary-200 rounded eventdialog"
        onClick={(e) => e.currentTarget.close()}
      >
        {event && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative p-4 md:flex-row md:p-8 align-middle w-full h-full">
            <Image
              src={event.image}
              width={500}
              height={500}
              alt={event.title}
              className="rounded"
            />

            <div className="space-y-4 md:min-w-52">
              <h1 className="font-bold text-4xl">{event.title}</h1>
              <span className="text-sm text-gray-700">{event.date}</span>
              <p>{event.description}</p>
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
