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
        <div className="w-full h-full max-h-full grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
            <div className="flex flex-col gap-4 justify-between items-center max-h-full h-full">
                <Image
                    src={selectedImage!}
                    width={500}
                    height={500}
                    alt={event.title}
                    className="rounded flex-grow object-contain w-full max-h-[80vh]"
                    priority={false}
                />

                <div className="flex gap-2 overflow-hidden">
                    {event.images.map((image,index) => (
                        <button
                        key={index} 
                        onClick={() => setSelectedImage(image)}>
                            <Image
                                src={image}
                                width={50}
                                height={50}
                                alt={event.title}
                                className={`rounded aspect-[1.2] object-cover caption ${selectedImage==image?"border-2 border-black":""}`}
                                priority={false}
                            />
                        </button>
                    ))}
                </div>
            </div>

            <div className="flex flex-col gap-4 md:overflow-hidden">
                <div className="space-y-2">
                    <h1 className="heading">{event.title}</h1>
                    <span className="text-gray-700 font-light text-sm pl-2">{formatDate(event.date,locale)}</span>
                </div>
                <p className="md:overflow-y-scroll">{event.description}</p>
            </div>
        </div>
    )
}