"use client"
import { useTranslations } from "next-intl";
import { useRef } from "react";
import Heading from "~/components/Heading/Heading";
import RolesAndDescrptions from "~/components/RolesAndDescrptions/RolesAndDescrptions";
import Dialog, { DialogRef } from "~/components/ui/Dialog";
import { CareerType } from "~/lib/types";
import RichText from "../RichText/RichText";


export default function Career({ data }: { data: CareerType }) {
  const dialogRef = useRef<DialogRef>(null);
  const t = useTranslations("career");
  return (
    <>  
      <main className="content-container space-y-8">
        <section className="flex md:gap-4 gap-2 flex-col pt-20">
          <h2
            className="text-gray-900 text-left heading w-fit capitalize"
          >
            {data.title}
            <div className="h-1 w-full bg-secondary-500 rounded-full mt-2"></div>
          </h2>
          
            <RichText value={data.description} />
          
          <span onClick={() => dialogRef.current?.open()} className="text-blue-600 underline cursor-pointer">{t("question")}</span>
          


        </section>
        <div className="flex flex-col md:gap-12 gap-6">
          <Heading className="w-max">
            {t("heading")}
          </Heading>
          <RolesAndDescrptions data={data}/>
        </div>
      </main>

      <Dialog
        ref={dialogRef}
        className="max-w-80 rounded m-auto p-4 outline-none"
      >
        <div>
          <h2 className="heading mb-4 ">{t("dialog.heading")}</h2>
          <p className="text-gray-400  font-bold">{data.howtoapply} </p>
        </div>
      </Dialog>
    </>
  );
}


