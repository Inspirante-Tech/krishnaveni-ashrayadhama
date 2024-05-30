'use client'
import React, {useState } from 'react'
import Image from 'next/image'
import TestImage from "@assets/test.jpeg"
import { CircleX } from 'lucide-react';

const events = [
    {
        "id": 1,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    },
    {
        "id": 2,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    }, {
        "id": 3,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    }, {
        "id": 4,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    },
    {
        "id": 5,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    },
    {
        "id": 6,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    },
    {
        "id": 7,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    }, {
        "id": 8,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    }, {
        "id": 9,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    },
    {
        "id": 10,
        "title": "lorem ipsom",
        "description": "dhhgf fjdfjd dgfdgf fudugf",
        "image": TestImage,
        "date": "22-05-2024",
    }


]

//https://stackoverflow.com/questions/50037663/how-to-close-a-native-html-dialog-when-clicking-outside-with-javascript
//TODO: close dialog when click otside the dialog
//TODO: backdrop not working
//TODO: animations
function getDialog(selected: number | null, callback: () => void) {
    if (selected == null) {
        return
    }
    const filtered = events.filter(event => event.id == selected)
    if (filtered.length == 0) {
        return
    }
    const event = filtered[0];

    return (
        <dialog open className='rounded bg-secondary-300' onClick={(e) => { e.currentTarget.close(); callback() }}>
            <div className='flex flex-col gap-4 relative p-4 md:flex-row md:p-8 align-middle'>
                <Image
                    src={event.image}
                    width={500}
                    height={Math.ceil(500 * 1 / 1.2)}
                    alt={event.title}
                    className='rounded aspect-[1.2] max-w-80'
                />

                <div className='space-y-4 md:min-w-52'>
                    <h1>{event.title}</h1>
                    <span>{event.date}</span>
                    <p>{event.description}</p>
                </div>
                <button onClick={callback} className='absolute top-0 right-0 m-4 z-10 text-red-600'>
                    <CircleX className='text-red-600' />
                </button>
            </div>
        </dialog>
    )
}

function Events() {
    const [selected, setSelected] = useState<number | null>(null);
    return (
        <section className='flex flex-wrap gap-8 pt-20 justify-around bg-primary-300 p-8'>

        {events.map(event => {
            return (
                <div className='w-64 bg-secondary- rounded p-2 bg-secondary-300'
                    onClick={() => setSelected(event.id)}
                >
                    <Image
                        src={event.image}
                        width={500}
                        height={Math.ceil(500 * 1 / 1.2)}
                        alt={event.title}
                        className='rounded-t aspect-[1.2]'
                    />
                    <div className='p-2'>
                        <h2 className='text-xl '>{event.title}</h2>
                    </div>
                </div>
            )
        })}

        {getDialog(selected, () => setSelected(null))}


    </section>
    )
}

export default Events;