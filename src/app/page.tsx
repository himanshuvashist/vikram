"use client";

import { theGirlNextDoorFont } from "@/fonts/fonts";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-between p-8 md:p-16">
      <div className="container">
        <section className="grid grid-cols-1 lg:grid-cols-2 my-8 md:my-16">
          <div className="flex flex-col justify-center items-center md:items-start pb-8 lg:pb-0">
            <div className="md:text-left pr-8">
              <p className="font-mono text-lg md:text-3xl mb-4 md:mb-8 font-semibold">
                Hi, I am <span className="underline">Vikram</span>.
              </p>
              <p className={`${"font-mono text-md md:text-xl"}`}>
                Welcome to ShutterBlaze Photography & Videography! Capturing the
                moments that matter.
              </p>
            </div>
          </div>
          <div className="h-full">
            <div className="rounded-2xl relative">
              <Image
                src="/vikTwo.png"
                width={800}
                height={800}
                className="rounded-2xl"
                alt="Profile picture of Vikram"
                style={{ filter: "grayscale(100%)" }}
              />
              <div className="absolute inset-0 bg-gray-300 opacity-60 rounded-2xl" />
              <div
                className={`${"absolute top-0 bottom-0 text-left  text-2xl md:text-4xl font-bold p-4 w-2/3"} ${
                  theGirlNextDoorFont.className
                }`}
              >
                Capture the moment . . .
              </div>
              <div
                className={`${"absolute origin-top-right rotate-[-90deg] top-0 right-0 text-left text-sm font-semibold"} ${
                  theGirlNextDoorFont.className
                }`}
              >
                Let me capture you every beautifyl moments.
              </div>

              <Image
                src="/vikTwo.png"
                width={800}
                height={800}
                className="rounded-2xl absolute top-0"
                alt="Profile picture of Vikram"
                style={{ filter: "grayscale(100%)" }}
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-evenly w-full">
          <div className="flex justify-center my-8">
            <a
              href="https://www.instagram.com/vikramjeet2.0"
              className="text-gray-700 hover:text-gray-900 mr-4 "
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://www.instagram.com/vikramjeet2.0"
              className="text-gray-700 hover:text-gray-900 mr-4"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.instagram.com/vikramjeet2.0"
              className="text-gray-700 hover:text-gray-900"
            >
              <FaFacebook size={24} />
            </a>
          </div>
          <section className="text-center lg:text-left">
            <div className="flex flex-col m-auto">
              <div className="">
                <h2 className="text-md md:text-xl font-semibold mb-2 ">
                  Contact Me
                </h2>
                <p className="text-md md:text-lg mb-2">
                  <a
                    className="hover:underline"
                    href="mailto:vickycool.buddy750@gmail.com"
                  >
                    : vickycool.buddy750@gmail.com
                  </a>
                </p>
                <p className="text-md md:text-lg">
                  <a className="hover:underline" href="tel:+918368507050">
                    : +91 8368507050
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
