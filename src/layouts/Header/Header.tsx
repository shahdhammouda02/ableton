"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/logo.svg";

export const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const mainLinks = [
    "live",
    "push",
    "move",
    "note",
    "link",
    "shop",
    "packs",
    "help",
  ];

  const moreLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/classroom", label: "Ableton for the Classroom" },
    { href: "/colleges", label: "Ableton for Colleges and Universities" },
    { href: "/training", label: "Certified Training" },
    { href: "/about", label: "About Ableton" },
    { href: "/jobs", label: "Jobs" },
    { href: "/apprenticeships", label: "Apprenticeships" },
  ];

  const moreContentLinks = [
    {
      href: "/loop",
      title: "Loop",
      desc: "Watch Talks, Performances and Features from Ableton's Summit for Music Makers",
    },
    {
      href: "/learning-music",
      title: "Learning Music",
      desc: "Learn the fundamentals of music making right in your browser.",
    },
    {
      href: "/learning-synths",
      title: "Learning Synths",
      desc: "Get started with synthesis using a web-based synth and accompanying lessons.",
    },
    {
      href: "/making-music",
      title: "Making Music",
      desc: "Some tips from 74 Creative Strategies for Electronic Producers.",
    },
  ];

  return (
    <header className="w-full border-b border-gray-200 bg-white relative">
      {showMobileMenu && (
        <div className="lg:hidden fixed inset-0 bg-blue-600 z-40 h-20"></div>
      )}

      <div
        className={`w-full flex justify-between items-center px-4 lg:px-10 py-5 relative z-50 ${
          showMobileMenu ? "bg-blue-600 lg:bg-white" : "bg-white"
        }`}
      >
        <div className="flex items-center space-x-4 lg:space-x-10">
          <Image
            src={logo}
            alt="Ableton Logo"
            width={100}
            height={40}
            className={`h-8 w-auto max-w-[100px] cursor-pointer ${
              showMobileMenu ? "invert lg:invert-0" : ""
            }`}
          />

          <button
            className={`lg:hidden flex items-center justify-center space-x-1 focus:outline-none p-2 text-xl sm:text-2xl ${
              showMobileMenu ? "text-white" : "text-black"
            }`}
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <span>Menu</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                showMobileMenu ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          <nav className="hidden lg:flex items-center space-x-7 text-xl">
            {mainLinks.map((link) => (
              <Link key={link} href={`/${link}`} className="text-black">
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </Link>
            ))}

            <button
              onClick={() => setShowMoreMenu(!showMoreMenu)}
              className="text-orange-500 focus:outline-none cursor-pointer"
            >
              {showMoreMenu ? "More -" : "More +"}
            </button>
          </nav>
        </div>

        <div className="hidden lg:flex items-center space-x-7 text-xl">
          <Link href="/try" className="text-blue-600">
            Try Live 12 for free
          </Link>
          <Link href="/login" className="text-black">
            Log in or register
          </Link>
        </div>
      </div>

      {showMobileMenu && (
        <div
          className="lg:hidden fixed left-0 top-20 w-full bg-blue-600 text-white z-40 px-4 py-6 space-y-4 overflow-y-auto"
          style={{ height: "calc(100vh - 80px)" }}
        >
          {mainLinks.map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className="block py-2 text-xl sm:text-2xl"
              onClick={() => setShowMobileMenu(false)}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}

          <Link
            href="/try"
            className="block py-2 text-xl sm:text-2xl"
            onClick={() => setShowMobileMenu(false)}
          >
            Try Live 12 for free
          </Link>
          <Link
            href="/login"
            className="block py-2 text-xl sm:text-2xl"
            onClick={() => setShowMobileMenu(false)}
          >
            Log in or register
          </Link>

          <div className="mt-6">
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              More on Ableton.com:
            </h3>
            {moreLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-xl sm:text-2xl ${
                  item.href === "/about" ? "text-orange-300" : ""
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {showMoreMenu && (
        <div className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-md z-50">
          <div className="max-w-screen-2xl mx-auto px-4 lg:px-10 py-6 lg:py-10">
            <div className="flex flex-wrap items-start gap-x-10 gap-y-4 mb-6 lg:mb-10">
              <h3 className="text-xl w-full">More on Ableton.com:</h3>
              {moreLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xl whitespace-nowrap ${
                    item.href === "/about" ? "text-orange-400" : "text-black"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap items-start gap-x-10 gap-y-6">
              <h3 className="text-xl w-full">More from Ableton:</h3>
              {moreContentLinks.map(({ href, title, desc }) => (
                <div key={href} className="flex-1 min-w-[200px] py-2">
                  <Link href={href} className="text-xl block text-black">
                    {title}
                  </Link>
                  <p className="text-black text-xl mt-1 leading-snug">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
