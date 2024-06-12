"use client"
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { uploadContact, uploadTestimonial } from "./actions";
import { client } from "~/sanity/lib/client";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3"
import * as Toast from '@radix-ui/react-toast';
import { useTranslations } from "next-intl";
import { type Message } from "~/lib/types";

const ContactForm = () => {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [toastMessage, setToastMessage] = useState<Message>({ type: "success", message: "" })
  const timerRef = useRef(0);
  const t = useTranslations("contact.form")

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const showToast = (message: Message) => {
    setToastMessage(message)
    setOpen(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setOpen(false);
    }, 4000);
  }

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  // async function actionWrapper(data:FormData,action:(data: FormData)=>Promise<Message>) {
  //   const response = await client.assets.upload("image", data.get("image") as File)
  //   data.set("image", response._id);

  //   if (executeRecaptcha) {
  //     const gRecaptchaToken = await executeRecaptcha(`krishnaveni`)
  //     data.set("captcha", gRecaptchaToken)
  //     const response = await action(data);
  //     showToast(response)
  //   } else {
  //     showToast({ type: "error", message: "recaptcha not available" })
  //   }

  //   dialogRef.current?.close()
  // }

  async function testimonialAction(data: FormData) {
    const response = await client.assets.upload("image", data.get("image") as File)
    data.set("image", response._id);

    if (executeRecaptcha) {
      const gRecaptchaToken = await executeRecaptcha(`krishnaveni`)
      data.set("captcha", gRecaptchaToken)
      const response = await uploadTestimonial(data);
      showToast(response)
    } else {
      showToast({ type: "error", message: "recaptcha not available" })
    }

    dialogRef.current?.close()
  }

  async function contactAction(data: FormData) {
    if (executeRecaptcha) {
      const gRecaptchaToken = await executeRecaptcha(`krishnaveni`)
      data.set("captcha", gRecaptchaToken)
      const response = await uploadContact(data);
      showToast(response)
    } else {
      showToast({ type: "error", message: "recaptcha not available" })
    }

    dialogRef.current?.close()
  }

  return (
    <Toast.Provider swipeDirection="right">
      <section className="col-span-6 sm:col-span-3">
        <div className="flex flex-row md:flex-row  items-center justify-between">
          <h2 className="heading mt-5 md:mt-0 ">{t("heading")}</h2>

          <Button
            className="mt-5 md:mt-0 text-action-950 border-gray-500 p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black"
            onClick={openDialog}
          >
            {t("submitReview")}
          </Button>
        </div>
      </section>
      <form className="mt-8 flex flex-col gap-2" action={contactAction}>
        <label className="block text-sm font-medium text-gray-700">
          <span>{t("name")}</span>
          <input
            type="text"
            name="name"
            pattern="[A-z]+"
            required
            className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
          />
        </label>

        <div className="flex gap-2 mt-1">
          <label className="block text-sm font-medium text-gray-700 w-full">
            <span>{t("email")}</span>
            <input
              type="email"
              name="email"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 w-full">
            <span>{t("phoneNo")}</span>
            <input
              type="tel"
              name="phoneNo"
              required
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700">
          <span>{t("message")}</span>
          <textarea
            name="message"
            required
            className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
          ></textarea>
        </label>

        <label className="flex gap-4 border-gray-500">
          <input
            type="checkbox"
            name="marketing_accept"
            className="size-5 h-9 rounded-md border-gray-800 bg-white shadow-sm"
          />
          <span className="text-sm text-gray-700">
            {t("subscribeNote")}
          </span>
        </label>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button className="bg-secondary-300 text-action-950 p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black">
            {t("submitDetails")}
          </Button>

          {/* <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            <Button className="text-gray-700 underline" onClick={openDialog}>
            {t("submitReview")}
            </Button>
          </p> */}
        </div>
      </form>

      <dialog
        ref={dialogRef}
        className="sm:max-w-[425px] bg-white rounded-lg relative "
        onClick={() => dialogRef.current?.close()}
      >
        <Button className="absolute top-5 right-2">
          <X />
        </Button>
        <form
          className="p-6 flex flex-col gap-4"
          onClick={(e) => e.stopPropagation()}
          action={testimonialAction}
        >
          <h1 className="text-2xl font-bold text-action-950">
            {t("reviewTitle")}
          </h1>
          <p className="text-sm text-gray-500">
            {t("reviewContent")}
          </p>
          <label className="block text-sm font-medium text-gray-700">
            <span>{t("name")}</span>
            <input
              type="text"
              name="name"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>{t("email")}</span>
            <input
              type="email"
              name="email"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>{t("phoneNo")}</span>
            <input
              type="tel"
              name="phoneNo"
              required
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>{t("profileImage")}</span>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-1"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>{t("review")}</span>
            <textarea
              name="review"
              className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            ></textarea>
          </label>
          <Button
            className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black"
            onClick={() => dialogRef.current?.close()}
          >
            {t("submitReview")}
          </Button>
        </form>
      </dialog>



      <Toast.Root
        className="bg-white rounded-md shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] p-[15px] grid [grid-template-areas:_'title_action'_'description_action'] grid-cols-[auto_max-content] gap-x-[15px] items-center data-[state=open]:animate-slideIn data-[state=closed]:animate-hide data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-[transform_200ms_ease-out] data-[swipe=end]:animate-swipeOut"
        open={open}
        onOpenChange={setOpen}
      >
        <Toast.Title className="[grid-area:_title] mb-[5px] font-medium text-slate12 text-[15px] capitalize">
          {toastMessage.type}
        </Toast.Title>
        <Toast.Description asChild>
          {toastMessage.message}
        </Toast.Description>
        <Toast.Action className="[grid-area:_action]" asChild altText="Goto schedule to undo">
          <button className="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8">
            Ok
          </button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none" />


    </Toast.Provider>
  );
};

export default ContactForm;
