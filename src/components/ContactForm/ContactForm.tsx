"use client"
import { useRef } from "react";
import {Button} from "../ui/button";
import { X } from "lucide-react";

const ContactForm = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  }

  return (
    <div>
      <section className="col-span-6 sm:col-span-3">
        <div className="flex flex-row items-center justify-between">
          <h2 className="text-action-950 font-bold text-3xl">Get In Touch!</h2>

          <Button className="bg-secondary-300 text-action-950 border-gray-500 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black" onClick={openDialog}>
            Submit Review
          </Button>
        </div>
      </section>
      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="FirstName"
            className="block text-sm font-medium text-gray-700"
          >
            First Name
          </label>

          <input
            type="text"
            id="FirstName"
            name="first_name"
            className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="LastName"
            className="block text-sm font-medium text-gray-700"
          >
            Last Name
          </label>

          <input
            type="text"
            id="LastName"
            name="last_name"
            className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="Email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>

          <input
            type="email"
            id="Email"
            name="email"
            className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
          />
        </div>

        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="Phoneno"
            className="block text-sm font-medium text-gray-700"
          >
            Phoneno
          </label>

          <input
            type="Phoneno"
            id="Phoneno"
            name="Phoneno"
            className="mt-1 h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm w-full"
          />
        </div>

        <div className="col-span-6">
          <label
            htmlFor="Message"
            className="block text-sm font-medium text-gray-700"
          >
            Message
          </label>

          <textarea
            id="Message"
            name="Message"
            className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
          ></textarea>
        </div>

        <div className="col-span-6">
          <label
            htmlFor="MarketingAccept"
            className="flex gap-4 border-gray-500"
          >
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-5 h-9 rounded-md border-gray-800 bg-white shadow-sm"
            />

            <span className="text-sm text-gray-700">
              I want to receive emails about events, product updates and company
              announcements.
            </span>
          </label>
        </div>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black">
            Submit Details
          </Button>

          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            <Button className="text-gray-700 underline" onClick={openDialog}>
              Did You submit Review
            </Button>
            .
          </p>
        </div>
      </form>
      <dialog ref={dialogRef} className="sm:max-w-[425px] bg-white rounded-lg relative" onClick={() => dialogRef.current?.close()}>
        <Button className="absolute top-5 right-2">
          <X />
        </Button>
        <form method="dialog" className="p-6 flex flex-col gap-4" onClick={e => e.stopPropagation()}>
          <h1 className="text-2xl font-bold text-action-950">Submit Your Testimonial</h1>
          <p className="text-sm text-gray-500">We value your feedback! Please share your experience with us.</p>
          <div className="col-span-6 sm:col-span-3">
            <label
              className="block text-sm font-medium text-gray-700"
            >
              <span>FullName</span>
              <input
                type="text"
                name="fullname"
                className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
              />
            </label>

          </div>
          <div className="col-span-6">
            <label
              className="block text-sm font-medium text-gray-700"
            >
              <span>Review</span>
              <textarea
                name="review"
                className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
              ></textarea>
            </label>

          </div>
          <Button
            className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black"
          >
            Submit Review
          </Button>
        </form>
      </dialog>

    </div>
  );
};

export default ContactForm;