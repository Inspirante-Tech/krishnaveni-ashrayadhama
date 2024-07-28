"use client"
import { useState } from "react";
import { EventType } from "~/lib/types";
import { formatDate } from "~/lib/utils";
import Image from "next/image";
import { useLocale } from "next-intl";

export default function Event({ event }: { event: EventType }) {
    const locale = useLocale();
    const [selectedImage, setSelectedImage] = useState<string | null>(event.images.length > 0 ? event.images[0] : null);

    return (
        <div className="relative w-full h-full flex flex-col md:flex-row gap-4 p-4 md:overflow-y-scroll">
            <div className="md:sticky md:top-0 flex flex-col gap-4 items-center justify-betweent md:basis-1/2 md:h-[80vh] h-1/4">
                <Image
                    src={selectedImage!}
                    width={500}
                    height={500}
                    alt={event.title}
                    className="rounded object-contain object-center basis-4/5 h-full"
                    priority={false}
                />

                <div className="flex gap-2 basis-1/5">
                    {event.images.map((image, idx) => (
                        <button onClick={() => setSelectedImage(image)} key={`image-${idx}`} className="h-full">
                            <Image
                                src={image}
                                width={100}
                                height={100}
                                alt={event.title}
                                className={`rounded h-24 w-full aspect-square object-cover caption ${selectedImage==image?"border-2 border-black":""}`}
                                priority={false}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 h-full relative md:basis-1/2">
                <div className="space-y-2">
                    <h1 className="heading">{event.title}</h1>
                        <span className="text-gray-700 font-light text-sm pl-2">{formatDate(event.date,locale)}</span>
                    </div>
                <p className="">{event.description}</p>
            </div>
        </div>
    )
}