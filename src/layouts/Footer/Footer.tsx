import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaDiscord,
  FaTiktok,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { Button, Input } from "@/components/page";

const Footer = () => {
  return (
    <footer className="w-full px-2 py-10 text-gray-800 max-w-7xl mx-auto">
      <div className="border-t border-gray-300 -mx-[calc(45vw-45%)] mb-12"></div>

      <div className="mb-12">
        <h1 className="text-3xl md:text-7xl sm:text-3xl">Ableton</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-20 gap-y-12 mb-10">
        <div className="text-xl">
          <div className="mb-3 cursor-pointer">
            Register Live, Push or Move &gt;
          </div>
          <div className="mb-3 cursor-pointer">About Ableton &gt;</div>
          <div className="mb-3 cursor-pointer">Jobs &gt;</div>
          <div className="flex gap-3 mt-6">
            <a href="#" className="text-blue-600 hover:opacity-80">
              <FaFacebook size={30} />
            </a>
            <a href="#" className="hover:opacity-80">
              <RiTwitterXFill size={30} />
            </a>
            <a href="#" className="text-red-600 hover:opacity-80">
              <FaYoutube size={30} />
            </a>
            <a href="#" className="text-pink-600 hover:opacity-80">
              <FaInstagram size={30} />
            </a>
            <a href="#" className="hover:opacity-80">
              <FaTiktok size={30} />
            </a>
            <a href="#" className="text-blue-700 hover:opacity-80">
              <FaDiscord size={30} />
            </a>
          </div>
        </div>

        <div className="text-xl min-w-[400px]">
          <h3 className="text-xl sm:text-2xl md:text-2xl mb-4">Education</h3>
          <div className="mb-3 cursor-pointer">
            Offers for students and teachers &gt;
          </div>
          <div className="mb-3 cursor-pointer">
            Ableton for the Classroom &gt;
          </div>
          <div className="mb-3 cursor-pointer">
            Ableton for Colleges and Universities &gt;
          </div>
        </div>

        <div className="lg:col-span-2 text-xl md:transform md:translate-x-7">
          <h3 className="text-xl sm:text-2xl md:text-2xl mb-4">
            Sign up to our newsletter
          </h3>
          <p className="mb-4 max-w-[500px]">
            Enter your email address to stay up to date with the latest offers,
            tutorials, downloads, surveys and more.
          </p>
          <div className="flex w-full">
            <Input
              type="email"
              placeholder="Email Address"
              className="flex-grow rounded-r-none py-3 pr-12 sm:pr-12 md:pr-40"
              fullWidth={false}
            />
            <Button
              type="submit"
              className="rounded-l-none px-6 py-2.5"
              fullWidth={false}
            >
              Sign up
            </Button>
          </div>
        </div>
        <div className="text-xl">
          <h3 className="text-xl sm:text-2xl md:text-2xl mb-4">Community</h3>
          <div className="mb-3 cursor-pointer">
            Find Ableton User Groups &gt;
          </div>
          <div className="mb-3 cursor-pointer">
            Find Certified Training &gt;
          </div>
          <div className="mb-3 cursor-pointer">
            Become a Certified Trainer &gt;
          </div>
        </div>

        <div className="text-xl">
          <h3 className="text-xl sm:text-2xl md:text-2xl mb-4">
            Language and Location
          </h3>
          <div className="flex gap-1">
            <select className="px-3 py-2 bg-gray-200 text-sm">
              <option>English</option>
              <option>Francais</option>
            </select>
            <select className="px-3 py-2 bg-gray-200 text-sm">
              <option>Palestinian Territory, Occ</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 mb-10">
        <div className="flex flex-wrap gap-4 mb-4 md:mb-0">
          <a href="#" className="text-base">
            Contact Us
          </a>
          <a href="#" className="text-base">
            Press Resources
          </a>
          <a href="#" className="text-base">
            Legal Info
          </a>
          <a href="#" className="text-base">
            Corporate Information
          </a>
          <a href="#" className="text-base">
            Privacy Policy
          </a>
          <a href="#" className="text-base">
            Cookie Settings
          </a>
          <a href="#" className="text-base">
            Imprint
          </a>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base">Made in Berlin</span>
          <Image src={logo} alt="" width={50} height={50} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
