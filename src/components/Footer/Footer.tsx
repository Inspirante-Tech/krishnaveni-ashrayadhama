import { Footerlinks, socialMedia } from "~/constants";
import React from "react";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

function Footer() {
  return (
      <footer>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
          <div className="p-5 ">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">LOGO</p>
              <div className="flex gap-6 pb-5">
                <Instagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <Twitter  className="text-2xl cursor-pointer hover:text-blue-600" />
                <Linkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <Youtube className="text-2xl cursor-pointer hover:text-red-600" />
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Address</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Lorem ipsum
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                lorem ipsum
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                lorem ipsum
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                lorem ipsum
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="#">About us</a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="#">Testimonials</a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="#">Specialities</a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="#">Events</a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="#">Donate</a>
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                <a href="#">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact
              </li>

              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
          <h1 className=" text-gray-800 font-semibold">
            © 2023-2024 All rights reserved
          </h1>
        </div>
      </footer>
  );
}

export default Footer;
