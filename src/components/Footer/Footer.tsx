import { Footerlinks, socialMedia } from "~/constants";
import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-primary-100">
        <div className="flex flex-col items-center gap-4 rounded-lg bg-secondary-400 p-6 shadow-lg sm:flex-row sm:justify-between">
          <strong className="text-xl text-white  font-popins sm:text-xl">
            {" "}
            Want to Spread Smile ?{" "}
          </strong>

          <a
            className="inline-flex items-center gap-2  rounded-md border  bg-action-800 px-8 py-3 text-primary-300 hover:bg-transparent hover:text-white focus:outline-none focus:ring "
            href="#"
          >
            <span className="text-sm font-medium"> Get In Touch</span>
          </a>
        </div>
      </div>
      <footer>
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
          <div className="p-5 ">
            <ul>
              <p className="text-gray-800 font-bold text-3xl pb-6">LOGO</p>
              <div className="flex gap-6 pb-5">
                <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
                <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
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
    </div>
  );
}

export default Footer;
