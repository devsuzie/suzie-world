"use client";

import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [contactOpen, setContactOpen] = useState(false);
  const [seriesOpen, setSeriesOpen] = useState(false);
  const [sitemapOpen, setSitemapOpen] = useState(false);

  const toggleContact = () => setContactOpen(!contactOpen);
  const toggleSeries = () => setSeriesOpen(!seriesOpen);
  const toggleSitemap = () => setSitemapOpen(!sitemapOpen);

  return (
    <footer className="bg-gray-dark pb-8 md:py-8">
      <div className="mx-auto max-w-7xl p-6 lg:px-8 text-white-gray flex flex-col-reverse gap-y-16 md:flex-row md:gap-y-0">
        {/* Logo Section */}
        <div className="w-full mb-4 flex justify-center md:w-1/2 md:justify-start">
          <img src="/big-logo.svg" alt="Logo" className="h-28" />
        </div>

        {/* Columns Section */}
        <div className="w-full md:w-1/2 md:flex md:justify-between">
          {/* Contact Column */}
          <div className="w-full md:w-auto border-b md:border-none border-white py-3 md:py-0">
            <button
              onClick={toggleContact}
              className="flex justify-between items-center w-full text-left md:text-center leading-10"
            >
              <h3 className="font-bold">Contact</h3>
              <span className="md:hidden">
                {contactOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`pl-4 md:pl-0 ${contactOpen ? "block" : "hidden"} md:block`}
            >
              <a href="mailto:hello@suzie.world" className="mb-2 block">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/devsuzie/"
                target="_blank"
                className="block"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Series Column */}
          <div className="w-full md:w-auto border-b md:border-none border-white py-3 md:py-0">
            <button
              onClick={toggleSeries}
              className="flex justify-between items-center w-full text-left md:text-center leading-10"
            >
              <h3 className="font-bold">Series</h3>
              <span className="md:hidden">
                {seriesOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`pl-4 md:pl-0 ${seriesOpen ? "block" : "hidden"} md:block`}
            >
              <Link href="/series/tag/personal" className="mb-2 block">
                Personal
              </Link>
              <Link href="/series/tag/programming" className="block">
                Programming
              </Link>
            </div>
          </div>

          {/* Sitemap Column */}
          <div className="w-full md:w-auto border-b md:border-none border-white py-3 md:py-0">
            <button
              onClick={toggleSitemap}
              className="flex justify-between items-center w-full text-left md:text-center leading-10"
            >
              <h3 className="font-bold">Sitemap</h3>
              <span className="md:hidden">
                {sitemapOpen ? (
                  <ChevronUpIcon className="w-5 h-5" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5" />
                )}
              </span>
            </button>
            <div
              className={`pl-4 md:pl-0 ${sitemapOpen ? "block" : "hidden"} md:block`}
            >
              <Link href="/" className="mb-2 block">
                Home
              </Link>
              <Link href="/about" className="mb-2 block">
                About
              </Link>
              <Link href="/series" className="block">
                Series
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-[rgba(245,245,245,0.4)] pt-4 text-center text-[rgba(245,245,245,0.4)]">
        © {new Date().getFullYear()} Suzie World
      </div>
    </footer>
  );
};

export default Footer;
