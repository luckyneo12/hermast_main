import Link from "next/link";
import React from "react";
import { IoMdMailUnread } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg px-5 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {/* Logo and Description */}
        <div className="sm:ml-10 md:ml-20">
          <Image
          width={50} height={50}
            src="/logo/logo.svg"
            alt="Logo"
            className=" h-[40px] w-[160px] mr-2 object-cover"
          />

          <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Building Digital Excellence with Innovative IT Services and Algo Expertise.
          </p>
             <h2 className="pt-5 md:text-xl text-lg font-semibold">Follow us</h2>
          <div className="flex pt-2  ">
            <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2">
              <Link
                href="/"
                className="text-pink-500 text-xl sm:text-2xl hover:text-blue-800"
              >
                <BsInstagram />
              </Link>
            </h1>
            <h1 className="bg-white w-max p-3 rounded-full shadow-xl mr-2">
              <Link
               href="/"
                className="text-blue-600 text-xl sm:text-2xl hover:text-blue-800"
              >
                <FaFacebookF />
              </Link>
            </h1>
            <h1 className="bg-white w-max p-3 rounded-full shadow-xl">
              <Link
                href="/"
                className="text-black text-xl sm:text-2xl hover:text-blue-800"
              >
                <FaXTwitter />
              </Link>
            </h1>
          </div>
        </div>

        {/* Quick Links */}
        <div className=" md:text-center text-start">
          <h1 className="text-sm sm:text-xl font-semibold  pt-8">
          Our Services
          </h1>
          <div className="py-3 text-gray-700">
            
            <p className="hover:text-green-400 pt-3">
              <Link href={"/"}>Content Creation</Link>
            </p>
            <p className="hover:text-green-400 pt-3">
              <Link href={"/"}>Email Marketing</Link>
            </p>
            <p className="hover:text-green-400 pt-4">
              <Link href={"/"}>Web Development</Link>
            </p>
            <p className="hover:text-green-400 pt-3">
              <Link href={"/"}>Social Media Marketing</Link>
            </p>
            <p className="hover:text-green-400 pt-3">
              <Link href={"/"}>Search Engine Optimization</Link>
            </p>

            
          </div>
        </div>

        {/* Explore More */}
        <div className="md:text-center text-start">
          <h1 className="text-sm sm:text-xl font-semibold pt-8">
          Information
          </h1>
          <div className="py-3 text-gray-700">
            <p className="hover:text-green-400 pt-2">
              <Link href={"/privacy-policy"}>Privacy Policy</Link>
            </p>
            <p className="hover:text-green-400 pt-2">
              <Link href={"/refund-policy"}>Refund Policies</Link>
            </p>
            <p className="hover:text-green-400 pt-2">
              <Link href={"/"}>Terms & Conditions</Link>
            </p>
          <p className="hover:text-green-400 pt-4">
              <Link href={"/"}>Disclosure</Link>
            </p>
            
            
            <p className="hover:text-green-400 pt-3">
              <Link href={"/api-bridge"}>Api Bridge</Link>
            </p>

          </div>
        </div>

        {/* Get In Touch */}
        <div>
          <h1 className="py-6 font-semibold text-sm sm:text-xl  text-start">
            Get In Touch
          </h1>
          <div className="flex  md:text-center text-start mb-3">
            <p className="mr-2 text-xl sm:text-2xl text-green-600">
              <IoCall />
            </p>
            <h1 className="text-sm sm:text-base text-gray-600">
            +91 8602260428
            </h1>
          </div>
          <div className="flex  md:text-center text-start">
            <p className="mr-2 text-xl sm:text-2xl text-green-600">
              <IoMdMailUnread />
            </p>
            <h1 className="text-sm sm:text-base">
              <span className="text-black">E-mail</span> -{" "}
              <a
                href="mailto:info@hermastech.com"
                className="text-blue-500 hover:underline"
              >
                info@hermastech.com
              </a>
            </h1>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="my-5 border-gray-300" />

      {/* Footer Bottom */}
      <div className="md:text-center text-start sm:text-left mb-4 sm:mb-0">
        Copyright &copy; 2025 HermasTech | All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;