"use client"
import { useRef, useState } from 'react';
import Dialog, { DialogRef } from '../ui/Dialog'
import { OrganisationDoctorType } from '~/lib/types';
import Reveal from '../Animations/reveal';
import Image from 'next/image';
import ImageWithFallback from '../ui/ImageWithFallback';
import { CircleX } from 'lucide-react';
import { useTranslations } from 'next-intl';

function Doctors({ doctors }: { doctors: OrganisationDoctorType[] }) {
    const dialogRef = useRef<DialogRef>(null);
    const [selectedDoctor, setSelectedDoctor] = useState<OrganisationDoctorType | null>(null);
    const t = useTranslations("organisation");
    return (
        <>
            <div className="flex flex-col w-full items-center md:items-start gap-10">
                {doctors.map((doctor, index) => (
                    <Reveal
                        key={index}
                        delay={0.2 * index}>
                        <div
                            className="flex flex-col gap-3 items-center py-6 px-4 justify-center transition duration-200 ease-in-out hover:-translate-y-2 rounded-lg text-center bg-secondary-300/40 group"
                        >
                            <ImageWithFallback
                                width={120}
                                height={120}
                                alt={doctor.name}
                                src={doctor.image}
                                className="rounded-full object-cover aspect-square"
                            />
                            <div className="flex flex-col gap-2 items-center">
                                <p className="body">{doctor.name}</p>
                                <span className="caption text-wrap text-center w-40">
                                    {doctor.qualification}
                                </span>
                                <button
                                    className='group-hover:bg-primary-500 border-2 border-primary-500 rounded-full py-1 px-4 text-base mt-4 transition-colors duration-150'
                                    onClick={() => {
                                        setSelectedDoctor(doctor)
                                        dialogRef.current?.open()
                                    }}
                                >{t("knowMore")}</button>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            <Dialog
                ref={dialogRef}
                closeCallback={() => setSelectedDoctor(null)}
                className='eventdialog max-w-[50rem] p-4 w-full rounded'
            >
                {
                    selectedDoctor && (
                        <div
                            className="px-4 py-8 flex flex-col md:flex-row items-center md:items-start justify-center gap-2 md:gap-6  rounded-2xl"
                        >
                            <Image
                                src={selectedDoctor.image}
                                alt={selectedDoctor.name}
                                width={200}
                                height={200}
                                priority={false}
                                className="aspect-square rounded-full w-full max-w-40 object-cover object-center"
                            />
                            <div className="flex flex-col gap-2">
                                <strong className="text-xl">{selectedDoctor.name}</strong>
                                <span className="text-gray-800 font-semibold text-lg">{selectedDoctor.qualification}</span>
                                <p className="body">
                                    {selectedDoctor.detail}
                                </p>
                            </div>
                        </div>
                    )
                }

                <button
                    className="absolute m-4 right-0 top-0"
                    onClick={() => dialogRef.current?.close()}
                >
                    <CircleX className="text-red-700" size={28} />
                </button>
            </Dialog>
        </>
    )
}

export default Doctors