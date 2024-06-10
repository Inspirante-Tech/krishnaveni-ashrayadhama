"use client";
import { useRef } from "react";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import {
  uploadContact,
  uploadTestimonial,
} from "~/app/(main)/[locale]/contact/actions";
import { client } from "~/sanity/lib/client";

const ContactForm = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
  };

  async function testimonialAction(data: FormData) {
    const response = await client.assets.upload(
      "image",
      data.get("image") as File
    );
    data.set("image", response._id);
    uploadTestimonial(data);
    dialogRef.current?.close();
  }

  return (
    <div>
      <section className="col-span-6 sm:col-span-3">
        <div className="flex flex-row md:flex-row  items-center justify-between">
          <h2 className="heading mt-5 md:mt-0 ">Get In Touch!</h2>

          <Button
            className="mt-5 md:mt-0 text-action-950 border-gray-500 p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black"
            onClick={openDialog}
          >
            Submit Review
          </Button>
        </div>
      </section>
      <form className="mt-8 flex flex-col gap-2" action={uploadContact}>
        <label className="block text-sm font-medium text-gray-700">
          <span>Name</span>
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
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700 w-full">
            <span>Phone number</span>
            <input
              type="tel"
              name="phoneNo"
              required
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
            />
          </label>
        </div>

        <label className="block text-sm font-medium text-gray-700">
          <span>Message</span>
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
            I want to receive emails about events, product updates and company
            announcements.
          </span>
        </label>

        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button className="bg-secondary-300 text-action-950 p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black">
            Submit Details
          </Button>

          {/* <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            <Button className="text-gray-700 underline" onClick={openDialog}>
              Did You submit Review
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
            Submit Your Testimonial
          </h1>
          <p className="text-sm text-gray-500">
            We value your feedback! Please share your experience with us.
          </p>
          <label className="block text-sm font-medium text-gray-700">
            <span>Name</span>
            <input
              type="text"
              name="name"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>Email</span>
            <input
              type="email"
              name="email"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>Phone number</span>
            <input
              type="tel"
              name="phoneNo"
              required
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>Profile Image</span>
            <input
              type="file"
              name="image"
              accept="image/png, image/jpeg"
              className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-1"
            />
          </label>

          <label className="block text-sm font-medium text-gray-700">
            <span>Review</span>
            <textarea
              name="review"
              className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm p-2"
            ></textarea>
          </label>
          <Button
            className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black"
            onClick={() => dialogRef.current?.close()}
          >
            Submit Review
          </Button>
        </form>
      </dialog>
    </div>
  );
};

export default ContactForm;
