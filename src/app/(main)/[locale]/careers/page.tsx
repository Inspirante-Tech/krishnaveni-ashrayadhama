"use client"
import { useRef } from "react";
import Heading from "~/components/Heading/Heading";
import RolesAndDescrptions from "~/components/RolesAndDescrptions/RolesAndDescrptions";
import Dialog, { DialogRef } from "~/components/ui/Dialog";

export default function Careers() {
  const dialogRef = useRef<DialogRef>(null);

  return (
    <>
      <main className="content-container space-y-8">
        <section className="flex md:gap-4 gap-2 flex-col pt-20">
          <h2
            className="text-gray-900 text-left heading w-fit capitalize"
          >
            Want to work with us?
            <div className="h-1 w-full bg-secondary-500 rounded-full mt-2"></div>
          </h2>
          <p className="body">
            We are pleased to announce the upcoming launch of <span className="font-bold">&#34;KRISHNAVENI AYURVEDA
              - Treatment and Wellness Center&#34;</span> and invite applications for the
            following positions .Join our dynamic team where innovation meets
            opportunity. Were dedicated to fostering a collaborative and inclusive
            environment that encourages growth, creativity, and the pursuit of
            excellence. If youre passionate about making a difference and looking
            for a place to develop your skills, wed love to hear from you. Lets
            build something great together!encourages growth, creativity, and the
            pursuit of excellence. <span onClick={() => dialogRef.current?.open()} className="text-blue-600 underline cursor-pointer">want to know how to apply?</span>
          </p>


        </section>
        <div className="flex flex-col md:gap-12 gap-6">
          <Heading className="w-max">
            Roles And Their Descrptions
          </Heading>
          <RolesAndDescrptions />
        </div>
      </main>

      <Dialog
        ref={dialogRef}
        className="max-w-80 rounded m-auto p-4 outline-none"
      >
        <div>
          <h2 className="heading mb-4 ">How to Apply</h2>
          <p className="text-gray-400  font-bold">Interested candidates can send their applications via email to
            info@kvdhama.com or mail to Administrative Officer, Inchara,
            No.: 2-190, Salmara, Shankarapura Post – 574115, Udupi.</p>
        </div>
      </Dialog>
    </>
  );
}
