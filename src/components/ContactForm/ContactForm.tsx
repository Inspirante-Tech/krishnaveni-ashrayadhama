// import React from "react";
// import { Button } from "../ui/button";

// const ContactForm = () => {
//   return (
//     <div>
//       {" "}
//       <section className="col-span-6 sm:col-span-3">
//         <div className="flex flex-row items-center justify-between">
//           <h2 className="text-action-950 font-bold text-3xl">Get In Touch!</h2>

//           <Button className="bg-secondary-300 text-action-950 border-gray-500 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black">
//             Submit Review
//           </Button>
//         </div>
//       </section>
//       <form action="#" className="mt-8 grid grid-cols-6 gap-6">
//         <div className="col-span-6 sm:col-span-3">
//           <label
//             htmlFor="FirstName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             First Name
//           </label>

//           <input
//             type="text"
//             id="FirstName"
//             name="first_name"
//             className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
//           />
//         </div>

//         <div className="col-span-6 sm:col-span-3">
//           <label
//             htmlFor="LastName"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Last Name
//           </label>

//           <input
//             type="text"
//             id="LastName"
//             name="last_name"
//             className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
//           />
//         </div>

//         <div className="col-span-6">
//           <label
//             htmlFor="Email"
//             className="block text-sm font-medium text-gray-700"
//           >
//             {" "}
//             Email{" "}
//           </label>

//           <input
//             type="email"
//             id="Email"
//             name="email"
//             className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
//           />
//         </div>

//         <div className="col-span-6 sm:col-span-3">
//           <label
//             htmlFor="Phoneno"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Phoneno
//           </label>

//           <input
//             type="Phoneno"
//             id="Phoneno"
//             name="Phoneno"
//             className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
//           />
//         </div>

//         <div className="col-span-6">
//           <label
//             htmlFor="Message"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Message
//           </label>

//           <textarea
//             id="Message"
//             name="Message"
//             className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
//           ></textarea>
//         </div>

//         <div className="col-span-6">
//           <label
//             htmlFor="MarketingAccept"
//             className="flex gap-4 border-gray-500"
//           >
//             <input
//               type="checkbox"
//               id="MarketingAccept"
//               name="marketing_accept"
//               className="size-5 h-9 rounded-md border-gray-800 bg-white shadow-sm"
//             />

//             <span className="text-sm text-gray-700">
//               I want to receive emails about events, product updates and company
//               announcements.
//             </span>
//           </label>
//         </div>

//         <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
//           <Button className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black">
//             Submit Details
//           </Button>

//           <p className="mt-4 text-sm text-gray-500 sm:mt-0">
//             <Button className="text-gray-700 underline">
//               Did You submit Review
//             </Button>
//             .
//           </p>
//         </div>
//       </form>

//     </div>
//   );
// };

// export default ContactForm;
"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../ui/dialog";

const ContactForm: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleDialogOpen = () => {
    setIsDialogOpen(true);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  return (
    <div>
      <section className="col-span-6 sm:col-span-3">
        <div className="flex flex-col-reverse md:flex-row  md:justify-between  ">
          <h2 className="text-action-950 mt-4  md:mt-0 text-center font-bold text-3xl underline ">
            Get In Touch!
          </h2>
          <Button
            className="bg-secondary-300 text-action-950  border-gray-500 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black mt-4 sm:mt-0"
            onClick={handleDialogOpen}
          >
            Submit Review
          </Button>
        </div>
      </section>

      <form action="#" className="mt-8 grid grid-cols-6 gap-6">
        {/* Form fields */}
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
            Phone no
          </label>
          <input
            type="tel"
            id="Phoneno"
            name="phoneno"
            className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
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
            name="message"
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
              className="h-5 w-5 rounded-md border-gray-800 bg-white shadow-sm"
            />
            <span className="text-sm text-gray-700">
              I agree to share my data with the website owner for updates on
              events, products, and company announcements.
            </span>
          </label>
        </div>
        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <Button className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black">
            Submit Details
          </Button>
          <p className="mt-4 text-sm text-gray-500 sm:mt-0">
            <Button
              onClick={handleDialogOpen}
              className="text-gray-700 underline"
            >
              Did You submit Review
            </Button>
            .
          </p>
        </div>
      </form>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px] bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-action-950">
              Submit Your Testimonial
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              We value your feedback! Please share your experience with us.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="FullName"
                className="block text-sm font-medium text-gray-700"
              >
                FullName
              </label>
              <input
                type="text"
                id="FullName"
                name="fullname"
                className="mt-1 w-full h-9 border rounded-md border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
              />
            </div>
            <div className="col-span-6">
              <label
                htmlFor="Review"
                className="block text-sm font-medium text-gray-700"
              >
                Review
              </label>
              <textarea
                id="Review"
                name="review"
                className="mt-1 w-full h-32 rounded-md border border-gray-800 bg-white text-sm text-gray-700 shadow-sm"
              ></textarea>
            </div>
          </div>
          <DialogFooter>
            <Button
              onClick={handleDialogClose}
              className="bg-secondary-300 text-action-950 font-bold p-4 text-md border hover:border-black hover:bg-primary-50 hover:text-black"
            >
              Submit Review
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactForm;
